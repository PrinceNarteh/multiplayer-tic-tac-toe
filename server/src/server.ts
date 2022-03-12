import { createServer } from "http";
import socket from "./socket";
import appServer from "./app";
const PORT = process.env.PORT || 4000;

const httpServer = createServer(appServer);
socket(httpServer);

httpServer.listen(PORT, () => {
  console.log(`🚀 server running on port ${PORT}`);
});
