import mongoose from 'mongoose';
import shortid from 'shortid';

const { Schema } = mongoose;

const messageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  senderKey: {
    type: String,
    required: true,
  },
  receiverKey: {
    type: String,
    required: true,
  },
  key: {
    type: String,
    required: true,
    unique: true,
    default: shortid.generate,
  },
}, {
  useTimestamps: true,
});

const Message = mongoose.model('Message', messageSchema);

export default Message;