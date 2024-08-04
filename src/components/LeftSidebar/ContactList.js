import React, { useState } from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  const [activeTabId, setActiveTabId] = useState(null);

  return (
    <div style={styles.contactList} className="h-100">
      {contacts
        .filter(contact => contact.chatlog && contact.chatlog.length > 0)
        .map((contact, index) => (
          <ContactTab
            contact={contact}
            key={index}
            isActive={activeTabId === contact.id}
            setActiveTabId={setActiveTabId}
          />
        ))}
    </div>
  );
}

const styles = {
  contactList: {
    overflowY: "auto",
    height: "82vh",
    zIndex: "2",
  },
};

export default ContactList;
