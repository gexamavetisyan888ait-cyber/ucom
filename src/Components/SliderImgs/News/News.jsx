import React from "react";
import NewsCard from "./NewsCard";
import {db} from '../../../lib/db'

const NewsSection = () => {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-12 font-sans">
      <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Նորություններ</h2>

        <a
          href="#"
          className="font-semibold text-green-700 hover:underline text-sm sm:text-base"
        >
          Տեսնել բոլորը →
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {db.NewsDB.map((item) => (
          <NewsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
