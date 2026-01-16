export default function InfoItem({ text }) {
  return (
    <div className="info-item">
      <span className="info-icon">✔</span>
      <span>{text}</span>
    </div>
  );
}
