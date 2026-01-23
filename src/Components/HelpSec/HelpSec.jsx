import React from "react";

const ContactCards = () => {
  const data = [
    {
      id: 1,
      text: "Ներբեռնելով",
      linkText: "Ucom հավելվածը",
      icon: <i class="fa-solid fa-mobile-screen-button"></i>,
    },
    {
      id: 2,
      text: "Օգտվելով կայքի առցանց օգնության ծառայությունից",
      linkText: "",
      icon: <i class="fa-regular fa-comment-dots"></i>,
    },
    {
      id: 3,
      text: "Գրելով մեր",
      linkText: "Facebook կամ Instagram էջերին",
      icon: <i class="fa-regular fa-comment-dots"></i>,
    },
    {
      id: 4,
      text: "Ուղարկելով էլեկտրոնային նամակ՝ 444@ucom.am հասցեին Ucom ծառայությունների պայմանների և սպասարկման վերաբերյալ, ",
      linkText: "info@ucom.am հասցեին գլխամասային գրասենյակ ներկայացման ենթակա բոլոր հարցերով",
      icon: <i class="fa-regular fa-comment-dots"></i>,
    },
    {
      id: 5,
 
      linkText: "Զանգահարելով 444՝ Ձեր Ucom բջջային համարից կամ 011 444 444՝ ցանկացած այլ համարից",
      icon:<i class="fa-solid fa-headphones"></i>,
    },
    {
      id: 6,
      text: "Գրելով մեր",
      linkText: "Այցելելով Ucom-ի սպասարկման և վաճառքի ցանկացած կենտրոն",
      icon:<i class="fa-solid fa-location-dot"></i>,
    },
    {
      id: 7,
      text: "Գլխամասային գրասենյակ",
      linkText: "<<Յուքոմ>> ՓԲԸ ՀՀ, Երևան 0069,Դավիթ Անհաղթի 8/4 Հեռ.`    +374 11 400 400Ֆաքս` +374 11 400 401 էլ. փոստ` info@ucom.am ",
      icon:<i class="fa-solid fa-house"></i>
    },
    {
      id: 8,
      linkText: "Անհրաժեշտ փաստաթղթեր",
      icon:<i class="fa-solid fa-clipboard-list"></i>,
    },
    {
      id: 9,

      linkText: "Օգտակար համարներ",
      icon:<i class="fa-solid fa-mobile-button"></i>
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-10 bg-gray-50 font-sans">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-start p-8 w-full max-w-[350px] bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 min-h-[180px]"
        >
          {item.icon}
          <p className="text-[#444] text-[17px] leading-snug font-normal">
            {item.text}{" "}
            {item.linkText && (
              <span className="text-[#8CC63F] font-semibold cursor-pointer hover:underline">
                {item.linkText}
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactCards;
