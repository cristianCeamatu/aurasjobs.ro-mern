import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import { FaTimes, FaPlus } from 'react-icons/fa';

const Job = ({ job }) => {
  const [modal, setModal] = useState(false);

  const toggle = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const { company, label, bgColor, img, imgModal, jobModal } = job;
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <a href="/" onClick={toggle} className="portfolio-link text-center py-2">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <FaPlus size={50} />
          </div>
        </div>
        <img src={img} className="img-fluid mx-auto" alt="Company thumbnail" />
        <p className={`bg-${bgColor}`}>{label}</p>
      </a>
      <Modal isOpen={modal} toggle={toggle} modalClassName="portfolio-modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="modal-body clearfix">
                    <h2>
                      <a
                        href="/"
                        className="d-block h1 pt-0 mt-0 text-danger text-right"
                        onClick={toggle}
                        rel="no-opener"
                      >
                        <FaTimes />
                      </a>
                      {company}
                    </h2>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={imgModal}
                      alt={company}
                    />
                    <div dangerouslySetInnerHTML={{ __html: jobModal }} />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={toggle}
                    >
                      <FaTimes /> Inchide
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

Job.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  job: PropTypes.object.isRequired,
};

export default Job;
