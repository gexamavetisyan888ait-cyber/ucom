import React from "react";
import {db} from '../../lib/db'


export default function InfoCards() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {db.InternetInfoDB.map((card, i) => (
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
