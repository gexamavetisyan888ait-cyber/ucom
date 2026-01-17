import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="ucom-footer">
      <div className="footer-top">

        <div className="footer-column contact-card">
          <h4>Զանգերի սպասարկում 24/7</h4>
          <div className="contact-item">
            <span className="icon">📞</span>
            <strong>011 444 444, 444</strong>
          </div>
          <p className="sub-text">Ucom ծառայությունների պայմանների և սպասարկման վերաբերյալ կարող եք դիմել հետևյալ էլ․ հասցեով՝</p>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href="mailto:444@ucom.am">444@ucom.am</a>
          </div>
          <p className="sub-text">Գլխամասային գրասենյակ ներկայացման ենթակա բոլոր հարցերով կարող եք դիմել հետևյալ էլ․ հասցեով՝</p>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href="mailto:info@ucom.am">info@ucom.am</a>
          </div>
          <div className="service-centers">
            <span className="icon">📍</span>
            <strong>Սպասարկման կենտրոններ</strong>
          </div>
        </div>


        <div className="footer-column">
          <h4>Ucom ընկերություն</h4>
          <ul>
            <li>Ucom-ի մասին</li>
            <li>Ucom-ի ղեկավարները</li>
            <li>Կորպորատիվ կառավարում</li>
            <li>Նորությունների արխիվ</li>
            <li>Գնումներ</li>
            <li>Աշխատանք</li>
            <li>Հաշվետվություններ</li>
            <li>Գործարար էթիկա և համապատասխանություն</li>
          </ul>
        </div>


        <div className="footer-column">
          <h4>Օգնություն</h4>
          <ul>
            <li>Հետադարձ կապ</li>
            <li>Ucom սպասարկման կենտրոններ</li>
            <li>Օգտակար հեռախոսահամարներ</li>
          </ul>
        </div>


        <div className="footer-column">
          <h4>Տեղեկատվություն</h4>
          <ul>
            <li>Հայտարարություններ</li>
            <li>Անհրաժեշտ փաստաթղթեր</li>
            <li>Ընդհանուր դրույթներ և պայմաններ</li>
            <li>Անձնական տվյալների մշակման քաղաքականություն</li>
            <li>Ծածկույթ</li>
            <li>ISO 9001 Սերտիֆիկատ</li>
            <li>Պրոֆիլակտիկ աշխատանքներ</li>
            <li>Արխիվ</li>
          </ul>
        </div>


        <div className="footer-column app-section">
          <div className="app-header">
            <div className="u-logo">U!</div>
            <div>
              <strong>Ucom հավելված</strong>
              <p>Android-ի և iOS-ի համար</p>
            </div>
          </div>
          <div className="store-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
          </div>
          <div className="social-links">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <span>U!</span> © Հեղինակային իրավունք Ucom ՓԲԸ 2026. Բոլոր իրավունքները պաշտպանված են
        </div>
        <div className="developer">
          Developed by <strong>STUDIOONE</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;