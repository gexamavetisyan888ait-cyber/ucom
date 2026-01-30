import React from "react";

const Card = ({ title, description, image, align = "right" }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
  
    <div
      className={`flex-shrink-0 ${
        align === "left" ? "md:order-first" : "md:order-last"
      } w-full md:w-56 lg:w-64`}
    >
      <img src={image} alt={title} className="w-full h-auto object-contain rounded-lg" />
    </div>

    <div className="max-w-full md:max-w-md text-center md:text-left">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6">{description}</p>
      <button className="border border-lime-500 text-lime-600 px-5 sm:px-6 py-2 rounded-lg font-medium hover:bg-lime-50 transition">
        Մանրամասն
      </button>
    </div>
  </div>
);

export default Card;
