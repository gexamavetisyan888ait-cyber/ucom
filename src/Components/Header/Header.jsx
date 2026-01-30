import React from "react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 font-sans">
      
      {/* Top info bar */}
      <div className="hidden sm:flex justify-between px-4 sm:px-6 lg:px-10 py-2 text-xs sm:text-sm border-b border-gray-200">
        <div className="flex gap-4 sm:gap-5">
          <a
            href="#"
            className="relative font-medium text-black after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-green-500"
          >
            Անհատներ
          </a>
          <a href="#" className="font-medium text-black">
            Բիզնես
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm">
          <span className="font-medium">
            <i className="fa-solid fa-phone mr-1"></i> 444 | 011 444 444
          </span>

          <a href="/help" className="text-black flex items-center gap-1">
            <i className="fa-solid fa-question"></i> Օգնություն
          </a>

          <div className="cursor-pointer flex items-center gap-1">
            <i className="fa-solid fa-globe"></i> Հայ ▾
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 gap-4 sm:gap-0">
        {/* Logo */}
        <a href="/" className="block">
          <img
            src="https://www.ucom.am/images/main_logo.svg"
            alt="Ucom"
            className="h-8 sm:h-9"
          />
        </a>

        {/* Navigation links */}
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm sm:text-base items-center w-full sm:w-auto">
          <a
            href="/forHome"
            className="font-medium text-black hover:text-green-500 flex items-center gap-1"
          >
            Տան համար ▾
          </a>
          <a
            href="/mobileconection"
            className="font-medium text-black hover:text-green-500 flex items-center gap-1"
          >
            Շարժական կապ ▾
          </a>
          <a
            href="/rouming"
            className="font-medium text-black hover:text-green-500"
          >
            Ռոումինգ
          </a>
          <a
            href="#"
            className="font-medium text-black hover:text-green-500 flex items-center gap-1"
          >
            5G ցանց
            <span className="ml-1 rounded-md bg-green-500 px-1.5 py-0.5 text-[11px] text-white">
              նոր
            </span>
          </a>
          <a
            href="#"
            className="font-medium text-black hover:text-green-500 flex items-center gap-1"
          >
            Uplay
            <span className="ml-1 rounded-md bg-green-500 px-1.5 py-0.5 text-[11px] text-white">
              նոր
            </span>
          </a>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-green-100 px-3 sm:px-4 py-2 font-semibold hover:bg-green-200 text-sm sm:text-base">
            <i className="fa-solid fa-wallet"></i> Վճարել
          </button>
        </div>
      </div>
    </header>
  );
}
