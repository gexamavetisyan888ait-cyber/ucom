import React from "react";

const cards = [
  {
    title: "uNet մարժային 3000 փաթեթ",
    description:
      "Համեմատաբար փոքր չափանիշներում Գորիս, Գյումրի քաղաքների բնակիչները կարող են օգտվել ինտերնետից, եթե Ucom-ի ֆիքսված կապի բաժանորդ չեն։",
    img: "https://www.ucom.am/storage/files/unet-1-290x_-quality(75)-webp(80).png?token=b373b7a1d9ed25a3069d4bb7bdc0ac4c",
  },
  {
    title: "Փոփոխություններ բոլոր Սակագնային պլաններում",
    description:
      "2024թ. մայիսի 1-ից Ucom-ի ֆիքսված սակագնային պլաններում փոփոխություններ են ընդունվել՝ uNet XS, uMix 6000 promo, 3Play Select, uMix S, 3Play Classic, uMix M, և այլն։",
    img: "https://www.ucom.am/storage/files/tariff-changes-1-290x_-quality(75)-webp(80).png?token=bf5694a27e5a954e0247774118af493a",
  },
];

export default function InfoCards() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8"
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
              {card.description}
            </p>
            <button className="border border-lime-500 text-lime-500 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-lime-50 transition text-sm sm:text-base">
              Միանալ
            </button>
          </div>

          <div className="flex-1 w-full flex justify-center md:justify-end">
            <img
              src={card.img}
              alt={card.title}
              className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-full h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
