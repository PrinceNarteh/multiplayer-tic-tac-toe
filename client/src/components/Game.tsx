import React, { useState } from "react";
import { Cell, GameContainer, O, RowContainer, X } from "../styles";

export type IPlayMatrix = Array<Array<string | null>>;
export interface IStartGame {
  start: boolean;
  symbol: "x" | "o";
}

export const Game = () => {
  const [matrix, setMatrix] = useState<IPlayMatrix>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <GameContainer>
      {matrix.map((row, rowIdx) => {
        return (
          <RowContainer>
            {row.map((column, columnIdx) => {
              <Cell
                borderRight={columnIdx < 2}
                borderLeft={columnIdx > 0}
                borderTop={rowIdx > 0}
                borderBottom={rowIdx < 2}
              >
                {column && column !== "null" ? (
                  column === "x" ? (
                    <X />
                  ) : (
                    <O />
                  )
                ) : null}
              </Cell>;
            })}
          </RowContainer>
        );
      })}
    </GameContainer>
  );
};
