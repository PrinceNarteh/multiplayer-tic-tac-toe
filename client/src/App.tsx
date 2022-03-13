import { useEffect } from "react";
import { io } from "socket.io-client";
import { AppContainer, WelcomeText } from "./styles";

function App() {
  const connect = () => {
    const socket = io('http://localhost:4000');

    socket.on("connect", () => {
      socket.emit('custom event', {name: "Prince", age: 20 })
    })
  }

  useEffect(() => {
    connect()
  }, [])

  return (
    <AppContainer>
      <WelcomeText>Let's Play Tic Tac Toe</WelcomeText>
    </AppContainer>
  );
}

export default App;
