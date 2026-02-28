import React from "react";
import { useRealtimeCollection } from "../../hooks/useRealtimeCollection";

export default function CardFirst() {
  const { data: cards, loading, error } = useRealtimeCollection("db/CardFirstDB");

  if (loading) {
    return <div className="mt-12 text-center text-gray-500">Loading cards...</div>;
  }

  if (error) {
    return <div className="mt-12 text-center text-red-500">Error: {error}</div>;
  }

  if (!cards.length) {
    return <div className="mt-12 text-center text-gray-500">No cards available</div>;
  }
console.log(cards);

  return (
    <div className="mt-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <div key={index} className="relative group">
          <p>{card}</p>
          <img
            src={'https://www.ucom.am/storage/files/apple-watch-eshop-mobile-arm.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=78d89c0a8131c257c8ad48f33f623538'} 
            alt={`Card ${index + 1}`}
            className="
              h-[320px] w-[220px]
              sm:h-[360px] sm:w-[250px]
              lg:h-[400px] lg:w-[275px]
              rounded-2xl border border-gray-300
              object-cover transition-opacity duration-300
              group-hover:opacity-10
            "
          />
        </div>
      ))}
      <p>asdfghjk</p>
    </div>
  );
}