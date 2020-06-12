import React from 'react';
import { FaHandshake, FaPhoneAlt, FaUserCheck } from 'react-icons/fa';

import JourneyTimeline from './JourneyTimeline';

const Journey = () => {
  return (
    <section id="journey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Aplica!</h2>
            <h3 className="section-subheading text-muted">
              Nu exista nici un cost si vom face tot posibilul sa gasim cele mai
              bune oferte pentru tine.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="bg-primary rounded-circle d-inline-block">
              <FaHandshake size={45} className="text-white m-4" />
            </div>
            <h4 className="service-heading">Fara taxe sau comisioane</h4>
            <p>
              Toate serviciile noastre sunt gratuite, fara costuri ascunse sau
              surprize neplacute. Obiectivul nostru este sa va gasim un loc de
              munca unde puteti finaliza cu succes contractele primite.
            </p>
          </div>
          <div className="col-md-4">
            <div className="bg-primary rounded-circle d-inline-block">
              <FaPhoneAlt size={45} className="text-white m-4" />
            </div>
            <h4 className="service-heading">Asistenta 24/7</h4>
            <p>
              Oferim asistenta la initierea aplicatiei si pe toata perioada
              angajarii. Ne puteti contacta la orice ora in cazul unei situatii
              de urgenta.
            </p>
          </div>
          <div className="col-md-4">
            <div className="bg-primary rounded-circle d-inline-block">
              <FaUserCheck size={45} className="text-white m-4" />
            </div>
            <h4 className="service-heading">Feedback</h4>
            <p>
              Datorita experientei in domeniu va putem oferi un feedback corect
              si onest legat de conditiile fiecarui loc de munca pe care il
              actualizam in permanenta prin intermediul persoanelor angajate.
            </p>
          </div>
        </div>
      </div>
      <JourneyTimeline />
    </section>
  );
};

export default Journey;
