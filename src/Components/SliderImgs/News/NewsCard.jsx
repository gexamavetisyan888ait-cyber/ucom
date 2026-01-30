export default function NewsCard({ image, title, description, date }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1.5">
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-cover"
      />

      <div className="p-4 sm:p-5">
        <span className="text-sm text-gray-500">{date}</span>

        <h3 className="my-2 text-base sm:text-lg md:text-xl font-bold text-black">
          {title}
        </h3>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-snug text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
}
