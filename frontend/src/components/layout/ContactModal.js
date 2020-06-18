import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import ContactModalFooter from './ContactModalFooter';

const ContactModal = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Textarea remaining chars
  const [messageLength, setMessageLength] = useState(0);

  const { register, handleSubmit, reset, errors } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/v1/events/contactRequest', data);
      setData(response.data.data);
      setLoading(false);
      reset();
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Ai intrebari?</h2>
            <h3 className="section-subheading">Noi avem toate raspunsurile</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form
              name="sentMessage"
              id="contactForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Numele complet *"
                      name="name"
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
                    <p className="text-danger pl-2">
                      {errors.name && errors.name.message}
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Adresa de email *"
                      name="email"
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
                    <p className="text-danger pl-2">
                      {errors.email && errors.email.message}
                    </p>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Numar de telefon *"
                      name="phone"
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
                    <p className="text-danger pl-2">
                      {errors.phone && errors.phone.message}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Mesajul tau *"
                      name="message"
                      onChange={(e) => setMessageLength(e.target.value.length)}
                      ref={register({
                        required: {
                          value: true,
                          message: 'Acest camp este obligatoriu',
                        },
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
                    <p className="text-danger pl-2">
                      {errors.message && errors.message.message}
                    </p>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  {error && <p className="bg-danger text-white p-2">{error}</p>}
                  {data && (
                    <div className="alert alert-info alert-dismissible fade show my-2">
                      Iti multumim pentru cererea de contact. Te rugam sa
                      verifici detaliile:{' '}
                      <ul className="list-group my-1">
                        <li className="list-group-item">
                          <small className="text-danger">
                            Telefon: {data.phone}
                          </small>
                        </li>
                        <li className="list-group-item">
                          <small className="text-danger">
                            Email: {data.email}
                          </small>
                        </li>
                      </ul>
                      Daca nu te vom suna in urmatoarele zile te rugam sa ne
                      contactezi telefonic.
                      <button
                        type="button"
                        className="close text-danger"
                        onClick={() => setData(null)}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
                  {!data && loading ? (
                    <button
                      className="btn btn-xl btn-success d-block mx-auto"
                      type="button"
                      disabled
                    >
                      <span
                        className="spinner-grow spinner-grow-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>{' '}
                      Loading...
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-xl">
                      Trimite
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
        <ContactModalFooter />
      </div>
    </section>
  );
};

export default ContactModal;
