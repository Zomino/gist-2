import { model, Schema } from 'mongoose';
import { type User } from './types';

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
