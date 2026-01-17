import React from "react";
import NewsCard from './NewsCard'
import "./News.css";

const newsData = [
  {
    id: 1,
    image:"https://www.ucom.am/storage/files/hecttor-01.jpg-_x504-quality(75)-webp(80)-o(jpg).webp?token=940a932dc487484ad87717f458a6a9d3",
    title: "Ucom-ը ներդնում է Hector AI",
    description: "Hector AI-ն բարձրացնում է հաճախորդների սպասարկման որակը",
    date: "Հունվար 13, 2026",
  },
  {
    id: 2,
    image:"https://www.ucom.am/storage/files/tigran-mets-900x600.jpg-880x_-quality(75)-webp(80)-o(jpg).webp?token=ecf173a1d002a0b4118d575d6ad4011c",
    title: "Ucom-ի նոր ծառայություն",
    description: "Շտապում ենք տեղեկացնել նոր հնարավորությունների մասին",
    date: "Դեկտեմբեր 26, 2025",
  },
  {
    id: 3,
    image:"https://www.ucom.am/storage/files/untitled-1_1.png-880x_-quality(75)-webp(80)-o(png).webp?token=f19cc9ca431f73ce4ce45f3a882fe752",
    title: "Ucom-ի աջակցությամբ",
    description: "Կայացել է «Թռչունների պահպանություն» նախագիծը",
    date: "Դեկտեմբեր 19, 2025",
  },
];


const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Նորություններ</h2>
        <a href="#" className="view-all">
          Տեսնել բոլորը →
        </a>
      </div>

      <div className="news-grid">
        {newsData.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
