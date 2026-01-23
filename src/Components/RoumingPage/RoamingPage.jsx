import React from "react";
import PromoCard from "./PromoCard";

const RoamingPage = () => {
  return (
    <div className="roaming-wrapper" >
      <section className="promo-section1">
        <div className="promo-grid1">
          <PromoCard
            title="uTravel ինտերնետ փաթեթ"
            descripton = "Ճանապարհն ուր էլ որ տանի, Ucom-ի հետ միշտ կապի մեջ եք։ Վրաստան, ԱՄԷ, Եգիպտոս, Իտալիա, Իսպանիա, Ավստրիա և մի շարք հայտնի ուղղություններ մեկնելիս ակտիվացրեք uTravel մատչելի ռոումինգ ինտերնետ փաթեթներից մեկը։"
            img="https://www.ucom.am/storage/files/banner-5-2-1-290x_-quality(75)-webp(80).png?token=826d56d1aa478de7ce5141d4095573df"
          />
          <PromoCard
            title="Ինտերնետ ռոումինգում"
              descripton = "Եթե ցանկանում եք անընդմեջ կիսվել Ձեր հանգստի գեղեցիկ դրվագներով, ակտիվացրե՛ք Ինտերնետ ռոումինգում փաթեթներից որևէ մեկը։"
            img="https://www.ucom.am/storage/files/banner-3-2-2-290x_-quality(75)-webp(80).png?token=ed379152fa2e7a1ac7a08ed7b4f38287"
          />
          <PromoCard
            title="Չաթ ռոումինգում"
            descripton="Եգիպտոս, Վրաստան, Հունաստան, ԱՄԷ, Կիպրոս, Իտալիա, Իսպանիա կամ նշված այլ ծովափնյա երկիր մեկնելիս մնացե՛ք կապի մեջ։"
            img="https://www.ucom.am/storage/files/banner-4-1-1-290x_-quality(75)-webp(80).png?token=f581f79c09b3c3fa46dfbf537b2386ce"
          />
        </div>
      </section>
    </div>
  );
};

export default RoamingPage;
