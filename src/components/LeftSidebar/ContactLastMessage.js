import React from "react";

function ContactLastMessage(props) {
  const { text } = props.chatlog;
  const trimmedText = text.length > 17 ? text.substring(0, 17) + "..." : text;
  return (
    <p className="m-0 context-text"> {trimmedText}</p>
  );
}

export default ContactLastMessage;