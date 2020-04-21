import * as React from 'react';
import styledComponents from 'styled-components';

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const InputBox = styledComponents.input`
  background-color: #f0f0f0;
  border: none;
  display: flex;
  padding: 1rem 13px;
  font-family: Helvetica, sans-serif;
  outline: none;
`;

const Input = ({ onChange, value }: IProps) => (
  <Container>
    <InputBox
      onChange={onChange}
      placeholder="Escribe un mensaje..."
      value={value}
    />
  </Container>
);

export default Input;