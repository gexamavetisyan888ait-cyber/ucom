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
    <div className="max-w-6xl mx-auto px-5 py-12 grid md:grid-cols-2 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="border border-lime-500 text-lime-500 px-6 py-2 rounded-lg font-semibold hover:bg-lime-50 transition">
              Միանալ
            </button>
          </div>

          <div className="flex-1">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
