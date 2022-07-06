import axios from 'axios';
import { uniqBy } from 'lodash';

import { type Game, environment } from 'common';
import { User } from 'models';

type FetchParams = {
  [key: string]: boolean | string | FetchParams
}

type Friend = {
  steamid: string
}

interface Player extends Friend {
  avatarfull: string
  personaname: string
  profileurl: string
}

function fetch(URLExtension: string, customParams: FetchParams) {
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
  const friends: Friend[] = result.data.friendslist.friends;
  const friendIds = friends.map((friend) => friend.steamid);

  return friendIds;
}

async function getGameInfo(steamIds: string[]) {
  const URLExtension = '/IPlayerService/GetOwnedGames/v0001/';

  const gameInfo = await Promise.all(
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
      games.map((game: Game) => ({
        appid: game.appid,
        name: game.name,
        img_icon_url: game.img_icon_url,
      }))
    ));

  return gameInfo;
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

  const userInfo = await Promise.all(
    steamIdSets.flatMap(async (steamIdSet) => {
      const customParams = {
        steamids: steamIdSet.join(','),
      };

      const result = await fetch(URLExtension, customParams);
      const players = result.data.response.players;
      const userInfoSet = players.map((player: Player) => ({
        avatarfull: player.avatarfull,
        personaname: player.personaname,
        profileurl: player.profileurl,
        steamid: player.steamid,
      }));

      return userInfoSet;
    }),
  );

  return userInfo;
}

async function updateFriends(steamid: string, friendIds: string[]) {
  // fetch friends from database by steam Id
  // find where the friendIDs and database friendIDs overlap
  // delete those relationships from the database
  // upsert the rest of the friend records in the database
}

async function updateForOneUser(steamId: string) {
  const friendIds = await getFriendIds(steamId);

  await updateFriends(steamId, friendIds);

  const allIds = [...friendIds, steamId];
  const allUserInfo = await getUserInfo(allIds);
  const allGameInfo = await getGameInfo(allIds);
  console.log('hi');

  // get data for all friends and self
  // get game data for all friends and self
  // store in database
}

export default {
  updateForOneUser,
};
