import axios from 'axios';
import { uniqBy } from 'lodash';

import { type tGame, environment } from 'common';
// import { type tFriendModel, Friend, User } from 'models';
import { type tFriendModel, Friend, User } from 'models';

type tFetchParams = {
  [key: string]: boolean | string | tFetchParams
}

type tFriend = {
  steamid: string
}

interface iPlayer extends tFriend {
  avatarfull: string
  personaname: string
  profileurl: string
}

function fetch(URLExtension: string, customParams: tFetchParams) {
  const baseURL = 'http://api.steampowered.com';
  const baseParams = { key: environment.steamAPI.key };

  const URL = `${baseURL}${URLExtension}`;
  const params = {
    ...baseParams,
    ...customParams,
  };

  return axios.get(URL, { params });
}

async function getFriendIds(steamId: string) {
  const URLExtension = '/ISteamUser/GetFriendList/v0001/';
  const customParams = {
    steamid: steamId,
  };

  const result = await fetch(URLExtension, customParams);
  const friends: tFriend[] = result.data.friendslist.friends;
  const friendIds = friends.map((friend) => friend.steamid);

  return friendIds;
}

async function getGameInfo(steamIds: string[]) {
  const URLExtension = '/IPlayerService/GetOwnedGames/v0001/';

  return Promise.all(
    steamIds.map(async (steamId) => {
      const customParams = {
        input_json: {
          steamid: steamId,
          include_appinfo: true,
          include_played_free_games: true,
        },
      };
      const result = await fetch(URLExtension, customParams);
      const userGames = result.data.response.games;
      return userGames;
    }),
  )
    .then((gameCollections) => (
      gameCollections.filter((gameCollection) => gameCollection)
    ))
    .then((gameCollections) => gameCollections.flat())
    .then((games) => uniqBy(games, 'appid'))
    .then((games) => (
      games.map((game: tGame) => ({
        appid: game.appid,
        name: game.name,
        img_icon_url: game.img_icon_url,
      }))
    ));
}

async function getUserInfo(steamIds: string[]) {
  const URLExtension = '/ISteamUser/GetPlayerSummaries/v0002/';

  // Steam API can only handle up to 100 user IDs at a time
  const steamIdSets = [];
  let startIndex = 0;
  while (startIndex < steamIds.length) {
    const steamIDSet = steamIds.slice(startIndex, startIndex + 100);
    steamIdSets.push(steamIDSet);
    startIndex += 100;
  }

  return Promise.all(
    steamIdSets.map(async (steamIdSet) => {
      const customParams = {
        steamids: steamIdSet.join(','),
      };

      const result = await fetch(URLExtension, customParams);
      const players = result.data.response.players;
      const userInfoSet = players.map((player: iPlayer) => ({
        avatarfull: player.avatarfull,
        personaname: player.personaname,
        profileurl: player.profileurl,
        steamid: player.steamid,
      }));

      return userInfoSet;
    }),
  )
    .then((userInfoSets) => userInfoSets.flat());
}

// async function updateUser(steamId: string) {
// }

async function updateFriends(steamId: string, steamFriendIds: string[]) {
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
