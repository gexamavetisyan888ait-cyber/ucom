import React from 'react';
import './UcomRouming.css';

const infoCards = [
  {
    title: 'Ակտիվացում *121#',
    description: 'Արտերկրում Ձեր Ucom հեռախոսահամարից օգտվելու համար մինչև Հայաստանից մեկնելն ակտիվացրեք ռոումինգ ծառայությունը: Ռոումինգի ակտիվացումն անվճար է:',
    buttonText: 'Ավելին'
  },
  {
    title: 'Խորհուրդներ ռոումինգի համար',
    description: 'Ucom ռոումինգի հետ միշտ կապի մեջ եղեք Ձեր ընտանիքի անդամների և ընկերների հետ գործուղման և հանգստի ժամանակ:',
    buttonText: 'Ավելին'
  },
  {
    title: 'Այցելուների համար',
    description: 'Նո՞ր եք ժամանել Հայաստան: Ձեր բջջային հեռախոսը միացնելուն պես Դուք անմիջապես կմիանաք Ucom ցանցին:',
    buttonText: 'Ավելին'
  },

];

const RoamingInfo = () => {
  return (
    <div className="roaming-info-container">
      <h2 className="roaming-info-header">Ucom ռոումինգ</h2>
      <div className="roaming-grid">
        {infoCards.map((card, index) => (
          <div key={index} className="info-card">
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
            <button className="card-button">{card.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoamingInfo;