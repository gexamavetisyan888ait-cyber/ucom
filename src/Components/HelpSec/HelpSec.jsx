import React from "react";
import {db} from '../../lib/db'

const ContactCards = () => {
  

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-gray-50 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {db.HelpSecDB.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start p-6 sm:p-8 w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]"
          >
            {item.icon}
            <p className="text-gray-800 text-sm sm:text-base leading-snug font-normal mt-2">
              {item.text && `${item.text} `}
              {item.linkText && (
                <span className="text-lime-500 font-semibold cursor-pointer hover:underline">
                  {item.linkText}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
