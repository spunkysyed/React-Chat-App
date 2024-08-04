import React from "react";
import ContactAvatar from "./ContactAvatar";
import ContactLastMessage from "./ContactLastMessage";
import { Link } from "react-router-dom";

function ContactTab({ contact, isActive, setActiveTabId}) {
  const { image, name, chatlog, id } = contact;

  let length = chatlog.length;

  const handleClick=()=>{
    setActiveTabId(id);
  }
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className={`contact-tab gap-2 ps-1 ${isActive ? "active" : ""}`} onClick={handleClick}>
        <div className="img-container d-flex align-items-center h-100">
          <ContactAvatar image={image} />
        </div>

        <div className="d-flex justify-content-between name-container">
          <div className="d-flex flex-column justify-content-center">
            <p className="name m-0 text-dark">{name}</p>
            <ContactLastMessage chatlog={chatlog[length - 1]} />
          </div>
          <div className="me-3">
            <p className="context-text">{chatlog[length - 1].timestamp}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContactTab;
