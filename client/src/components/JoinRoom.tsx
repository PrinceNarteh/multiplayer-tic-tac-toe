import React, { ChangeEvent, useContext, useState } from "react";
import gameContext from "../context/gameContext";
import gameService from "../services/gameService";
import socketService from "../services/socketService";
import { JoinButton, JoinRoomContainer, RoomIDInput } from "../styles";

export const JoinRoom = () => {
  const [roomName, setRoomName] = useState<string>("");
  const [isJoining, setIsJoining] = useState(false);
  const { isInRoom, setIsInRoom } = useContext(gameContext);

  const handleRoomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  const joinRoom = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const socket = socketService.socket;
    if (!socket || !roomName || roomName.trim() === "") return;

    setIsJoining(true);

    const joined = await gameService
      .joinGameRoom(socket, roomName)
      .catch((err) => alert(err));

    if (joined) setIsInRoom(true);

    setIsJoining(false);
  };

  return (
    <form onSubmit={joinRoom}>
      <JoinRoomContainer>
        <h4>Enter Room ID to Join the Game</h4>
        <RoomIDInput
          placeholder="Room ID..."
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <JoinButton type="submit" disabled={isJoining || !roomName}>
          {isJoining ? "Joining" : "Join"}
        </JoinButton>
      </JoinRoomContainer>
    </form>
  );
};
