import React, { useContext } from "react";

export interface IGameContextProps {
  isInRoom: boolean;
  setIsInRoom: (inRoom: boolean) => void;
  playerSymbol: "x" | "o";
  setPlayerSymbol: (symbol: "x" | "o") => void;
}

const defaultState: IGameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
  playerSymbol: "x",
  setPlayerSymbol: () => {},
};

export const GameContext = React.createContext(defaultState);

export const useGameContext = () => {
  return useContext(GameContext);
};
