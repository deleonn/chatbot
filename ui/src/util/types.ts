import { AxiosResponse } from "axios";

export interface IMessage {
  id: number;
  message: string;
  client: boolean;
}

export interface IResponse extends AxiosResponse {
  query?: string;
  response?: string;
  intent?: string;
}