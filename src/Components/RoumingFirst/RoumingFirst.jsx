import React, { useState } from 'react';
import './RoumingFirst.css';

export default function RoumingFirst() {

  const destinations = [
    { name: 'Կիպրոս', flag: '🇨🇾' },
    { name: 'Եգիպտոս', flag: '🇪🇬' },
    { name: 'Վրաստան', flag: '🇬🇪' },
    { name: 'Իտալիա', flag: '🇮🇹' },
    { name: 'ԱՄԷ', flag: '🇦🇪' },
  ];

  return (
    <div className="roaming-container">
      <div className="roaming-content">
        <h1 className="roaming-title">Ռոումինգ</h1>

        <div className="search-card">
          <div className="tabs">
            <button 
              className={`tab-btn `}
             
            >
              Ռոումինգ
            </button>
            <button 
              className={`tab-btn`}
             
            >
              Միջազգային զանգեր
            </button>
          </div>

          <div className="search-body">
            <div className="input-group">
              <label>Երկիր</label>
              <div className="select-wrapper">
                <select defaultValue="">
                  <option value="" disabled>Նշեք երկիրը</option>
                  <option value="cyprus">Կիպրոս</option>
                  <option value="egypt">Եգիպտոս</option>
                  <option value="georgia">Վրաստան</option>
                </select>
              </div>
            </div>
            <button className="search-btn">
              <span className="search-icon">🔍</span> Որոնել
            </button>
          </div>
        </div>

        
      </div>
            <div className="bg-graphic">
        <img 
          src="https://www.ucom.am/storage/files/image-5-998x_-quality(75)-webp(80).png" 
          alt="Globe Graphic" 
        />
      </div>
    </div>
  );
}