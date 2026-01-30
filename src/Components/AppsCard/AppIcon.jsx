import React from "react";

export default function App() {
  const apps = ["Ucom", "Uplay", "UPay", "uKid"];

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
          Discover a new level of comfort through our innovative mobile applications.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-2">
          {apps.map((app) => (
            <div key={app} className="text-center">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-green-500 font-bold text-white">
                {app[0]}
              </div>
              <span className="text-sm">{app}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
