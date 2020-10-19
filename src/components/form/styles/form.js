import styled from 'styled-components'

export const Container = styled.form`
   {
    width: 400px;
    border-radius: 16px;
    box-shadow: 0 16px 10px 0 rgba(0, 0, 0, 0.16);
    background-color: rgba(0, 0, 0, 0.16);
    z-index: 1;
    position: absolute;
    margin-top: 114px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
  }

`;

export const Frame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-top: 1px solid #c0c3d2;
  border-bottom: 1px solid #c0c3d2;
`;

export const Title = styled.p`
  padding: 15px;
  font-size: 16px;
  color: #2a2d3b;
`;

export const Text = styled.p`
  padding-bottom: 57px;
  font-size: 13px;
  color: #2a2d3b;
`;

export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 12px;
  color: #2a2d3b;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: solid 1px #c0c3d2;
  background-color: rgba(0, 0, 0, 0.16)
  outline: none;
  font-size: 12px;
  color: #2a2d3b;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

export const Button = styled.button`
  width: 72px;
  height: 32px;
  margin-left: 14px;
  border-radius: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);
  border: solid 1px rgba(255, 255, 255, 0.16);
  background-color: #fa7268;
  font-size: 13px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    opacity: 0.3;
  }
`;


