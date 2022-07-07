export type tUser = {
  steamid: string
}

export interface iUserWithInfo extends tUser {
  avatarfull: string
  personaname: string
  profileurl: string
}
