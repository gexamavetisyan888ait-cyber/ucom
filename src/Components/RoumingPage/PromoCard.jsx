// import React from "react";

// export default function PromoCard(){
//   return (
//     <div className="mt-[50px] bg-white font-sans text-[#333]">
//       <section className="px-[10%] pb-[60px]">
//         <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
//           <PromoCard
//             title="uTravel ինտերնետ փաթեթ"
//             descripton="Ճանապարհն ուր էլ որ տանի, Ucom-ի հետ միշտ կապի մեջ եք։ Վրաստան, ԱՄԷ, Եգիպտոս, Իտալիա, Իսպանիա, Ավստրիա և մի շարք հայտնի ուղղություններ մեկնելիս ակտիվացրեք uTravel մատչելի ռոումինգ ինտերնետ փաթեթներից մեկը։"
//             img="https://www.ucom.am/storage/files/banner-5-2-1-290x_-quality(75)-webp(80).png?token=826d56d1aa478de7ce5141d4095573df"
//           />

//           <PromoCard
//             title="Ինտերնետ ռոումինգում"
//             descripton="Եթե ցանկանում եք անընդմեջ կիսվել Ձեր հանգստի գեղեցիկ դրվագներով, ակտիվացրե՛ք Ինտերնետ ռոումինգում փաթեթներից որևէ մեկը։"
//             img="https://www.ucom.am/storage/files/banner-3-2-2-290x_-quality(75)-webp(80).png?token=ed379152fa2e7a1ac7a08ed7b4f38287"
//           />

//           <PromoCard
//             title="Չաթ ռոումինգում"
//             descripton="Եգիպտոս, Վրաստան, Հունաստան, ԱՄԷ, Կիպրոս, Իտալիա, Իսպանիա կամ նշված այլ ծովափնյա երկիր մեկնելիս մնացե՛ք կապի մեջ։"
//             img="https://www.ucom.am/storage/files/banner-4-1-1-290x_-quality(75)-webp(80).png?token=f581f79c09b3c3fa46dfbf537b2386ce"
//           />
//         </div>
//       </section>
//     </div>
//   );
// };


const Card = ({ title, description, image, align = "right" }) => (
  <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
    <div className="max-w-md">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button className="border border-lime-500 text-lime-600 px-6 py-2 rounded-lg font-medium hover:bg-lime-50 transition">
       Մանրամասն
      </button>
    </div>
    <div className={`flex-shrink-0 ${align === "left" ? "order-first md:order-first" : ""}`}>
      <img src={image} alt={title} className="w-56 md:w-64" />
    </div>
  </div>
);

export default Card