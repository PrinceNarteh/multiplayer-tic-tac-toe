import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const WelcomeText = styled.h1`
  color: #8e44ad;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-top: 2em;
`;

export const RoomIDInput = styled.input`
  height: 30px;
  width: 20em;
  font-size: 17px;
  outline: none;
  border: 1px solid #8e44ad;
  border-radius: 3px;
  padding: 0 10px;
`;

export const JoinButton = styled.button`
  outline: none;
  background-color: #8e44ad;
  color: #fff;
  font-size: 17px;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 4px 18px;
  transition: all 230ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid #8e44ad;
    color: #8e44ad;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Zen Tokyo Zoo", cursive;
  position: relative;
`;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
`;

interface ICellProps {
  borderTop?: boolean;
  borderRight?: boolean;
  borderLeft?: boolean;
  borderBottom?: boolean;
}

export const Cell = styled.div<ICellProps>`
  width: 13em;
  height: 9em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  cursor: pointer;
  border-top: ${({ borderTop }) => borderTop && "3px solid #8e44ad"};
  border-left: ${({ borderLeft }) => borderLeft && "3px solid #8e44ad"};
  border-bottom: ${({ borderBottom }) => borderBottom && "3px solid #8e44ad"};
  border-right: ${({ borderRight }) => borderRight && "3px solid #8e44ad"};
  transition: all 270ms ease-in-out;

  &:hover {
    background-color: #8d44ad28;
  }
`;

export const PlayStopper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  cursor: default;
`;

export const X = styled.span`
  font-size: 100px;
  color: #8e44ad;
  &::after {
    content: "X";
  }
`;

export const O = styled.span`
  font-size: 100px;
  color: #8e44ad;
  &::after {
    content: "O";
  }
`;
