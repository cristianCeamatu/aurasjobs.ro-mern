import React from 'react';

import timeline from '../../state/JourneyState';

const JourneyTimeline = () => {
  return (
    <div className="container" id="applicationProcess">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">{timeline.heading}</h2>
          <h3 className="section-subheading text-muted">
            {timeline.subHeading}
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            {timeline.items.map((item, i) => (
              <li
                key={item.id}
                className={i % 2 === 1 ? 'timeline-inverted' : ''}
              >
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src={item.img}
                    alt={item.heading}
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{item.heading}</h4>
                    <h4 className="subheading">{item.subHeading}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{item.body}</p>
                  </div>
                </div>
              </li>
            ))}
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>{timeline.footer}</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;
