import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

interface IUser {
  _id: number;
  name?: string;
  avatar?: any;
}

interface IMessage {
  _id: number;
  text: string;
  createdAt: number | Date;
  user: IUser;
  system?: boolean;
}

interface IState {
  messages: IMessage[];
}

const styles = StyleSheet.create({
  black: {
    backgroundColor: 'black',
  },
});

class Chat extends React.Component<{}, IState> {
  public state: IState = {
    messages: [],
  };

  public render() {
    const { messages } = this.state;

    return (
      <GiftedChat
        messages={messages}
        onSend={this.onSend}
      />
    );
  }

  private onSend = (messages?: IMessage[]) => {
    if (messages) {
      messages[0].user.name = 'Joel de Leon';
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages) as IMessage[],
      }));

      fetch('http://localhost:4000/bot', {
        body: JSON.stringify({ message: messages[0].text }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      .then((res: any) => res.json())
      .then((res: any) => {
        const newMessage: IMessage[] = [{
          _id: Math.floor(((Math.random() as any) * 100000) + 1),
          createdAt: new Date(),
          text: res.response,
          user: {
            _id: 0,
            name: 'Bot',
          },
        }];

        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, newMessage) as IMessage[],
        }));
      })
      .catch(err => console.log(err));
    }
  }
}

export default Chat;
