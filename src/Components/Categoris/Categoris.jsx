import PromoCard from "./Card";

export default function PromoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 bg-[#f7f8f7]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PromoCard
          title="Level Up Ուսանողական"
          description="Ստացիր Level Up ուսանողական փաթեթ՝ ինտերնետ, զանգեր և հավելյալ առավելություններ։"
          buttonText="Մանրամասներ"
          image="https://www.ucom.am/storage/files/level-up-1-1-580x_-quality(75)-webp(80).png?token=471e42e402cafd9669a447b0e85fbc0a"
        />

        <PromoCard
          title="Երկրորդ 3 ԳԲ փաթեթ"
          description="Level Up-ի և Unity-ի համատեղ 3 ԳԲ ինտերնետ փաթեթ։"
          buttonText="Մանրամասներ"
          image="https://www.ucom.am/storage/files/patet-1-1-580x_-quality(75)-webp(80).png?token=3c7819a22b000f30c69fa5f8d2a4a757"
          reverse
        />

        <PromoCard
          title="uWelcome"
          description="Նոր բաժանորդների համար՝ հատուկ առաջարկներ մինչև 2500 դրամ։"
          buttonText="Ավելին"
          image="https://www.ucom.am/storage/files/uwelcome-1-1-580x_-quality(75)-webp(80).png?token=efac7e2848505a842a26ebfc8c513245"
        />

        <PromoCard
          title="uՊատրաստ"
          description="Անսահման զանգեր և արագ ինտերնետ՝ առավել հարմար պայմաններով։"
          buttonText="Ավելին"
          image="https://www.ucom.am/storage/files/uparz-1-1-580x_-quality(75)-webp(80).png?token=883b39d5e57b98125cd28a0286668665"
          reverse
        />

        <PromoCard
          title="Ինտերնետ փաթեթներ բոլորի համար"
          description="Ընտրիր քեզ հարմար ինտերնետ փաթեթը և օգտվիր ամեն օր։"
          buttonText="Մանրամասներ"
          image="https://www.ucom.am/storage/files/internet-1-1-580x_-quality(75)-webp(80).png?token=addee0ef68a802e43723ad70be20a109"
        />
      </div>
    </section>
  );
}
