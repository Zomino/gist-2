import { model, Schema } from 'mongoose';

export interface User {
  steamID: number
  username: string
  friendIDs: (typeof Schema.Types.ObjectId)[]
  listIDs: (typeof Schema.Types.ObjectId)[]
}

const UserSchema = new Schema<User>({
  steamID: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  friendIDs: [Schema.Types.ObjectId],
  listIDs: [Schema.Types.ObjectId],
});

const UserModel = model<User>('User', UserSchema);

export default UserModel;
