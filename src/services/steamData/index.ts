import { User } from 'models';
import { syncFriends, syncGameData, syncUserData } from './helper';
import steam from './steam';

async function updateForOneUser(steamId: string) {
  await syncFriends(steamId);
  await syncUserData(steamId);
  await syncGameData(steamId);
}

async function createUser(steamId: string) {
  const [userInfo] = await steam.getUserData([steamId]);
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
