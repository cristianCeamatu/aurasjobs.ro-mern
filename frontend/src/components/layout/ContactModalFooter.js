import React from 'react';

import {
  FaPhoneAlt,
  FaFacebookF,
  FaEnvelope,
  FaGlobeEurope,
} from 'react-icons/fa';

const ContactModalFooter = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-contacts">
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="tel:0040728683604"
          >
            <FaPhoneAlt className="h1 text-white" />
            <span>+40728 683 604</span>
          </a>
        </div>
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="tel:0040730719323"
          >
            <FaPhoneAlt className="h1 text-white" />
            <span>+40730 719 323</span>
          </a>
        </div>
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="tel:0040725085231"
          >
            <FaPhoneAlt className="h1 text-white" />
            <span>+40725 085 231</span>
          </a>
        </div>
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="https://www.facebook.com/aurasjobs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="h1 text-white" />
            <span>@aurasjobs</span>
          </a>
        </div>
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="mailto:&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;"
          >
            <FaEnvelope className="h1 text-white" />
            <span>
              &#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;
            </span>
          </a>
        </div>
        <div className="footer-contact">
          <a
            className="d-flex flex-column align-items-center"
            href="https://www.google.com/maps/place/aurasjobs.ro+-+Locuri+de+munca+vase+de+croaziera/@44.1770587,28.6430217,17z/data=!3m1!4b1!4m5!3m4!1s0x40bae51edba75ef3:0xd66d2d2bbae39b8f!8m2!3d44.1770549!4d28.6452104"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobeEurope className="h1 text-white" />
            <span>Locatie</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactModalFooter;
