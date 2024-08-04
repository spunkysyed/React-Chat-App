import React from "react";

function ContactAvatar({ image }) {
  return (
    <img src={image} alt="user-avatar" className="avatar m-0" />
  );
}

export default ContactAvatar;