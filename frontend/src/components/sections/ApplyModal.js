/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import { FaCloudDownloadAlt } from 'react-icons/fa';

const ApplyModal = () => {
  const { handleSubmit, register, reset, errors, setValue } = useForm();

  // Used for textarea
  const [messageLength, setMessageLength] = React.useState(0);

  // Used for submitting the form
  const [submited, setSubmited] = useState(false);
  const [application, setApplication] = useState({});

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('department', data.department);
    formData.append('cv', data.cv[0]);
    if (data.id) formData.append('id', data.id[0]);
    if (data.message) formData.append('message', data.message);

    try {
      const response = await axios.post('/api/v1/application', formData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      if (response.data.success) {
        setSubmited(true);
        setApplication(response.data.application);
        reset();
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log(error);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="row applyForm">
      <div className="col-md-12">
        <form
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
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Numele complet *"
                  // onChange={(e) => setName(e.target.value)}
                  ref={register({
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                />
                <p className="text-left text-left text-danger pl-2">
                  {errors.name && errors.name.message}
                </p>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Adresa de email *"
                  name="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  ref={register({
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                />
                <p className="text-left text-danger pl-2">
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Numarul de telefon *"
                  name="phone"
                  // onChange={(e) => setPhone(e.target.value)}
                  ref={register({
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                />
                <p className="text-left text-danger pl-2">
                  {errors.phone && errors.phone.message}
                </p>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Mesajul tau"
                  rows="25"
                  name="applyMessage"
                  onChange={(e) => {
                    setMessageLength(e.target.value.length);
                    // setMessage(e.target.value);
                  }}
                  ref={register}
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
                  // onChange={(e) => setDepartment(e.target.value)}
                  defaultValue="restaurant/bar"
                  ref={register}
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
                <label htmlFor="cv" className="text-muted">
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
                  ref={register}
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
                  name="id"
                  ref={register}
                />
                <p className="text-left text-danger pl-2">
                  {errors.id && errors.id.message}
                </p>
              </div>
            </div>
            <div className="clearfix" />
            <div className="col-lg-12 text-center">
              {submited ? (
                <div
                  className="alert alert-info alert-dismissible fade show text-left my-2"
                  role="alert"
                >
                  <p>
                    Iti multumim pentru aplicatie! Te rugam sa verifici
                    detaliile de contact
                  </p>
                  <ul className="list-group my-1">
                    <li className="list-group-item">
                      <small className="text-danger">
                        Telefon: {application.phone}
                      </small>
                    </li>
                    <li className="list-group-item">
                      <small className="text-danger">
                        Email: {application.email}
                      </small>
                    </li>
                  </ul>
                  <p>
                    Daca nu te vom suna in urmatoarele zile te rugam sa
                    contactezi telefonic.
                  </p>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setSubmited(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
