import { User } from 'models';

export async function updateUser(steamId: string) {
  return null;
}

export async function updateFriends(steamId: string, steamFriendIds: string[]) {
  // TESTING
  // const zou = await User.create({
  //   steamId,
  // });

  // const angela = await User.create({
  //   steamId: '76561198869885446',
  // });

  // await Friend.create({
  //   userId: zou.id,
  //   friendId: angela.id,
  // });

  const user = await User.findOne({
    include: {
      model: User,
      as: 'friends',
    },
    where: { steamId },
  });
  // TESTING
  const friends = user?.friends;

  console.log(user?.toJSON());
  // const friendIds = user.map((friend) => friend.steamId);
  // const missingFriendIds = friendIds.filter((friendId) => (
  //   !steamFriendIds.includes(friendId)
  // ));
}
