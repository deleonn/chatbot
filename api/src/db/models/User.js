import mongoose from 'mongoose';
import shortid from 'shortid';

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
  },
  key: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
