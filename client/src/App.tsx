import React, { useEffect, useState } from "react";
import { AppContainer, MainContainer, WelcomeText } from "./styles";
import SocketService from "./services";
import { JoinRoom } from "./components/JoinRoom";
import GameContext, { IGameContextProps } from "./context/gameContext";

function App() {
  const [isInRoom, setIsInRoom] = useState(false);

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
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppContainer>
        <WelcomeText>Welcome To Tic-Tac-Toe</WelcomeText>
        <MainContainer>
          <JoinRoom />
        </MainContainer>
      </AppContainer>
    </GameContext.Provider>
  );
}

export default App;
