import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";

function SidebarChat({ id,name, addNewChat }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Enter room name for chat');
    if(roomName) {
      //database stuff
    }  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <div className="chatAvatar">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>

      <div className="sidebarChat__info">
        <h3>{name}</h3>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
