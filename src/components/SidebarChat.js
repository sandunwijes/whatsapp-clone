import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./SidebarChat.css";
import db from "../firebase"
import { Link } from "react-router-dom";

function SidebarChat({ id,name, addNewChat }) {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Enter room name for chat');
    if(roomName) {
      //database stuff
      db.collection("rooms").add({ 
        name:roomName,
           
      });
     
    }  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} >
    <div className="sidebarChat">
      <div className="chatAvatar">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>

      <div className="sidebarChat__info">
        <h3>{name}</h3>
        <p>Last message...</p>
      </div>
    </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
