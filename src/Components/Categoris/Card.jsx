export default function PromoCard({
  title,
  description,
  buttonText,
  image,
  reverse = false,
}) {
  return (
    <div
      className={`
        flex flex-col sm:flex-row items-center justify-between
        bg-white rounded-2xl p-5 sm:p-6 shadow-sm gap-6
        ${reverse ? "sm:flex-row-reverse" : ""}
      `}
    >
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <button className="px-6 py-2 rounded-full border border-green-500 text-green-600 font-medium hover:bg-green-50 transition">
          {buttonText}
        </button>
      </div>

      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="
            max-w-[140px]
            sm:max-w-[160px]
            md:max-w-[180px]
            object-contain
          "
        />
      </div>
    </div>
  );
}
