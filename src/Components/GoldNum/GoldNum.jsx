export default function GoldHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        <div className="overflow-hidden rounded-3xl">
          <img
            src="https://www.ucom.am/storage/files/ucom-geghecik.png-1232x_-quality(75)-webp(80)-o(png).webp?token=c6e77d49f81911ace28b32d24feb63ea"
            alt="Gold bars"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-xl">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Ucom «գլխիկ»
            <br />
            հեռախոսահամարներ
          </h1>

          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Ստացիր Ucom-ի նորագույն «գլխիկ» հեռախոսահամարը։
          </p>

          <button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 rounded-xl transition">
            Գնել
          </button>
        </div>

      </div>
    </section>
  );
}
