import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="ucom-header">
        <div className="top-bar">
          <div className="top-left">
            <a href="#">Անհատներ</a>
            <a href="#">Բիզնես</a>
          </div>

          <div className="top-right">
            <span className="phone">
              <i className="fa-solid fa-phone"></i> 444 | 011 444 444
            </span>
            <a href="#">
              {" "}
              <i className="fa-solid fa-question"></i> Օգնություն
            </a>
            <div className="lang">
              {" "}
              <i className="fa-solid fa-globe"></i> Հայ ▾
            </div>
          </div>
        </div>

        <div className="main-bar">
          <a href="/" className="logo">
            <img src="https://www.ucom.am/images/main_logo.svg" alt="Ucom" />
          </a>

          <nav className="nav">
            <a href="#">Տան համար ▾</a>
            <a href="#">Շարժական կապ ▾</a>
            <a href="/rouming">Ռոումինգ</a>
            <a href="#">
              5G ցանց <span className="badge">նոր</span>
            </a>
            <a href="#">
              Uplay <span className="badge">նոր</span>
            </a>
          </nav>

          <div className="actions">
            <span className="icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <span className="icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
            <button className="pay-btn">
              <i className="fa-solid fa-wallet"></i> Վճարել
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
