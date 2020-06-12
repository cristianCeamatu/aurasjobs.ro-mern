import React from 'react';
import { Container } from 'reactstrap';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

import imgAuras from './our-team-img/auras.jpg';
import imgAndreea from './our-team-img/andreea.jpg';
import imgCristi from './our-team-img/cristi.jpg';

const OurTeam = () => {
  return (
    <section>
      <Container>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Echipa noastra</h2>
            <h3 className="section-subheading text-muted">
              Ne puteti contacta pentru orice informatie
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="team-member">
              <img
                src={imgAuras}
                className="mx-auto rounded-circle"
                alt="Panait Auras"
              />
              <h4>Panait Auras</h4>
              <br />
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="tel:0040728683604">
                    <FaPhoneAlt />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/auras.panait.940"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/auras-panait-23a7a4133/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                src={imgAndreea}
                className="mx-auto rounded-circle"
                alt="Panait Andreea Elena Recruiting Agent"
              />
              <h4>Panait Andreea-Elena</h4>
              <br />
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a
                    href="tel:0040730719323"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhoneAlt />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/andreea.elena.7982"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/ceamatu-cristian-viorel-7a5469136/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="team-member">
              <img
                src={imgCristi}
                className="mx-auto rounded-circle"
                alt="Ceamatu Cristian Viorel Recruiting Agent"
              />
              <h4>Ceamatu Cristian</h4>
              <br />
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a
                    href="tel:0040725085231"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaPhoneAlt />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/ceamatu.cristian"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/ceamatu-cristian-viorel-7a5469136/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p className="text-muted">
              Ne puteti contacta pentru orice informatie
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeam;
