import {
  ConnectedSocket,
  OnConnect,
  OnDisconnect,
  SocketController,
  SocketIO,
} from "socket-controllers";
import { Server, Socket } from "socket.io";

@SocketController()
export class MainController {
  @OnConnect()
  onConnection(@ConnectedSocket() socket: Socket, @SocketIO() io: Server) {
    console.log(`New socket with ${socket.id} connected`);
  }

  @OnDisconnect()
  disconnect(@ConnectedSocket() socket: any) {
    console.log("client disconnected");
  }
}
