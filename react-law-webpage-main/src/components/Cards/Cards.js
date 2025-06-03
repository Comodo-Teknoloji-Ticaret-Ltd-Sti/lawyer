import React from 'react';
import { GoChevronDown, GoArrowRight } from 'react-icons/go';
import { BiSend } from 'react-icons/bi';
import './Cards.css';

const CardItem = ({ src, text, label, path, description }) => {
  return (
    <div className="cards__item">
      <a href={path} className="cards__item__link">
        <div className="card-arrow">
          <GoArrowRight />
        </div>
        <div className="cards__item__pic-wrap" data-category={label}>
          <img src={src} alt={label} className="cards__item__img fade-img" />
        </div>
        <div className="cards__item__info">
          <div className="cards__item__text">{text}</div>
          <div className="card-footer">
            <BiSend className="card-icon" />
            <span>{description || 'Learn More'}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

function Cards() {
  const cardData = [
    {
      src: './images/practices.jpg',
      text: 'Explore comprehensive legal solutions tailored to your needs',
      label: 'Services',
      path: '#/services',
      description: 'Professional Legal Services'
    },
    {
      src: './images/careers.jpg',
      text: 'Join our dynamic team and build your legal career',
      label: 'Career',
      path: '#/career',
      description: 'Growth Opportunities'
    },
    {
      src: './images/contact.jpg',
      text: 'Get in touch with our expert legal team',
      label: 'Contact',
      path: '#/contact',
      description: '24/7 Support Available'
    },
    {
      src: './images/about.jpg',
      text: 'Learn about our history and commitment to excellence',
      label: 'About',
      path: '#/about',
      description: 'Our Story & Values'
    }
  ];

  return (
    <div className='cards'>
      <div className="cards-header">
        <div className="section-subtitle">
          <GoChevronDown className="chevron-icon" />
          <span>Hukuki Mükemmellik</span>
        </div>
        <div className="section-title-wrapper">
          <div className="title-decoration"></div>
          <h1 className="main-title">Dündar Hukuk Bürosu</h1>
          <div className="title-decoration"></div>
        </div>
        <p className="section-description">
          Dürüstlük ve bağlılıkla üstün hukuk hizmeti sunuyoruz
        </p>
      </div>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className='cards-grid'>
            <div className='cards__items'>
              {cardData.slice(0, 2).map((card, index) => (
                <CardItem
                  key={index}
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path}
                  description={card.description}
                />
              ))}
            </div>
            <div className='cards__items'>
              {cardData.slice(2, 4).map((card, index) => (
                <CardItem
                  key={index + 2}
                  src={card.src}
                  text={card.text}
                  label={card.label}
                  path={card.path}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;