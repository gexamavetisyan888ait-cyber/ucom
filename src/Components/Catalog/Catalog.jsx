import InfoCard from "./Card";

export default function Catalog() {
  return (
    <div
      className="
        flex flex-col items-center gap-6
        p-5 sm:p-10 bg-white font-sans
        md:flex-row md:justify-center
      "
    >
      <InfoCard
        title="For the family"
        subtitle="Home Internet, Mobile Services and TV"
        image="https://www.ucom.am/storage/files/unity5000-uplay-335x_-quality(75)-webp(80).png?token=06e2232b1afd4d5a58378de3752dd18e"
        imagePosition="left"
      />

      <InfoCard
        title="For individuals"
        subtitle="Tariff plans (Internet, calls, and SMS)"
        image="https://www.ucom.am/storage/files/anhatneri-hamar-335x_-quality(75)-webp(80).png?token=a7c06cc390ea15ea36bc04f8eea8f0c0"
        imagePosition="right"
      />
    </div>
  );
}
