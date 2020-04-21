import api from './api';
import { IMessage } from './types';

export const sendMessage = (data: IMessage) => {
  const url = '/bot';
  return api.post(url, data);
};