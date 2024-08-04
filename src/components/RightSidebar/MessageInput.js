import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Picker from 'emoji-picker-react';

function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [props]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };

  const onEmojiClick = (event) => {
    let newMessage=message;
    newMessage+=event.emoji;
    setMessage(newMessage)
    setShowPicker(false);
  };

  return (
    <>
      <Row className="message-input">
        <div>
          
          <input
            className="rounded-1"
            type="text"
            placeholder="Type your message here"
            value={message}
            onChange={handleInputChange}
          />
          <img
            className="emoji-icon border border-3 border-dark rounded-circle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmA_K0xJxXq6VQFwJBXUmtFAvvoJJBmxYZg&s"
            onClick={() => setShowPicker((val) => !val)}
            alt="emoji"
          />
          <div className="emoji-container">
            {showPicker && (
              <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
            )}
          </div>
          <button className="send-button rounded-1" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </Row>
    </>
  );
}

export default MessageInput;
