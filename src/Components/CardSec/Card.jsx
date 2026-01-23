import React from "react";

export default function Card({
  name,
  internet,
  rope,
  sms,
  TVbox,
  tv,
  gin,
  rouming,
  taninternet,
}) {
  return (
    <div className="flex flex-col justify-between gap-5 w-[275px] h-[400px] border border-gray-300 rounded-2xl">
      <div className="h-12 w-full bg-green-600 rounded-t-2xl flex items-center justify-center text-white font-bold">
        {name}
      </div>

      <div className="flex flex-col gap-4 p-2">
        {internet && (
          <p>
            <i className="fa-solid fa-globe text-green-600 mr-2"></i>
            {internet}
          </p>
        )}
        {rope && (
          <p>
            <i className="fa-solid fa-phone-volume text-green-600 mr-2"></i>
            {rope}
          </p>
        )}
        {sms && (
          <p>
            <i className="fa-regular fa-comment-dots text-green-600 mr-2"></i>
            {sms}
          </p>
        )}
        {TVbox && (
          <p>
            <i className="fa-solid fa-tag text-green-600 mr-2"></i>
            {TVbox}
          </p>
        )}
        {tv && (
          <p>
            <i className="fa-solid fa-tv text-green-600 mr-2"></i>
            {tv}
          </p>
        )}
        {rouming && (
          <p>
            <i className="fa-solid fa-signal text-green-600 mr-2"></i>
            {rouming}
          </p>
        )}
        {taninternet && (
          <p>
            <i className="fa-solid fa-house text-green-600 mr-2"></i>
            {taninternet}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center w-full h-24 border-t border-gray-300 rounded-b-2xl gap-3">
        <p className="font-bold">{gin} Ավելին</p>
        <button className="w-[90%] bg-green-600 py-3 rounded-xl text-white font-bold text-lg hover:bg-green-700 transition">
          Միանալ
        </button>
      </div>
    </div>
  );
}