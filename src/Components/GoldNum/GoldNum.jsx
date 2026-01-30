export default function GoldHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Image */}
        <div className="overflow-hidden rounded-3xl w-full h-64 sm:h-80 lg:h-full">
          <img
            src="https://www.ucom.am/storage/files/ucom-geghecik.png-1232x_-quality(75)-webp(80)-o(png).webp?token=c6e77d49f81911ace28b32d24feb63ea"
            alt="Gold bars"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Ucom «գլխիկ»<br />
            հեռախոսահամարներ
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            Ստացիր Ucom-ի նորագույն «գլխիկ» հեռախոսահամարը։
          </p>

          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition">
            Գնել
          </button>
        </div>

      </div>
    </section>
  );
}
