import React from "react";
import ContactAvatar from "./ContactAvatar";
import { Link } from "react-router-dom";

function ContactTabAllMembers(props) {
  const { image, name, chatlog, id } = props.contact;

  let length = chatlog.length;

  // Function to format the timestamp
  return (
    <Link to={`/conversations/${id}`} className="link-tag">
      <div className="all-contact-tab gap-3 ps-2">
        <div className="all-tab-img-container d-flex align-items-center h-100">
          {" "}
          <ContactAvatar image={image}/>
        </div>

        <div className="d-flex justify-content-between name-container">
          <div className="d-flex flex-column justify-content-center">
          <p className="fs-2 m-0 text-secondary">{name}</p>
          </div>
        </div>

      </div>
    </Link>
  );
}

export default ContactTabAllMembers;