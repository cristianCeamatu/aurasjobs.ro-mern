import { v1 as uuid } from 'uuid';
import journey1 from '../components/sections/journey-img/journey1.jpg';
import journey2 from '../components/sections/journey-img/journey2.jpg';
import journey3 from '../components/sections/journey-img/journey3.jpg';
import journey4 from '../components/sections/journey-img/journey4.jpg';
import journey6 from '../components/sections/journey-img/journey6.jpg';

const timeline = {
  heading: 'Procesul de aplicare',
  subHeading: 'De la primul contact pana la prima zi de lucru',
  items: [
    {
      id: uuid(),
      heading: 'Conversatie telefonica',
      subHeading: 'Pre-interviu',
      body:
        'Aplicati pe site, trimiteti CV-ul pe email sau contactati-ne, trebuie sa avem o conversatie telefonica pentru a va cunoaste mai bine si a planifica toate detaliile',
      img: journey1,
    },
    {
      id: uuid(),
      heading: 'Strangerea de mana',
      subHeading: 'Initierea aplicatiei',
      body:
        'Dupa ce acceptati oferta, va trimitem prin email contractul nostru de mediere (fara taxe sau comisioane) impreuna cu documentele necesare pentru angajator, acestea le putem completa impreuna la sediul nostru sau le puteti trimite prin email.',
      img: journey2,
    },
    {
      id: uuid(),
      heading: 'Trimiterea aplicatiei',
      subHeading: 'Pregatirea interviului',
      body:
        'Va ajutam la pregatirea CV-ului (in cazul in care este necesar) si va oferim toate detaliile pentru interviu. Prezentam aplicatia finala partenerilor nostri',
      img: journey3,
    },
    {
      id: uuid(),
      heading: 'Acceptat?',
      subHeading: 'Primirea ofertelor',
      body:
        'Veti fi contactat pentru interviu in urma caruia veti primi oferta de angajare. Scopul nostru este de a alege cele mai potrivite oferte pentru dvs in functie de experienta in domeniu. O simpla conversatie telefonica va poate aduce un contract de angajare.',
      img: journey4,
    },
    {
      id: uuid(),
      heading: 'Gata de drum!',
      subHeading: 'Inceperea contractului',
      body:
        'Dupa finalizarea documentelor pregatim detaliile legate de transport. In functie de companie, transportul poate fi asigurat sau decontat de catre angajator.',
      img: journey6,
    },
  ],
  footer: 'Va uram \ncontract \nusor!',
};

export default timeline;
