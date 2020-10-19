
import React from 'react'

import { Container, Div, THead, TBody, Tr, Td, Button, Img } from "./styles/table"

export default function Table({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Table.Div = function TableDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>
};

Table.Head = function TableHead({ children, ...restProps }) {
  return <THead {...restProps}>{children}</THead>
};

Table.Body = function TableBody({ children, ...restProps }) {

  return <TBody {...restProps}>{children}</TBody>
};

Table.Tr = function TableTr({ children, ...restProps }) {
  return <Tr {...restProps}>{children}</Tr>
};

Table.Td = function TableTd({ children, ...restProps }) {
  return <Td {...restProps}>{children}</Td>
};

Table.Button = function TableButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
};

Table.ButtonImg = function TableButtonImg({ src, ...restProps }) {
  return <Img src={src} {...restProps} />
};
