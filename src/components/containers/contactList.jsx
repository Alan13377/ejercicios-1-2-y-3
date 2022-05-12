import React from "react";

import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/ContactComponent";

function contactList(props) {
  const defaultContact = new Contact(
    "Alan",
    "Romero",
    "alan@correo.com",
    false
  );
  return (
    <div>
      <h1>Contacto :</h1>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
}

export default contactList;
