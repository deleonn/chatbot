import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  client?: boolean;
  text: string;
}

interface IDialogBox {
  client?: boolean;
}

const Container = styledComponents.div<IDialogBox>`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  min-height: 30px;
`;

const DialogBox = styledComponents.div<IDialogBox>`
  align-self: ${props => props.client
  ? 'flex-end'
  : 'flex-start'};
  background-color: ${props => props.client
  ? '#b6e1ff'
  : '#f0f0f0'};
  border-radius: 2rem;
  color: ${props => props.client
  ? '#2d2d2d'
  : '#2d2d2d'};
  display: inline-block;
  font-family: Helvetica, sans-serif;
  max-width: 75%;
  padding: 7px 13px;
  width: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const Dialog = ({ text, client }: IProps) => (
  <Container>
    <DialogBox client={client}>
      <p style={{ margin: 0, padding: 0,}}>{text}</p>
    </DialogBox>
  </Container>
);

export default Dialog;