export default function InfoCard({ title, subtitle, image, imagePosition }) {
  const isRight = imagePosition === "right";

  return (
    <div className="relative flex h-40 w-[520px] items-center overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
      <div className="z-10">
        <h3 className="mb-2 text-lg font-semibold">
          {title}
          <span className="ml-1 text-xl">›</span>
        </h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>


      <div
        className={`absolute bottom-0 ${
          isRight ? "right-4" : "right-0"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-[140px] object-contain"
        />
      </div>
    </div>
  );
}
