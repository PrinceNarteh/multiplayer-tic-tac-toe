import { Socket } from "socket.io-client";
import { IPlayMatrix, IStartGame } from "../components/Game";

class GameService {
  async joinGameRoom(socket: Socket, roomId: string) {
    return new Promise((resolve, reject) => {
      socket.emit("join_game", { roomId });
      socket.on("room_join_success", () => resolve(true));
      socket.on("room_join_error", ({ error }) => reject(error));
    });
  }

  async updateGame(socket: Socket, gameMatrix: IPlayMatrix) {
    socket.emit("update_game", { matrix: gameMatrix });
  }

  async onGameUpdate(socket: Socket, listener: (matrix: IPlayMatrix) => void) {
    socket.on("on_game_update", ({ matrix }) => listener(matrix));
  }

  async onStartGame(socket: Socket, listener: (options: IStartGame) => void) {
    socket.on("start_game", listener);
  }

  async gameWin(socket: Socket, message: string) {
    socket.emit("game_win", { message });
  }

  async onGameWin(socket: Socket, listener: (message: string) => void) {
    socket.on("on_game_win", ({ message }) => listener(message));
  }
}

export default new GameService();
