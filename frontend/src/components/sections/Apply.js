import React from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope, FaPhoneAlt, FaCloudUploadAlt } from 'react-icons/fa';

import ApplyModal from './ApplyModal';

const Apply = () => {
  return (
    <section id="apply">
      <div className="container">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Cum poti aplica</h2>
          <h3 className="section-subheading text-muted">
            Inainte de inceperea aplicatiei iti recomandam sa verifici{' '}
            <Link
              to="applicationProcess"
              smooth
              offset={-70}
              duration={500}
              href="#applicationProcess"
            >
              <strong>procesul de aplicare</strong>
            </Link>
          </h3>
        </div>
      </div>
      <div className="container">
        <div className="apply-header row">
          <div className="col-md-4 text-center service">
            <div className="service-box">
              <a href="mailto:&#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;">
                <FaEnvelope size={50} className="text-danger m-2" />
                <h3>Prin email</h3>
                <p className="text-muted">
                  Daca ai un CV redactat il poti trimite la
                  &#111;&#102;&#102;&#105;&#099;&#101;&#064;&#097;&#117;&#114;&#097;&#115;&#106;&#111;&#098;&#115;&#046;&#114;&#111;.
                  Daca nu te contactam in cateva zile te rugam sa ne suni la
                  unul din numerele de contact.
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center service">
            <div className="service-box">
              <a href="tel:0040728683604">
                <FaPhoneAlt size={50} className="text-danger m-2" />
                <h3>Telefonic</h3>
                <p className="text-muted">
                  0725085231 / 0730 719323 / 0728 683604 Cea mai rapida cale de
                  a gasi raspunsuri la intrebarile tale si de a stabili toate
                  detaliile aplicatiei
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-4 text-center service">
            <div className="service-box">
              <Link
                to="applyForm"
                smooth
                offset={-70}
                duration={500}
                href="#applyForm"
              >
                <FaCloudUploadAlt size={50} className="text-danger m-2" />
                <h3>Aplica online</h3>
                <p className="text-muted">
                  Uploadeaza CV-ul tau sau formularul de aplicare rapida de mai
                  jos alaturi de o copie dupa buletin sau pasaport pentru
                  accelerarea procesului
                </p>
              </Link>
            </div>
          </div>
        </div>
        <ApplyModal />
      </div>
    </section>
  );
};

export default Apply;
