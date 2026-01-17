export default function ({ title, descripton, img }) {
  return (
    <div className="promo-card1">
      <div className="promo-text1">
        <h3>{title}</h3>
        <p>{descripton}</p>
        <button className="btn-outline1">Մանրամասն</button>
      </div>
      <img src={img} alt={title} className="promo-img1" />
    </div>
  );
}
