export default function ({ title, img }) {
  return (
    <div className="promo-card">
      <div className="promo-text">
        <h3>{title}</h3>
        <p>Ճանապարհին ուր էլ որ տանի, Ucom-ի հետ միշտ կապի մեջ եք:</p>
        <button className="btn-outline">Մանրամասն</button>
      </div>
      <img src={img} alt={title} className="promo-img" />
    </div>
  );
}
