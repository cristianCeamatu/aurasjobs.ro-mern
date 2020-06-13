/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Modal } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { FaCloudDownloadAlt, FaTimes } from 'react-icons/fa';

const ApplyModal = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  // Feedback for submitting the form
  const [modal, setModal] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);

    setModal(true);
    setTimeout(() => {
      reset();
      setModal(!modal);
    }, 10000);
  };

  const toggle = (e) => {
    e.preventDefault();
    reset();
    setModal(!modal);
  };

  const [messageLength, setMessageLength] = React.useState(0);

  return (
    <div className="row applyForm">
      <div className="col-md-12">
        <form
          name="applyForm"
          id="applyForm"
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center">Aplica online</h2>
                <p className="text-center text-muted">
                  Campurile cu * sunt obligatorii
                </p>
                <ul className="downloads">
                  <li className="downloads-item shadow-sm m-2">
                    <a
                      href="http://www.aurasjobs.ro/downloads/aurasjobs_simple_cv_model.docx"
                      download="aurasjobs simple CV model"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCloudDownloadAlt size={40} className="text-primary" />
                      <strong className="text-black-50">
                        Formular aplicare online
                      </strong>
                    </a>
                  </li>
                  <li className="downloads-item shadow-sm m-2">
                    <a
                      href="http://www.aurasjobs.ro/downloads/aurasjobs_example_cv_model.docx"
                      download="aurasjobs example CV model"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaCloudDownloadAlt size={40} className="text-primary" />
                      <strong className="text-black-50">
                        Exemplu formular completat
                      </strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`row ${modal && 'd-none'}`}>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="applyName"
                  className="form-control"
                  placeholder="Numele complet *"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Acest camp este obligatoriu',
                    },
                    minLength: {
                      value: 5,
                      message: 'Minim 5 caractere',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Maxim 50 de caractere',
                    },
                  })}
                />
                <p className="text-left text-left text-danger pl-2">
                  {errors.applyName && errors.applyName.message}
                </p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Adresa de email *"
                  name="applyEmail"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Acest camp este obligatoriu',
                    },
                    minLength: {
                      value: 5,
                      message: 'Minim 5 caractere',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Maxim 50 de caractere',
                    },
                  })}
                />
                <p className="text-left text-danger pl-2">
                  {errors.applyEmail && errors.applyEmail.message}
                </p>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Numarul de telefon *"
                  name="applyPhone"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Acest camp este obligatoriu',
                    },
                    minLength: {
                      value: 8,
                      message: 'Minim 8 caractere',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Maxim 20 de caractere',
                    },
                  })}
                />
                <p className="text-left text-danger pl-2">
                  {errors.applyPhone && errors.applyPhone.message}
                </p>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Mesajul tau"
                  rows="25"
                  name="applyMessage"
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  ref={register({
                    minLength: {
                      value: 10,
                      message: 'Minim 10 caractere',
                    },
                    maxLength: {
                      value: 2000,
                      message: 'Maxim 2000 de caractere',
                    },
                  })}
                />
                <span className="textarea-remaining">
                  {`${messageLength}/2000`}
                </span>
                <p className="text-left text-danger pl-2">
                  {errors.applyMessage && errors.applyMessage.message}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group col-xs-12">
                <br />
                <label forhtml="department" className="text-muted">
                  Departmanetul pentru care aplici
                </label>
                <select
                  className="form-control"
                  name="department"
                  defaultValue="restaurant/bar"
                  ref={register({
                    required: true,
                  })}
                >
                  <option value="chefs">Chefs</option>
                  <option value="restaurant/bar">Restaurant/Bar</option>
                  <option value="front-desk">Front-Desk</option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="sailors">Sailors</option>
                  <option value="other">Other(massage etc.)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="CV" className="text-muted">
                  Uploadeaza CV sau{' '}
                  <a
                    href="http://www.aurasjobs.ro/downloads/aurasjobs_simple_cv_model.docx"
                    download="aurasjobs Application Form"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    formularul de aplicare
                  </a>{' '}
                  completat *
                </label>
                <input
                  type="file"
                  className="form-control p-1"
                  name="cv"
                  accept="application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  ref={register({
                    required: {
                      value: true,
                      message: 'Acest camp este obligatoriu',
                    },
                  })}
                />
                <p className="text-left text-danger pl-2">
                  {errors.cv && errors.cv.message}
                </p>
              </div>
              <div className="form-group">
                <label htmlFor="identificationDocument" className="text-muted">
                  Uploadeza copie dupa buletin sau pasaport (OPTIONAL)
                </label>
                <input
                  type="file"
                  className="form-control p-1"
                  name="identificationDocument"
                  ref={register()}
                />
                <p className="text-left text-danger pl-2">
                  {errors.identificationDocument &&
                    errors.identificationDocument.message}
                </p>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-lg-12 text-center">
              <small className="mt-2">
                Apasand pe APLICA sunteti de acord cu{' '}
                <a
                  href="http://www.aurasjobs.ro/downloads/gdprRO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  termenii si conditiile
                </a>{' '}
                prelucrarilor de date
              </small>
              <button type="submit" className="btn btn-xl d-block mx-auto">
                Aplica
              </button>
            </div>
          </div>
        </form>

        {modal && (
          <Modal isOpen={modal} toggle={toggle} size="sm" centered>
            <div className="text-center p-4" role="alert">
              <p>
                Felicitari! Aplicatia ta a fost depusa. Daca nu te sunam in
                cateva zile te rugam sa ne contactezi telefonic.
              </p>
              <button
                type="button"
                className="btn btn-danger d-inline mx-auto my-3"
                onClick={toggle}
              >
                <FaTimes /> Inchide
              </button>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
