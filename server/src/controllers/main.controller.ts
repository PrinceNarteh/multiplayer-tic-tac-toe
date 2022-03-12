import { OnConnect, SocketController } from "socket-controllers";

@SocketController()
export class MainController {
  @OnConnect()
  onConnection() {}
}
