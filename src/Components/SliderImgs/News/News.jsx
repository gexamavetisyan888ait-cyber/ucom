import React from "react";
import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    image:
      "https://www.ucom.am/storage/files/hecttor-01.jpg-_x504-quality(75)-webp(80)-o(jpg).webp?token=940a932dc487484ad87717f458a6a9d3",
    title: "Ucom-ը ներդնում է Hector AI",
    description: "Hector AI-ն բարձրացնում է հաճախորդների սպասարկման որակը",
    date: "Հունվար 13, 2026",
  },
  {
    id: 2,
    image:
      "https://www.ucom.am/storage/files/tigran-mets-900x600.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=ecf173a1d002a0b4118d575d6ad4011c",
    title: "Ucom-ի նոր ծառայություն",
    description: "Շտապում ենք տեղեկացնել նոր հնարավորությունների մասին",
    date: "Դեկտեմբեր 26, 2025",
  },
  {
    id: 3,
    image:
      "https://www.ucom.am/storage/files/untitled-1_1.png-880x_-quality(75)-webp(80)-o(png).webp?token=f19cc9ca431f73ce4ce45f3a882fe752",
    title: "Ucom-ի աջակցությամբ",
    description: "Կայացել է «Թռչունների պահպանություն» նախագիծը",
    date: "Դեկտեմբեր 19, 2025",
  },
];

const NewsSection = () => {
  return (
    <section className="px-[60px] py-[60px] font-sans max-md:px-[30px]">
      <div className="mb-[30px] flex items-center justify-between">
        <h2 className="text-[32px] font-bold">Նորություններ</h2>

        <a
          href="#"
          className="font-semibold text-green-700 hover:underline"
        >
          Տեսնել բոլորը →
        </a>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
        {newsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
