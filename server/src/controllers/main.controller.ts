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
  connection(@ConnectedSocket() socket: Socket) {
    console.log("New socket connected", socket.id);
  }

  @OnDisconnect()
  disconnect(@ConnectedSocket() socket: any) {
    console.log("client disconnected");
  }
}
