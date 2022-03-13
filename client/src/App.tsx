import { io } from "socket.io-client";
import { AppContainer } from "./styles";



function App() {
  const connect = () => {
    const socket = io('http://localhost:4000');

    socket.on("connect", () => {
      socket.emit('custom event', {name: "Prince", age: 20 })
    })
  }
  return (
    <AppContainer>
      <h1>Let's Play Tic Tac Toe</h1>
    </AppContainer>
  );
}

export default App;
