import { Server as HttpServer } from "http";
import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";
import { corsOptions } from "./config/corsOptions";
import path from "path";

export default (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: corsOptions,
  });

  useSocketServer(io, {
    controllers: [path.join(__dirname, "controllers", "*.ts")],
  });
};
