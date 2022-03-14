import React, { useEffect } from "react";
import { AppContainer, MainContainer, WelcomeText } from "./styles";
import SocketService from "./services";
import { JoinRoom } from "./components/JoinRoom";

function App() {
  const connectSocket = async () => {
    const socket = await SocketService.connect("http://localhost:4000").catch(
      (err) => console.log(err)
    );
  };

  useEffect(() => {
    connectSocket();
  }, []);

  return (
    <AppContainer>
      <WelcomeText>Welcome To Tic-Tac-Toe</WelcomeText>
      <MainContainer>
        <JoinRoom />
      </MainContainer>
    </AppContainer>
  );
}

export default App;
