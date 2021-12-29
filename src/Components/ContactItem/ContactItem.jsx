import { ContactWrapper } from "./ContactItem.style";

import React from "react";

const ContactItem = ({ icon, title, contact1, contact2 }) => {
  return (
    <ContactWrapper>
      <div className="left-content">{icon}</div>
      <div className="rigth-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
        <p>{contact2}</p>
      </div>
    </ContactWrapper>
  );
};

export default ContactItem;
