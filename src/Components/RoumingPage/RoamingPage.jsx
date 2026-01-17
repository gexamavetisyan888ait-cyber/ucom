import React from 'react';
import PromoCard from './PromoCard'
import './RoamingPage.css';

const RoamingPage = () => {
  return (
    <div className="roaming-wrapper">
      {/* SECTION 1: HERO & SEARCH */}
      <section className="hero-section">
        <h1 className="main-title">Ռոումինգ</h1>
        <div className="search-container">
          <div className="tab-headers">
            <span className="tab active">Ռոումինգ</span>
            <span className="tab">Միջազգային զանգեր</span>
          </div>
          <div className="search-box">
            <div className="input-group">
              <label>Երկիր</label>
              <select defaultValue="">
                <option value="" disabled>Նշեք երկիրը</option>
                <option value="cy">Կիպրոս</option>
                <option value="eg">Եգիպտոս</option>
              </select>
            </div>
            <button className="btn-search">🔍 Որոնել</button>
          </div>
        </div>
        <div className="quick-links">
          <p>Հիմնական ուղղություններ</p>
          <div className="flag-chips">
            <span className="chip">🇨🇾 Կիպրոս</span>
            <span className="chip">🇪🇬 Եգիպտոս</span>
            <span className="chip">🇬🇪 Վրաստան</span>
            <span className="chip">🇮🇹 Իտալիա</span>
            <span className="chip">🇦🇪 ԱՄԷ</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: INFO GRID */}
      <section className="info-section">
        <h2 className="section-title">Ucom ռոումինգ</h2>
        <div className="info-grid">
          <InfoCard 
            title="Ակտիվացում *121#" 
            text="Արտերկրում Ձեր Ucom հեռախոսահամարից օգտվելու համար ակտիվացրեք ռոումինգը:"
          />
          <InfoCard 
            title="Խորհուրդներ" 
            text="Ucom ռոումինգի հետ միշտ կապի մեջ եղեք Ձեր ընտանիքի անդամների հետ:"
          />
          <InfoCard 
            title="Այցելուների համար" 
            text="Նո՞ր եք ժամանել Հայաստան: Դուք անմիջապես կմիանաք Ucom ցանցին:"
          />
          <InfoCard 
            title="Ռոումինգ օդում" 
            text="Շարունակեք մնալ կապի մեջ նույնիսկ թռիչքի ընթացքում AeroMobile-ով:"
          />
        </div>
      </section>

      {/* SECTION 3: PROMO PACKAGES */}
      <section className="promo-section">
        <div className="promo-grid">
          <PromoCard 
            title="uTravel ինտերնետ փաթեթ" 
            img="https://www.ucom.am/storage/files/image-5-998x_-quality(75)-webp(80).png"
          />
          <PromoCard 
            title="Ինտերնետ ռոումինգում" 
            img="https://www.ucom.am/storage/files/roaming-internet.png" 
          />
        </div>
      </section>
    </div>
  );
};

const InfoCard = ({ title, text }) => (
  <div className="info-card">
    <h3>{title}</h3>
    <p>{text}</p>
    <button className="btn-outline">Ավելին</button>
  </div>
);

export default RoamingPage;