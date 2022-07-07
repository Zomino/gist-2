import axios from 'axios';
import { uniqBy } from 'lodash';

import { type tGame, environment } from 'common';

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

export async function getFriendIds(steamId: string) {
  const URLExtension = '/ISteamUser/GetFriendList/v0001/';
  const customParams = {
    steamid: steamId,
  };

  const result = await fetch(URLExtension, customParams);
  const friends: tFriend[] = result.data.friendslist.friends;
  const friendIds = friends.map((friend) => friend.steamid);

  return friendIds;
}

export async function getGameInfo(steamIds: string[]) {
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

export async function getUserInfo(steamIds: string[]) {
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
