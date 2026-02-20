import React from "react";
import { useFirestoreCollection } from "../../hooks/useFirestoreCollection";

const ContactCards = () => {
  const { data: cards, loading, error } = useFirestoreCollection("HelpSecDB");

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading contacts...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (!cards.length) {
    return <div className="text-center py-10 text-gray-500">No contact info available</div>;
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-gray-50 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {cards.map((item, index) => (
          <div
            key={item.id || index}
            className="flex flex-col items-start p-6 sm:p-8 w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]"
          >
            {item.icon && <span className="text-2xl">{item.icon}</span>}

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