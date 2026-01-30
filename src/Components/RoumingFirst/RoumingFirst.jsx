import React, { useState } from "react";

export default function RoumingFirst() {
  const [activeTab, setActiveTab] = useState("roaming");

  return (
    <div className="relative mx-auto my-5 flex min-h-[400px] max-w-[1200px] items-center justify-center overflow-hidden rounded-[20px] bg-[#f6f6f6] px-4 sm:px-6 lg:px-10 py-10 sm:py-[60px] font-sans">
      
      <div className="relative z-10 w-full max-w-[600px] text-center">
        <h1 className="mb-6 text-2xl sm:text-3xl md:text-[32px] font-bold text-[#333]">
          Ռոումինգ
        </h1>

        <div className="rounded-[15px] bg-white p-4 sm:p-[25px] text-left shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          
          <div className="mb-4 flex gap-4 sm:gap-5 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("roaming")}
              className={`relative pb-2 text-sm sm:text-base transition ${
                activeTab === "roaming"
                  ? "font-bold text-[#333] after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-[#83d017]"
                  : "text-[#888]"
              }`}
            >
              Ռոումինգ
            </button>

            <button
              onClick={() => setActiveTab("intl")}
              className={`relative pb-2 text-sm sm:text-base transition ${
                activeTab === "intl"
                  ? "font-bold text-[#333] after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-[#83d017]"
                  : "text-[#888]"
              }`}
            >
              Միջազգային զանգեր
            </button>
          </div>

          <div className="flex items-end gap-3 sm:gap-[15px] flex-col sm:flex-row sm:items-end">
            
            <div className="flex-1 w-full">
              <label className="mb-2 block text-[12px] sm:text-sm font-bold text-[#333]">
                Երկիր
              </label>

              <select
                defaultValue=""
                className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-3 py-2 sm:py-3 text-sm text-[#888] focus:outline-none"
              >
                <option value="" disabled>
                  Նշեք երկիրը
                </option>
                <option value="cyprus">Կիպրոս</option>
                <option value="egypt">Եգիպտոս</option>
                <option value="georgia">Վրաստան</option>
              </select>
            </div>

            <button className="flex w-full sm:w-auto h-[44px] items-center justify-center gap-2 rounded-lg bg-[#83d017] px-6 font-bold text-white transition hover:opacity-90">
              <i className="fa-solid fa-magnifying-glass"></i>
              Որոնել
            </button>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 -right-12 z-0 w-[300px] opacity-80 hidden md:block lg:w-[400px]">
        <img
          src="https://www.ucom.am/storage/files/image-5-998x_-quality(75)-webp(80).png"
          alt="Globe Graphic"
          className="w-full"
        />
      </div>
    </div>
  );
}
