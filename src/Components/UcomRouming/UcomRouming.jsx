import React from "react";

const infoCards = [
  {
    title: "Ակտիվացում *121#",
    description:
      "Արտերկրում Ձեր Ucom հեռախոսահամարից օգտվելու համար մինչև Հայաստանից մեկնելն ակտիվացրեք ռոումինգ ծառայությունը: Ռոումինգի ակտիվացումն անվճար է:",
    buttonText: "Ավելին",
  },
  {
    title: "Խորհուրդներ ռոումինգի համար",
    description:
      "Ucom ռոումինգի հետ միշտ կապի մեջ եղեք Ձեր ընտանիքի անդամների և ընկերների հետ գործուղման և հանգստի ժամանակ:",
    buttonText: "Ավելին",
  },
  {
    title: "Այցելուների համար",
    description:
      "Նո՞ր եք ժամանել Հայաստան: Ձեր բջջային հեռախոսը միացնելուն պես Դուք անմիջապես կմիանաք Ucom ցանցին:",
    buttonText: "Ավելին",
  },
];

const RoamingInfo = () => {
  return (
    <div className="mx-auto max-w-[1100px] px-5 py-10">
      <h2 className="mb-8 text-2xl font-bold text-center">Ucom ռոումինգ</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1"
          >
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
            <button className="mt-4 w-fit rounded-lg bg-[#83d017] px-5 py-2 font-bold text-white transition hover:opacity-90">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoamingInfo;
