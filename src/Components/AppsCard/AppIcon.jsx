import React, { useState } from "react";
import { useRealtimeCollection } from "../../hooks/useRealtimeCollection";

export default function App() {
  const { data: appsData, loading } = useRealtimeCollection("db/CardSecDB");
  const [cardId, setCardId] = useState(null);

  const apps = [
    "https://www.ucom.am/storage/files/new-upay.svg",
    "https://www.ucom.am/storage/files/285x285-80x_-quality(75)-webp(80).png?token=e9422f77bed178a5f2d362e18a028fb1",
    "https://www.ucom.am/storage/files/rectangle-513-1-80x_-quality(75)-webp(80).png?token=b6a9098cf1f35075342f2c791f3c6228",
    "https://www.ucom.am/storage/files/ukid_1.svg",
  ];

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-6 p-4 md:flex-row md:items-start md:justify-center md:p-10">
      
    
      <div className="w-full max-w-[420px] rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">
          Recharge your account online
        </h2>
        <p className="mb-5 text-sm text-gray-500">
          Enter your Ucom mobile or fixed service number.
        </p>

        <div className="mb-4 flex gap-5">
          <span className="border-b-2 border-transparent pb-1 text-gray-400">
            Phone number
          </span>
          <span className="border-b-2 border-green-500 pb-1 text-green-500">
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
          Discover a new level of comfort through our innovative mobile applications.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-2">
          {appsData.map((app, index) => (
            <div
              key={app.id}
              onClick={() => setCardId(index)}
              className="cursor-pointer text-center"
            >
              <img
                src={apps[index]}
                alt={app.name}
                className="mx-auto mb-2 h-14 w-14 rounded-lg object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {cardId !== null && appsData[cardId] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            onClick={() => setCardId(null)}
          />

          <div className="relative w-full max-w-[600px] rounded-[32px] bg-white p-8 shadow-2xl">
            
            <button
              onClick={() => setCardId(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>

            <div className="flex gap-6 items-start mb-10">
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={apps[cardId]}
                  alt={appsData[cardId]?.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {appsData[cardId]?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {appsData[cardId]?.title}
                </p>
              </div>
            </div>

            <hr className="border-gray-100 mb-8" />

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center border">
                <img
                  src="https://www.ucom.am/storage/files/ukid-qr.png-148x_-quality(75)-webp(80)-o(png).webp?token=d526bfef72778344bed1fccef9eaa615"
                  alt="QR"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="font-bold text-gray-800 mb-4">
                  Ներբեռնեք Ձեր սարքի համար
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="#">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Google Play"
                      className="h-12"
                    />
                  </a>

                  <a href="#">
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