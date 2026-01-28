import React from "react";
import Card from "./PromoCard"

export default function RoamingBundlesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          title="uTravel ինտերնետ փաթեթ"
          description="Ճանապարհն ուր էլ որ տանի, Ucom-ի հետ միշտ կապի մեջ եք։ Վրաստան, ԱՄԷ, Եգիպտոս, Իտալիա, Իսպանիա, Ավստրիա և մի շարք հայտնի ուղղություններ մեկնելիս ակտիվացրեք uTravel մատչելի ռոումինգ ինտերնետ փաթեթներից մեկը։"
          image="https://www.ucom.am/storage/files/banner-5-2-1-580x_-quality(75)-webp(80).png?token=27376e09d2706bb00a6d00997ae8047b"
        />

        <Card
          title="Ինտերնետ ռոումինգում փաթեթներ"
          description="Եթե ցանկանում եք անընդմեջ կիսվել Ձեր հանգստի գեղեցիկ դրվագներով, ակտիվացրե՛ք Ինտերնետ ռոումինգում փաթեթներից որևէ մեկը։"
          image="https://www.ucom.am/storage/files/banner-3-2-2-580x_-quality(75)-webp(80).png?token=31bbab9a07159152e599a281440c2fec"
        />

        <div className="md:col-span-2">
          <Card
            title="Չաթ ռոումինգում"
            description="Եգիպտոս, Վրաստան, Հունաստան, ԱՄԷ, Կիպրոս, Իտալիա, Իսպանիա կամ նշված այլ ծովափնյա երկիր մեկնելիս մնացե՛ք կապի մեջ։"
            image="https://www.ucom.am/storage/files/banner-4-1-1-580x_-quality(75)-webp(80).png?token=c1510d4273fea2433a3b229bb5acc5ba"
          />
        </div>
      </div>
    </section>
  );
}
