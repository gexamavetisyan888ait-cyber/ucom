import React from "react";
import {db} from '../../lib/db'

const RoamingInfo = () => {
  return (
    <section className="px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="mb-8 text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Ucom ռոումինգ
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {db.UcomRoumingDB.map((card, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 className="mb-3 text-base sm:text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <button className="mt-6 w-fit rounded-lg bg-[#83d017] px-5 py-2 text-sm sm:text-base font-bold text-white transition hover:opacity-90">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoamingInfo;
