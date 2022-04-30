import { Schema } from 'mongoose';

export interface User {
  steamID: number
  username: string
  friendIDs: (typeof Schema.Types.ObjectId)[]
  listIDs: (typeof Schema.Types.ObjectId)[]
}
