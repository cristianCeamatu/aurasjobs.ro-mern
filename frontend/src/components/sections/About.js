import React from 'react';
import OurTeam from './OurTeam';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Despre noi</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <p>
              La <a href="www.aurasjobs.ro">aurasjobs.ro</a>, noi am fost in
              pozitia ta, avand experienta muncii pe vasele de croaziera
              fluviale si cele pe ocean, intrand in contact cu diverse agentii
              de recrutare, am simtit nevoia sa schimbam ceva, sa facem{' '}
              <a href="#applicationProcess" className="page-scroll">
                procesul de aplicare
              </a>{' '}
              asa cum trebuie sa fie!
            </p>
            <p>
              Asistam candidatii cu toti pasii necesari pentru a castiga un loc
              de munca (redactarea CV-ului, pregatirea pentru interviu etc.),
              punand pasiune pe durata intregului proces de aplicare. Pastram
              legatura dupa imbarcarea acestora, primim feedback despre
              experienta lor si oferim asistenta suplimentara in cazul in care
              este necesar.
            </p>
            <p>
              Cu aurasjobs, nu trebuie sa platiti nimic pentru serviciile
              noastre. Obiectivul nostru este sa gasim cele mai bune oferte
              pentru tine, asa trebuie sa fie!
            </p>
          </div>
        </div>
      </div>
      <OurTeam />
    </section>
  );
};

export default About;
