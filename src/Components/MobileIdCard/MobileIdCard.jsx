import React from "react";

export default function MobileIdCard() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4 sm:px-6 lg:px-10 py-10">
      
      {/* Image */}
      <img
        src="https://www.ucom.am/storage/files/mobile-id-web-12-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=86ec6583e4adb10b6857a9b93bbf0dc5"
        alt="Mobile ID"
        className="w-full max-w-[520px] md:h-[300px] md:w-[520px] rounded-[18px] object-cover"
      />

      {/* Text */}
      <div className="max-w-full md:max-w-[420px] text-center md:text-left">
        <h1 className="mb-4 text-2xl sm:text-3xl md:text-[32px] font-bold">
          Mobile ID
        </h1>

        <p className="mb-6 text-sm sm:text-base md:text-base leading-relaxed text-gray-700">
          Thanks to the Mobile ID service, you can quickly and securely
          complete identification processes and sign documents
          electronically. The service is available to individuals with
          a valid ID card.
        </p>

        <button className="cursor-pointer rounded-xl bg-lime-500 px-6 sm:px-7 py-3.5 font-bold transition hover:opacity-90 text-sm sm:text-base">
          Details
        </button>
      </div>
    </div>
  );
}
