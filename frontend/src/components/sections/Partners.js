import React from 'react';

import anqor from './jobs-img/anqor-thumbnail.jpg';
import constantinou from './jobs-img/constantinou-thumbnail.jpg';
import cruisinc from './jobs-img/cruisinc-thumbnail.png';
import riveradvice from './jobs-img/riveradvice-thumbnail.png';
import scylla from './jobs-img/scylla-thumbnail.jpg';

const Partners = () => {
  const partnersImgs = [
    { id: 1, img: anqor },
    { id: 2, img: constantinou },
    { id: 3, img: cruisinc },
    { id: 4, img: riveradvice },
    { id: 5, img: scylla },
  ];

  return (
    <section id="partners">
      <div className="container">
        <div className="col-md-12 text-center text-muted partners-heading">
          <h3>Partenerii nostrii</h3>
        </div>
        <div className="partners-logos">
          {partnersImgs.map((partner) => (
            <div key={partner.id} className="partners-logo">
              <img
                src={partner.img}
                className="img-fluid d-block mx-auto"
                alt="Advertise Here"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
