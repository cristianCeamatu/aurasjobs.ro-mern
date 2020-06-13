import React from 'react';
import { Link } from 'react-scroll';
import { FaHeart } from 'react-icons/fa';

import ContactModal from './ContactModal';

const Footer = () => {
  return (
    <div>
      <ContactModal />
      <footer className="footer-main">
        <div className="container">
          <section className="links">
            <ul className="links-group">
              <li>
                <h3>Aurasjobs.ro</h3>
              </li>
              <li>
                <a
                  href="http://www.aurasjobs.ro/downloads/dovada-itm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autorizatie ITM
                </a>
              </li>
              <li>
                <a href="http://www.aurasjobs.ro/downloads/gdprRO.pdf">
                  Protectia datelor
                </a>
              </li>
              <li>
                <Link
                  to="about"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  href="#about"
                >
                  Despre noi
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  spy
                  smooth
                  offset={-70}
                  duration={500}
                  href="#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="links-group">
              <li>
                <h3>Plasare forta de munca</h3>
              </li>
              <li>
                <a
                  href="http://www.itmconstanta.ro/Documente%20RM/Plasare%20forta%20de%20munca/Avertisment%20privind%20munca%20in%20strainatate%20prin%20intermediul%20agentilor%20de%20plasare%20forta%20de%20munca.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plasare forta de munca in strainatate
                </a>
              </li>
              <li>
                <a
                  href="http://www.itmconstanta.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ITM Constanta
                </a>
              </li>
              <li>
                <a
                  href="https://www.inspectiamuncii.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inspectia muncii
                </a>
              </li>
            </ul>
            <ul className="links-group">
              <li>
                <h3>Legislatie</h3>
              </li>
              <li>
                <a
                  href="http://www.mmuncii.ro/j33/images/Documente/Legislatie/HG723-2018.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hotararea 723/2018
                </a>
              </li>
              <li>
                <a
                  href="http://www.mmuncii.ro/j33/images/Documente/Munca/MobilitateaForteiDeMunca/legea-232_2017_-modif_legea_156_2000.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legea 232/2017
                </a>
              </li>
              <li>
                <a
                  href="https://mmuncii.ro/j33/images/Documente/Legislatie/2019/LEGE_Nr156_2000_Republicata.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Legea 156/2000
                </a>
              </li>
            </ul>
            <ul className="links-group">
              <li>
                <h3>Site-uri utile</h3>
              </li>
              <li>
                <a
                  href="https://anpc.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ANPC
                </a>
              </li>
              <li>
                <a
                  href="https://www.protectia-consumatorilor.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Protectia consumatorilor
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guvernul Romaniei
                </a>
              </li>
              <li>
                <a
                  href="https://www.econsulat.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Servicii consulare
                </a>
              </li>
              <li>
                <a
                  href="https://europa.eu/youreurope/citizens/national-contact-points/embassies/index_ro.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Ambasade Europa
                </a>
              </li>
            </ul>
          </section>
          <p className="copyright text-small text-muted">
            This website is made with
            <FaHeart className="text-danger mx-1 mb-1" />
            by{' '}
            <a className="page-scroll" href="#page-top">
              aurasjobs team
            </a>
            <br />
            <span>&copy; Copyright 2017 - {new Date().getFullYear()} </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
