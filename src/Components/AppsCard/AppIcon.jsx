import React from "react";

export default function App() {
  const apps = ["Ucom", "Uplay", "UPay", "uKid"];

  return (
    <div className="flex flex-wrap justify-center items-start gap-6 p-10">
      
      <div className="w-[420px] rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">Recharge your account online</h2>
        <p className="mb-5 text-sm text-gray-500">
          Enter your Ucom mobile or fixed service number.
        </p>

        <div className="flex gap-5 mb-4">
          <span className="cursor-pointer text-gray-400 border-b-2 border-transparent pb-1">
            Phone number
          </span>
          <span className="cursor-pointer text-green-500 border-b-2 border-green-500 pb-1">
            ID
          </span>
        </div>

        <div className="flex gap-3">
          <div className="flex flex-1 items-center border border-gray-300 rounded-xl px-3 py-2">
            <span className="mr-2 text-gray-600">+374</span>
            <input
              type="text"
              placeholder="XX XXX XXX"
              className="w-full outline-none border-none"
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

      <div className="w-[420px] rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-2 text-lg font-bold">Ucom apps</h2>
        <p className="mb-5 text-sm text-gray-500">
          Discover a new level of comfort through our innovative mobile applications.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-5">
          {apps.map((app) => (
            <div key={app} className="text-center">
              <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-green-500 font-bold text-white">
                {app[0]}
              </div>
              <span>{app}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
