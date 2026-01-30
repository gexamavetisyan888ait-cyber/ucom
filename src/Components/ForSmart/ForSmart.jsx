import React from "react";

export default function PackageCard({
  title,
  features,
  price,
  highlighted = false,
}) {
  return (
    <div
      className={`
        rounded-2xl border shadow-sm
        flex flex-col justify-between
        transition transform
        ${highlighted ? "bg-lime-50 border-lime-400 lg:scale-105" : "bg-white border-gray-200"}
      `}
    >
      <div>
        <div className="bg-lime-500 text-white text-base sm:text-lg font-semibold p-4 rounded-t-2xl">
          {title}
        </div>

        <ul className="p-4 sm:p-5 space-y-3 text-sm text-gray-700">
          {features.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-lime-500">●</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 sm:p-5 border-t">
        <div className="text-xl sm:text-2xl font-bold mb-4">
          {price} ֏
        </div>
        <button className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-xl font-medium">
          Միացնել
        </button>
      </div>
    </div>
  );
}
