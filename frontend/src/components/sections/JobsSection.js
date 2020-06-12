import React from 'react';
import { Container } from 'reactstrap';

import Job from './Job';
import jobs from '../../state/JobState';

const JobsSection = () => {
  return (
    <section id="jobs">
      <Container>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Oferte joburi</h2>
            <h3 className="section-subheading text-muted">
              Ofertele de mai jos sunt posibile pachete pe care le puteti primi,
              click pe poza pentru detalii
            </h3>
          </div>
        </div>
        <div className="row">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default JobsSection;
