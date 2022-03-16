// import {
//   SocketController,
//   OnMessage,
//   ConnectedSocket,
//   SocketIO,
//   MessageBody,
// } from "socket-controllers";
// import { Socket, Server } from "socket.io";

// interface IMessage {
//   roomId: string;
// }

// @SocketController()
// export class RoomController {
//   @OnMessage("join_game")
//   async joinGame(
//     @ConnectedSocket() socket: Socket,
//     @SocketIO() io: Server,
//     @MessageBody() message: IMessage
//   ) {
//     console.log(`New user joining room: ${message} `);

//     const connectedSockets = io.sockets.adapter.rooms.get(message.roomId);
//     const socketRooms = Array.from(socket.rooms.values()).filter(
//       (room) => room !== socket.id
//     );

//     if (socketRooms.length > 0 || connectedSockets?.size === 2) {
//       socket.emit("room_join_error", {
//         error: "Room is full. Please choose another room to play",
//       });
//     } else {
//       await socket.join(message.roomId);
//       socket.emit("room_join_success");
//     }
//   }
// }
