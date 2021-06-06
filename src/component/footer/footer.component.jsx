import React from "react";
import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="row section-contact-me">
      <div className="contact-info center">
        <h1>Contact Me</h1>
        <h3>Email: howardwarren@hotmail.com</h3>
        <a
          href="https://www.linkedin.com/in/howard-warren-a9388885"
          rel="noreferrer"
          target="_blank"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="https://github.com/howardwarren1982"
          rel="noreferrer"
          target="_blank"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
