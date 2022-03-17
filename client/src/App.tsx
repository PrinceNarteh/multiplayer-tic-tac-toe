import React, { useEffect, useState } from "react";
import { Game } from "./components/Game";
import { JoinRoom } from "./components/JoinRoom";
import { GameContext, IGameContextProps } from "./context/gameContext";
import SocketService from "./services/socketService";
import { AppContainer, MainContainer, WelcomeText } from "./styles";

function App() {
  const [isInRoom, setIsInRoom] = useState(false);
  const [playerSymbol, setPlayerSymbol] = useState<"x" | "o">("x");

  const connectSocket = async () => {
    const socket = await SocketService.connect("http://localhost:4000").catch(
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    connectSocket();
  }, []);

  const gameContextValue: IGameContextProps = {
    isInRoom,
    setIsInRoom,
    playerSymbol,
    setPlayerSymbol,
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomeText>Welcome To Tic-Tac-Toe</WelcomeText>
        <MainContainer>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>
  );
}

export default App;
