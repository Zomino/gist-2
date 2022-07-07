import { User } from 'models';
import { updateFriends } from './helper';
import { getFriendIds, getGameInfo, getUserInfo } from './steam';

async function updateForOneUser(steamId: string) {
  const friendIds = await getFriendIds(steamId);

  await updateFriends(steamId, friendIds);

  const allIds = [...friendIds, steamId];
  const allUserInfo = await getUserInfo(allIds);
  const allGameInfo = await getGameInfo(allIds);

  // get data for all friends and self
  // get game data for all friends and self
  // store in database
}

async function createUser(steamId: string) {
  const [userInfo] = await getUserInfo([steamId]);
  return User.create({
    avatarURL: userInfo.avatarfull,
    profileURL: userInfo.profileurl,
    steamId: userInfo.steamid,
    username: userInfo.personaname,
  });
}

export default {
  createUser,
  updateForOneUser,
};
