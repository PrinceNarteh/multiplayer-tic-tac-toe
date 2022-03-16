import React, { useEffect } from "react";
import { AppContainer, MainContainer, WelcomeText } from "./styles";
import SocketService from "./services";
import { JoinRoom } from "./components/JoinRoom";
import { io } from "socket.io-client";

function App() {
  const connectSocket = async () => {
    // const socket = await SocketService.connect("http://localhost:4000").catch(
    //   (err) => console.log(err)
    // );

    const socket = io("http://localhost:4000");
    socket.on("connect", () => {
      socket.emit("connection_success", { data: "success" });
    });
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
