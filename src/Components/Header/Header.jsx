export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 font-sans">
      <div className="flex justify-between px-10 py-2 text-sm border-b border-gray-200">
        <div className="flex gap-5">
          <a
            href="#"
            className="relative font-medium text-black after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-green-500"
          >
            Անհատներ
          </a>
          <a href="#" className="font-medium text-black">
            Բիզնես
          </a>
        </div>

        <div className="flex items-center gap-5">
          <span className="font-medium">
            <i className="fa-solid fa-phone mr-1"></i> 444 | 011 444 444
          </span>

          <a href="#" className="text-black">
            <i className="fa-solid fa-question mr-1"></i> Օգնություն
          </a>

          <div className="cursor-pointer">
            <i className="fa-solid fa-globe mr-1"></i> Հայ ▾
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-10 py-4">
        <a href="/" className="block">
          <img
            src="https://www.ucom.am/images/main_logo.svg"
            alt="Ucom"
            className="h-9"
          />
        </a>

        <nav className="flex gap-8">
          <a href="/forHome" className="font-medium text-black hover:text-green-500">
            Տան համար ▾
          </a>
          <a href="#" className="font-medium text-black hover:text-green-500">
            Շարժական կապ ▾
          </a>
          <a href="/rouming" className="font-medium text-black hover:text-green-500">
            Ռոումինգ
          </a>
          <a href="#" className="font-medium text-black hover:text-green-500">
            5G ցանց
            <span className="ml-1 rounded-md bg-green-500 px-1.5 py-0.5 text-[11px] text-white">
              նոր
            </span>
          </a>
          <a href="#" className="font-medium text-black hover:text-green-500">
            Uplay
            <span className="ml-1 rounded-md bg-green-500 px-1.5 py-0.5 text-[11px] text-white">
              նոր
            </span>
          </a>
        </nav>

        <div className="flex items-center gap-5">
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <span className="cursor-pointer text-lg">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>

          <button className="flex items-center gap-2 rounded-xl bg-green-100 px-4 py-2 font-semibold hover:bg-green-200">
            <i className="fa-solid fa-wallet"></i> Վճարել
          </button>
        </div>
      </div>
    </header>
  );
}
