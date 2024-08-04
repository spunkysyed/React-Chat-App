import React from "react";

function RightChatBubble({ message, name, image }) {
  return (
    <>
      <div className="right-message-bubble gap-2">
      <p className="message right-text-message text-white m-0 rounded-1 px-3 py-1">{message.text}</p>
          <div className="d-flex flex-row-reverse align-items-center gap-2">
            <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
            <span className="message-timestamp">{message.timestamp}</span>
            <p className="right-chat-name m-0">{name}</p>
          </div>
      </div>
    </>
  );
}
const styles = {
  avatar: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    objectFit:"cover",
  },
};
export default RightChatBubble;