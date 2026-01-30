import React from "react";

export default function CardFirst() {
  const cards = [
    "https://www.ucom.am/storage/files/honorx7d-arm.png-650x_-quality(75)-webp(80)-o(png).webp?token=c0fa9d36ff4cddff30fddb48ec6559e1",
    "https://www.ucom.am/storage/files/apple-watch-eshop-mobile-arm.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=78d89c0a8131c257c8ad48f33f623538",
    "https://www.ucom.am/storage/files/ucoin-web-650x920-arm-1.png-650x_-quality(75)-webp(80)-o(png).webp?token=d7bd44ce8cd1aa89ccc41824e4fc10a5",
    "https://www.ucom.am/storage/files/airpods-eshop-mobile-arm.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=126eee14aae30692c93b574b7f8c5824",
  ];

  return (
    <div className="mt-12 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((el) => (
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
