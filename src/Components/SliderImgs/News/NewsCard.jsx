export default function NewsCard({ image, title, description, date }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5">
      <img
        src={image}
        alt={title}
        className="h-[220px] w-full object-cover"
      />

      <div className="p-5">
        <span className="text-sm text-gray-500">{date}</span>

        <h3 className="my-2 text-lg font-bold text-black">
          {title}
        </h3>

        <p className="text-[15px] leading-snug text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
