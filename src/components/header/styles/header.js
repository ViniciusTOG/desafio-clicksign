import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
    object-fit: contain;
    margin-right: 60px;
    min-width: 100px;


`;

export const SearchContainer = styled.div`
  width: 1032px;
  height: 32px;
  border-radius: 4px;
  background-color: #e4e7f4;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: #e4e7f4;
  font-size: 16px;
  color: #9198af;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 8px;
`;

export const SearchImg = styled.img`
  background: rgb(0, 0, 0, 0);
  object-fit: contain;
  padding: 8px;
`;
