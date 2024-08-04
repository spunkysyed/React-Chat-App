import React from "react";

function LeftChatBubble({ message, name, image }) {
  return (
    <>
      <div className="left-message-bubble d-flex flex-column align-items-start gap-2">
        <p className="message border border-2 border-secondary-subtle px-2 py-1 m-0 rounded-1">{message.text}</p>
        <div className="left-bubble ">
          <div className="d-flex align-items-center gap-2">
            <img src={image} style={styles.avatar} alt="sender-pic" />{" "}
            <p className="chat-bubble-name m-0">{name}</p>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
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
export default LeftChatBubble;