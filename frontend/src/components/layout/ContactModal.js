import React from 'react';
import { useForm } from 'react-hook-form';

import ContactModalFooter from './ContactModalFooter';

const ContactModal = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // Textarea remaining chars
  const [messageLength, setMessageLength] = React.useState(0);

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
                  <div id="success" />
                  <button type="submit" className="btn btn-xl">
                    Trimite
                  </button>
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
