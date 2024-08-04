import React from "react";
import ContactTabAllMembers from "./ContactCardAllMembers.js";

function NewConversationTab({ contacts, showNewConvoTab }) {
  let handleClose = () => {
    showNewConvoTab(false);
  };
  return (
    <>
      <div className="new-convo-tab rounded-2">
        <div className="nct-header">
          <p className="">All Contacts</p>
          <span onClick={handleClose}>
            <i className="fas fa-2x fa-times-circle text-white"></i>
          </span>
        </div>
        <div className="nct-list" onClick={handleClose}>
          {contacts.map((contact, index) => (
            <ContactTabAllMembers contact={contact} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewConversationTab;