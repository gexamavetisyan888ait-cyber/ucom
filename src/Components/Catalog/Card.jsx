export default function InfoCard({ title, subtitle, image, imagePosition }) {
  return (
    <div className="info-card">
      <div className="info-text">
        <h3>
          {title} <span className="arrow">›</span>
        </h3>
        <p>{subtitle}</p>
      </div>

      <div
        className={`info-image ${
          imagePosition === "right" ? "right" : "left"
        }`}
      >
        <img src={image} alt={title} />
      </div>
    </div>
  );
}