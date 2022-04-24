import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
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

const UserModel = model('User', UserSchema);

export default UserModel;
