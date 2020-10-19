import styled, {keyframes} from "styled-components";

export const animateTr = keyframes`
  from { background-color: #fff3f2; }
  90% {background-color: #fff3f2;}
  to { background-color: white; }
`;

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;

  tbody tr:hover td {
    background-color: #fff3f2;
  }

`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  background: none;
`;

export const THead = styled.thead`
  td {
    font-size: 14px;
    color: #9198af;
    background-color: white;
    padding-top: 16px;
    padding-bottom: 9px;
  }
`;

export const TBody = styled.tbody`
  td {
    font-size: 14px;
    color: #2a2d3b;
    background-color: white;
    padding: 8px 0px;
  }
`;

export const Tr = styled.tr`
  border: solid 1px #e1e1e1;
  &:hover {
    background: red;
  }
`;

export const Td = styled.td`
`;

export const Button = styled.button`
  margin-left: 24px;
  object-fit: contain;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Img = styled.img`
  background: none;
`;
