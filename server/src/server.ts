import "reflect-metadata";
import http from "http";
import { socketServer } from "./socket";
import appServer from "./app";
const PORT = process.env.PORT || 4000;

const httpServer = http.createServer(appServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});

socketServer(httpServer);
