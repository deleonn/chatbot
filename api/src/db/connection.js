import mongoose from 'mongoose';
import { MONGODB_URI } from '../config';

mongoose.Promise = global.Promise;

export const connectToDb = async () => (
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
);

export const disconnectFromDb = async () => (
  mongoose.disconnect()
);