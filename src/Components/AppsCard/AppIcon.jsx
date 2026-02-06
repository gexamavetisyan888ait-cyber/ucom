import React, { useState } from "react";
import { db } from "../../lib/db";

export default function App() {
  const apps = [
    "https://www.ucom.am/storage/files/new-upay.svg",
    "https://www.ucom.am/storage/files/285x285-80x_-quality(75)-webp(80).png?token=e9422f77bed178a5f2d362e18a028fb1",
    "https://www.ucom.am/storage/files/rectangle-513-1-80x_-quality(75)-webp(80).png?token=b6a9098cf1f35075342f2c791f3c6228",
    "https://www.ucom.am/storage/files/ukid_1.svg",
  ];

  const [cardId, setCardId] = useState(null);

  return (
    <div className="flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-center md:p-10">
      <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">Recharge your account online</h2>
        <p className="mb-5 text-sm text-gray-500">
          Enter your Ucom mobile or fixed service number.
        </p>

        <div className="mb-4 flex gap-5">
          <span className="cursor-pointer border-b-2 border-transparent pb-1 text-gray-400">
            Phone number
          </span>
          <span className="cursor-pointer border-b-2 border-green-500 pb-1 text-green-500">
            ID
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 items-center rounded-xl border border-gray-300 px-3 py-2">
            <span className="mr-2 text-gray-600">+374</span>
            <input
              type="text"
              placeholder="XX XXX XXX"
              className="w-full border-none outline-none"
            />
          </div>

          <button className="rounded-xl border border-green-500 bg-white px-5 py-2 font-bold text-green-500 transition hover:bg-green-500 hover:text-white">
            💳 Pay
          </button>
        </div>

        <div className="mt-5 flex gap-3 text-xs font-bold">
          <span>VISA</span>
          <span>Mastercard</span>
        </div>
      </div>

      <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">Ucom apps</h2>
        <p className="mb-5 text-sm text-gray-500">
          Discover a new level of comfort through our innovative mobile
          applications.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-2">
          {apps.map((app, index) => (
            <div
              onClick={() => {
                setCardId(index + 1);
              }}
              key={app}
              className="text-center"
            >
              <img
                src={app}
                className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-green-500 font-bold text-white"
              />
            </div>
          ))}
        </div>
      </div>

      {cardId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setCardId(null)}
          />

          <div className="relative w-full max-w-[600px] rounded-[32px] bg-white p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setCardId(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="flex gap-6 items-start mb-10">
              <div className="w-24 h-24 flex-shrink-0 rounded-3xl">
                <img
                  src={apps[cardId - 1]}
                  alt={db.AppIconDB[cardId].name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {db.AppIconDB[cardId].name}
                </h2>
                <p className="text-sm leading-relaxed text-gray-500">
                  {db.AppIconDB[cardId].title}
                </p>
              </div>
            </div>

            <hr className="border-gray-100 mb-8" />

            <div className="flex flex-col md:flex-row items-center gap-8 px-4">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                <img src="https://www.ucom.am/storage/files/ukid-qr.png-148x_-quality(75)-webp(80)-o(png).webp?token=d526bfef72778344bed1fccef9eaa615"/>
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="font-bold text-gray-800 mb-4">
                  Ներբեռնեք Ձեր սարքի համար
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="#" className="transition-transform active:scale-95">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-12"
                    />
                  </a>
                  <a href="#" className="transition-transform active:scale-95">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="App Store"
                      className="h-12"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
