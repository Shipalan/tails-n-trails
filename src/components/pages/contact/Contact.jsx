import React from "react";
import location from "../../../images/References/Location.png";
import './Contact.css'

const Contact = () => {
  return (
    <div className="contactGroup">
      <h3 className="contactTitle">Contact Us 😁</h3>
      <section className="contactSection">
        <img src={location} alt="map" />
        <article>
          <p className="contact-instruction">
            If you have any questions or concerns please reach out to us at one
            of the following.
          </p>
          <p>Phone Number: 123-456-7890</p>
          <p>Email Address: tails&trails@gmail.com</p>
        </article>
      </section>
    </div>
  );
};

export default Contact;
