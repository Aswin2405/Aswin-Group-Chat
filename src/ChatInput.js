import React, { useState } from "react";
import "./chatinput.css";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from "./StateProvider";
function ChatInput({ channelName, ChannelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
  };
  if (ChannelId) {
    db.collection("rooms").doc(ChannelId).collection({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL
    });
  }
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
