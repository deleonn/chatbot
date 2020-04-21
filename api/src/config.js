import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env'), silent: true });

const { env } = process;

export const APP_URL = env.APP_URL || 'http://localhost:3000';
export const MONGODB_URI = env.MONGODB_URI || 'mongodb://mongoadmin:secret@localhost:27017/chatbot';
export const PORT = env.PORT || 4000;
export const SECRET = env.SECRET_JWT;
