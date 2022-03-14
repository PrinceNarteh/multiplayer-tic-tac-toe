import { Server as HttpServer } from "http";
import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";
import { corsOptions } from "./config/corsOptions";

export default (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: corsOptions,
  });

  useSocketServer(io, {
    controllers: [__dirname + "controllers/*.ts"],
  });
};
