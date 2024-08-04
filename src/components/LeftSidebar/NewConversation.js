import React from "react";

function NewConversation(props) {
  let handleClick = () => {
    props.showNewConvoTab(true);
  };
  return (
    <div className="new-convo mt-3">
      <p className="p-0 m-0">CONVERSATIONS</p>
      <span className="border border-2 border-secondary-subtle rounded-circle" onClick={handleClick}>
        <i className="fas fa-plus"></i>
      </span>
    </div>
  );
}

export default NewConversation;