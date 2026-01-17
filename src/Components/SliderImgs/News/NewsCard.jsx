export default function({ image, title, description, date }){
  return (
    <div className="news-card">
      <img
        className="news-image"
        src={image}
      />
      <div className="news-content">
        <span className="news-date">{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
