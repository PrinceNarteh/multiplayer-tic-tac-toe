import { Socket } from "socket.io-client";

class GameService {
  async joinGameRoom(socket: Socket, roomId: string) {
    return new Promise((resolve, reject) => {
      socket.emit("join_game", { roomId });
      socket.on("room_join_success", () => resolve(true));
      socket.on("room_join_error", ({ error }) => reject(error));
    });
  }
}

export default new GameService();
