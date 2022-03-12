import './App.css';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function App() {
  const connect = () => {
    const socket = io('http://localhost:4000');

    socket.on("connect", () => {
      socket.emit('custom event', {name: "Prince", age: 20})
    })
  }
  return (
    <AppContainer>
      <h1>Let's Play Tic Tac Toe</h1>
    </AppContainer>
  );
}

export default App;
