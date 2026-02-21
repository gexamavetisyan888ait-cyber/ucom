import React from "react";
import Card from "./Card";
import { useRealtimeCollection } from "../../hooks/useRealtimeCollection";

export default function CardSec() {
  const { data: cards, loading, error } = useRealtimeCollection("db/CardSecDB");

  if (loading) {
    return <div className="mt-12 text-center text-gray-500">Loading cards...</div>;
  }

  if (error) {
    return <div className="mt-12 text-center text-red-500">Error: {error}</div>;
  }

  if (!cards.length) {
    return <div className="mt-12 text-center text-gray-500">No cards available</div>;
  }

  return (
    <div className="w-full mx-auto mt-12 px-5">
      <h1 className="text-2xl font-bold mb-8 text-center">Լավագույն առաջարկ</h1>

      <div
        className="
          grid gap-[70px] justify-items-center
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          mb-10
        "
      >
        {cards.map((el, i) => (
          <Card key={el.id || i} {...el} />
        ))}
      </div>
    </div>
  );
}