import React, { ChangeEvent, useContext, useState } from "react";
import gameContext from "../context/gameContext";
import { JoinButton, JoinRoomContainer, RoomIDInput } from "../styles";

export const JoinRoom = () => {
  const [roomName, setRoomName] = useState<string>("");

  const { isInRoom, setIsInRoom } = useContext(gameContext);

  const handleRoomNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };
  return (
    <form>
      <JoinRoomContainer>
        <h4>Enter Room ID to Join the Game</h4>
        <RoomIDInput
          placeholder="Room ID..."
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <JoinButton>Join</JoinButton>
      </JoinRoomContainer>
    </form>
  );
};
