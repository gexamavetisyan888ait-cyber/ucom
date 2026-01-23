import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f8f8f8] px-[10%] py-10 text-[13px] text-[#333] font-sans">
      <div className="flex flex-wrap justify-between gap-5 border-b border-gray-300 pb-10">
        <div className="max-w-[250px] flex-1 rounded-xl bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
          <h4 className="mb-3 text-xs font-medium text-gray-500">
            Զանգերի սպասարկում 24/7
          </h4>

          <div className="my-2 flex items-center gap-2.5">
            <span>📞</span>
            <strong>011 444 444, 444</strong>
          </div>

          <p className="text-[11px] leading-snug text-gray-500">
            Ucom ծառայությունների պայմանների և սպասարկման վերաբերյալ կարող եք
            դիմել հետևյալ էլ․ հասցեով՝
          </p>

          <div className="my-2 flex items-center gap-2.5">
            <span>✉️</span>
            <a
              href="mailto:444@ucom.am"
              className="font-bold text-[#333] no-underline"
            >
              444@ucom.am
            </a>
          </div>

          <p className="text-[11px] leading-snug text-gray-500">
            Գլխամասային գրասենյակ ներկայացման ենթակա բոլոր հարցերով կարող եք դիմել
            հետևյալ էլ․ հասցեով՝
          </p>

          <div className="my-2 flex items-center gap-2.5">
            <span>✉️</span>
            <a
              href="mailto:info@ucom.am"
              className="font-bold text-[#333] no-underline"
            >
              info@ucom.am
            </a>
          </div>

          <div className="mt-2 flex items-center gap-2.5">
            <span>📍</span>
            <strong>Սպասարկման կենտրոններ</strong>
          </div>
        </div>

        <div className="min-w-[150px] flex-1">
          <h4 className="mb-4 text-xs font-medium text-gray-500">
            Ucom ընկերություն
          </h4>
          <ul className="space-y-2">
            {[
              "Ucom-ի մասին",
              "Ucom-ի ղեկավարները",
              "Կորպորատիվ կառավարում",
              "Նորությունների արխիվ",
              "Գնումներ",
              "Աշխատանք",
              "Հաշվետվություններ",
              "Գործարար էթիկա և համապատասխանություն",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-[#6fb327]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[150px] flex-1">
          <h4 className="mb-4 text-xs font-medium text-gray-500">Օգնություն</h4>
          <ul className="space-y-2">
            {[
              "Հետադարձ կապ",
              "Ucom սպասարկման կենտրոններ",
              "Օգտակար հեռախոսահամարներ",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-[#6fb327]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[150px] flex-1">
          <h4 className="mb-4 text-xs font-medium text-gray-500">
            Տեղեկատվություն
          </h4>
          <ul className="space-y-2">
            {[
              "Հայտարարություններ",
              "Անհրաժեշտ փաստաթղթեր",
              "Ընդհանուր դրույթներ և պայմաններ",
              "Անձնական տվյալների մշակման քաղաքականություն",
              "Ծածկույթ",
              "ISO 9001 Սերտիֆիկատ",
              "Պրոֆիլակտիկ աշխատանքներ",
              "Արխիվ",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer transition hover:text-[#6fb327]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-[200px] flex-1">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="rounded-lg bg-[#6fb327] px-3 py-2 text-lg font-bold text-white">
              U!
            </div>
            <div>
              <strong>Ucom հավելված</strong>
              <p className="text-xs text-gray-500">Android-ի և iOS-ի համար</p>
            </div>
          </div>

          <div className="space-y-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-[35px] cursor-pointer"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="h-[35px] cursor-pointer"
            />
          </div>

          <div className="mt-4 flex gap-4 text-lg text-gray-500">
            <i className="fab fa-facebook-f cursor-pointer"></i>
            <i className="fab fa-linkedin-in cursor-pointer"></i>
            <i className="fab fa-twitter cursor-pointer"></i>
            <i className="fab fa-instagram cursor-pointer"></i>
            <i className="fab fa-youtube cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 pt-5 text-xs text-gray-500 md:flex-row">
        <div>
          <span className="font-bold text-black">U!</span> © Հեղինակային իրավունք
          Ucom ՓԲԸ 2026. Բոլոր իրավունքները պաշտպանված են
        </div>
        <div>
          Developed by <strong className="text-black">STUDIOONE</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
