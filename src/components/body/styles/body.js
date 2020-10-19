import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 32px auto;
`;
export const Img = styled.img`
  object-fit: contain;
`;

export const Text = styled.p`
  margin-top: 24px;
  font-size: 16px;
  text-align: center;
  color: #2a2d3b;
`;

export const Button = styled.button`
  width: 144px;
  min-width: 110px;
  height: 40px;
  margin-top: 24px;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  background-color: #dbff90;
  font-size: 14px;
  font-weight: 500;
  color: #fa7268;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

`;

export const ButtonImg = styled.img`
  object-fit: contain;
  background: none;
  margin-right: 8px;
`;
