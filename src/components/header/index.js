import React from 'react'
import {Container, Logo, SearchContainer, SearchInput, SearchImg} from './styles/header'

export default function Header({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({src, ...restProps}) {
  return <Logo src={src} {...restProps}/>
}

Header.SearchContainer = function HeaderSearchContainer({children, ...restProps}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>
}

Header.SearchInput = function HeaderSearchInput({children, ...restProps}) {
  return <SearchInput {...restProps}>{children}</SearchInput>
}

Header.SearchImg = function HeaderSearchImg({src, ...restProps}) {
  return <SearchImg src={src} {...restProps}/>
}
