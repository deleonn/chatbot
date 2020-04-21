import * as React from 'react';
import styledComponents from 'styled-components';
import Dialog from './Dialog';
import Input from './Input';
import { IMessage, IResponse } from '../util/types';
import { sendMessage } from '../util/bot';

interface IState {
  value: string;
  messages: IMessage[];
}

const ChatWindow = styledComponents.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  height: 100vh;
`;

const MessagesWindow = styledComponents.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 1rem;
`;

const InputArea = styledComponents.div`
  display: flex;
`;

class UI extends React.Component<{}, IState> {
  public state = {
    value: '',
    messages: [
      {id: 1, message: '¡Hola! Preguntame algo.', client: false},
    ],
  }

  public render() {
    const { value, messages } = this.state;

    return (
      <ChatWindow>
        <MessagesWindow id="message_window">
          {messages.map(data => (
            <Dialog
              key={data.id}
              text={data.message}
              client={data.client}
            />
          ))}
        </MessagesWindow>

        <InputArea>
          <form onSubmit={this.onSubmit}>
            <Input
              value={value}
              onChange={this.onChange}
            />
          </form>
        </InputArea>
      </ChatWindow>
    );
  }

  private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    this.setState({
      value: e.target.value,
    });
  }

  private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { messages, value } = this.state;
    
    const message: IMessage = {
      client: true,
      message: value,
      id: Math.floor(Math.random() * 100),
    }

    if (!value) {
      return;
    }

    this.setState({
      messages: [...messages, message],
      value: '',
    });

    sendMessage(message).then(async (res: any) => {
      const newMessage: IMessage = {
        client: false,
        message: res.data.response,
        id: Math.floor(Math.random() * 100),
      }

      this.setState({
        messages: [...messages, message, newMessage]
      });
    });

    this.scrollDown();
  }

  private scrollDown = () => {
    let messageWindow = document.getElementById('message_window');
    if (messageWindow) {
      messageWindow.scrollTop = messageWindow.scrollHeight;
    }
  }
}

export default UI;