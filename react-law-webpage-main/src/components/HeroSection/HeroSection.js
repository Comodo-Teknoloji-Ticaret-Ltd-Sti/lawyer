import React from 'react';
import '../../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='background-image'></div>
      <div className='hero-content'>
        <img src='./images/adam1.png' alt='Avukat Sol' className='lawyer-image left' />
        <div className='hero-text'>
          <h1>Güven & Tecrübe</h1>
          <p className='small-title'>Hukuki Çözüm Ortağınız</p>
        </div>
        <img src='./images/adam1.png' alt='Avukat Sağ' className='lawyer-image right' />
      </div>
    </div>
  );
}

export default HeroSection;