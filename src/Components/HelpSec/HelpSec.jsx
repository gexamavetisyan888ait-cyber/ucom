import React from "react";

const ContactCards = () => {
  const data = [
    {
      id: 1,
      text: "Ներբեռնելով",
      linkText: "Ucom հավելվածը",
      icon: <i className="fa-solid fa-mobile-screen-button text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 2,
      text: "Օգտվելով կայքի առցանց օգնության ծառայությունից",
      linkText: "",
      icon: <i className="fa-regular fa-comment-dots text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 3,
      text: "Գրելով մեր",
      linkText: "Facebook կամ Instagram էջերին",
      icon: <i className="fa-regular fa-comment-dots text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 4,
      text: "Ուղարկելով էլեկտրոնային նամակ՝ 444@ucom.am հասցեին Ucom ծառայությունների պայմանների և սպասարկման վերաբերյալ, ",
      linkText: "info@ucom.am հասցեին գլխամասային գրասենյակ ներկայացման ենթակա բոլոր հարցերով",
      icon: <i className="fa-regular fa-comment-dots text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 5,
      linkText: "Զանգահարելով 444՝ Ձեր Ucom բջջային համարից կամ 011 444 444՝ ցանկացած այլ համարից",
      icon: <i className="fa-solid fa-headphones text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 6,
      text: "Գրելով մեր",
      linkText: "Այցելելով Ucom-ի սպասարկման և վաճառքի ցանկացած կենտրոն",
      icon: <i className="fa-solid fa-location-dot text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 7,
      text: "Գլխամասային գրասենյակ",
      linkText: "<<Յուքոմ>> ՓԲԸ ՀՀ, Երևան 0069,Դավիթ Անհաղթի 8/4 Հեռ.` +374 11 400 400 Ֆաքս` +374 11 400 401 էլ. փոստ` info@ucom.am ",
      icon: <i className="fa-solid fa-house text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 8,
      linkText: "Անհրաժեշտ փաստաթղթեր",
      icon: <i className="fa-solid fa-clipboard-list text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
    {
      id: 9,
      linkText: "Օգտակար համարներ",
      icon: <i className="fa-solid fa-mobile-button text-2xl sm:text-3xl text-lime-500 mb-2"></i>,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 bg-gray-50 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start p-6 sm:p-8 w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]"
          >
            {item.icon}
            <p className="text-gray-800 text-sm sm:text-base leading-snug font-normal mt-2">
              {item.text && `${item.text} `}
              {item.linkText && (
                <span className="text-lime-500 font-semibold cursor-pointer hover:underline">
                  {item.linkText}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
