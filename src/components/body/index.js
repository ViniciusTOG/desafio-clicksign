import React from "react"
import {
  Container,
  Img,
  Text,
  Button,
  ButtonImg,
} from "./styles/body"

export default function Body({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Body.Image = function BodyImg({ src, ...restProps }) {
  return <Img src={src} {...restProps} />
};

Body.Text = function BodyText({children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
};

Body.Button = function BodyButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
};

Body.ButtonImg = function BodyButtonImg({ src, ...restProps }) {
  return <ButtonImg src={src} {...restProps} />
};
