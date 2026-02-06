import React from "react";
import {db} from '../../lib/db'
export default function CardFirst() {


  return (
    <div className="mt-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {db.CardFirstDB.map((el) => (
        <img
          key={el}
          src={el}
          alt=""
          className="
            h-[320px] w-[220px]
            sm:h-[360px] sm:w-[250px]
            lg:h-[400px] lg:w-[275px]
            rounded-2xl border border-gray-300
            object-cover transition-opacity duration-300
            hover:opacity-10
          "
        />
      ))}
    </div>
  );
}
