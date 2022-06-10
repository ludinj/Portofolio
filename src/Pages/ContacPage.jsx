//Dependencies
import React from "react";

//Components
import Title from "../Components/Title/Title";
import PrimaryButton from "../Components/PrimaryBottom/PrimaryButton";
import ContactItem from "../Components/ContactItem/ContactItem";

//Images-icons

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationIcon from "@mui/icons-material/LocationOn";
//Styles
import { MainLayout, InerLayout } from "../Styles/InerLayout";
import { ContactWrapper } from "./ContactPage.style";
//

const ContactPage = () => {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationIcon />;

  return (
    <div>
      <MainLayout>
        <Title title={"Contact"} span={"Contact"} />
        <ContactWrapper>
          <InerLayout className={"contact-section"}>
            <div className="left-section">
              <div className="contact-title">
                <h4>Get in touch</h4>
              </div>
              <form action="" className="form">
                <div className="form-field">
                  <label htmlFor="name">Enter your name</label>
                  <input id="name" type="text"></input>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Enter your email</label>
                  <input id="email" type="text"></input>
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Enter your subject</label>
                  <input id="subject" type="text"></input>
                </div>
                <div className="form-field">
                  <label> Enter your message</label>
                  <textarea
                    name="text-area"
                    id="text-area"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-field">
                  <PrimaryButton title={"Not implemented"}></PrimaryButton>
                </div>
              </form>
            </div>
            <div className="rigth-section">
              <ContactItem
                icon={phone}
                title={"Phone Number"}
                contact1={"+58 424 6427380"}
              />
              <ContactItem
                icon={email}
                title={"Email"}
                contact1={"borrego300@yahoo.com "}
                contact2={"ludinjb@gmail.com"}
              />
              <ContactItem
                icon={location}
                title={"Location"}
                contact1={"Venezuela"}
                contact2={"Zulia"}
              />
            </div>
          </InerLayout>
        </ContactWrapper>
      </MainLayout>
    </div>
  );
};

export default ContactPage;
