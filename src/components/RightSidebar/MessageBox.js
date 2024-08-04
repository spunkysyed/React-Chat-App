import React, { useEffect, useState } from "react";

import LeftChatBubble from "./LeftChatBubble";
import { useDispatch } from "react-redux";
import RightChatBubble from "./RightChatBubble";
import MessageInput from "./MessageInput";
import { addNewMessage } from "../../actions/contact";
import ProfileHeader from "../LeftSidebar/ProfileHeader";
import NoConversation from "./NoConversation.js";

function MessageBox(props) {
  const [chat, setChat] = useState([]);
  const [length, setLength] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    setChat(props.user.chatlog);
    setLength(props.user.chatlog.length);
  }, [props]);


  var time;
  var hours;
  var minutes;
  function currentTime() {
  var currentDate = new Date();
  hours = currentDate.getHours();
  hours = appendZero(hours);

  // hours = appendZero(currentDate.getHours());
  minutes = appendZero(currentDate.getMinutes());

  time = `${hours}:${minutes}`;

  }

  function appendZero(time) {
  if (time < 10 && time.length !== 2) {
    return "0" + time;
  }
  return time;
}


setInterval(currentTime, 1000);



  let updateMesssages = (message) => {
    let object = {
      text: message,
      timestamp: time,
      sender: "me",
      message_id: length + 1,
    };
    dispatch(addNewMessage(object, props.user.id));
    // updatelength
    setLength(object.message_id);

    setChat([...chat, object]);
  };

  return (
    <>
      <div className="message-box">
        <div className="message-box-header d-flex align-items-center py-2 ps-2" xs={6} sm={7} md={8} lg={7} xl={8}>
          <ProfileHeader user={props.user} />
        </div>
        <div>
        {chat.length > 0 ?(
          <div className="messages-section">
            {chat.map((m, index) =>
              m.sender === "me" ? (
                <RightChatBubble
                  message={m}
                  key={index}
                  name={"You"}
                  image={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D"}
                />
              ) : (
                <LeftChatBubble
                  message={m}
                  key={index}
                  name={props.user.name}
                  image={props.user.image}
                />
              )
            )}
          </div>
        ):<NoConversation/>}
        </div>
        <div>
        <MessageInput newMessageHandler={updateMesssages} user={props.user} />
        </div>
      </div>
    </>
  );
}

export default MessageBox;