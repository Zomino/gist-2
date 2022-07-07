import { Op } from 'sequelize';

import { Friend, User } from 'models';

import steam from './steam';

async function getUserWithFriends(steamId: string) {
  const user = await User.findOne({
    where: { steamId },
    include: {
      model: User,
      as: 'friends',
    },
  });

  if (!user) throw new Error('User not found');

  return user;
}

export async function syncFriends(steamId: string) {
  const user = await getUserWithFriends(steamId);
  const allOtherUsers = await User.findAll({
    where: { id: { [Op.ne]: user.id } },
  });
  const friendSteamIds = await steam.getFriendSteamIds(steamId);

  const friendIdsToDestroy = user.friends
    .filter((friend) => (
      !friendSteamIds.includes(friend.steamId)
    ))
    .map((friend) => friend.id);

  await Friend.destroy({
    where: {
      userId: user.id,
      friendId: { [Op.in]: friendIdsToDestroy },
    },
  });

  const friendsToCreate = allOtherUsers
    .filter((otherUser) => (
      friendSteamIds.includes(otherUser.steamId)
    ))
    .map((otherUser) => ({
      userId: user.id,
      friendId: otherUser.id,
    }));

  await Friend.bulkCreate(friendsToCreate, { validate: true });
}

export async function syncGameData(steamId: string) {
  // TODO: implement
  return null;
}

export async function syncUserData(steamId: string) {
  const user = await getUserWithFriends(steamId);
  const userSteamId = user.steamId;
  const friendSteamIds = user.friends.map((user) => user.steamId);
  const allSteamIds = [userSteamId, ...friendSteamIds];
  const allUserData = await steam.getUserData(allSteamIds);

  // Overwrite data
  allSteamIds.forEach(async (steamId) => {
    const updatedData = allUserData.find((userDataItem) => (
      userDataItem.steamid === steamId
    ));

    if (!updatedData) throw new Error('Corresponding data object not found');

    await User.update(
      {
        steamId: updatedData.steamid,
        username: updatedData.personaname,
        avatarURL: updatedData.avatarfull,
        profileURL: updatedData.profileurl,
      },
      { where: { steamId } },
    );
  });
}
