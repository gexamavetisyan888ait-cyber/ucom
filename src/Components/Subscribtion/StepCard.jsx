export default function StepCard({ number, text }) {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <p className="step-text">{text}</p>
    </div>
  );
}
