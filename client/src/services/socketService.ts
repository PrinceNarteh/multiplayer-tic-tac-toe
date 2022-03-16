import { io, Socket } from "socket.io-client";

class SocketService {
  socket: Socket | null = null;

  connect(url: string): Promise<Socket> {
    return new Promise((resolve, reject) => {
      this.socket = io(url);

      if (!this.socket) reject();

      this.socket.on("connect", () => resolve(this.socket as Socket));

      this.socket.on("connect_error", (err) => {
        console.log("Connection error: ", err);
        reject(err);
      });
    });
  }
}

export default new SocketService();
