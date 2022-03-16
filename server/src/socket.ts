import { Server as HttpServer } from "http";
import { useSocketServer } from "socket-controllers";
import { Server } from "socket.io";
import { corsOptions } from "./config/corsOptions";

export const socketServer = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: corsOptions,
  });

  io.on("connection", (socket) => {
    console.log("Client connected: ", socket.id);
  });

  useSocketServer(io, {
    controllers: [__dirname + "/controllers/*.ts"],
  });

  return io;
};
