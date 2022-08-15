import { Avatar, IconButton } from "@mui/material";
import { MoreVert, SearchOutlined } from "@mui/icons-material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Chat() {
  const [seed, setSeed] = useState();
  const [input, setInput] = useState();
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");

useEffect(() => {
  if (roomId) {
    db.collection("rooms").doc(roomId).onSnapshot((snapshot) => {(
      setRoomName(snapshot.data().name)
    )})
  }
},[roomId]);




  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const inputTextHandler = (e) => {
    setInput(e.target.value);
    
  };
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    setInput("")
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat_headerAvatar">
          <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        </div>
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVert /> 
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Sandun Wijesinghe</span>
          helloo
          <span className="chat__timestamp">3.52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form action="">
          <input
            type="text"
            placeholder="Type a message"
            onChange={inputTextHandler}
            value={input}
          />
          <button type="submit" onClick={sendMessage}>
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
