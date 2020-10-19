import React from 'react'
import {Container, Frame, Title, Text, Label, Input, ButtonContainer, Button} from './styles/form'

export default function Form({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Form.Frame = function FormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
};


Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
};

Form.Text= function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />
};

Form.ButtonContainer = function FormButtonContainer({children,...restProps}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
};
