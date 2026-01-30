import PackageCard from "./ForSmart";

const packages = [
  {
    title: "Level Up+ 2500",
    price: "2 500",
    features: [
      "20 ԳԲ ինտերնետ",
      "1000 րոպե",
      "300 SMS",
      "35 հեռուստաալիք",
      "Uplay հավելված",
    ],
  },
  {
    title: "Level Up+ 3000",
    price: "3 000",
    highlighted: true,
    features: [
      "30 ԳԲ ինտերնետ",
      "1500 րոպե",
      "300 SMS",
      "35 հեռուստաալիք",
      "Uplay հավելված",
    ],
  },
  {
    title: "Level Up+ 4000",
    price: "4 000",
    features: [
      "Անսահմանափակ ինտերնետ",
      "500 րոպե",
      "500 SMS",
      "35 հեռուստաալիք",
    ],
  },
  {
    title: "Level Up+ 5000",
    price: "5 000",
    features: [
      "Անսահմանափակ ինտերնետ",
      "3000 րոպե",
      "1000 SMS",
      "200 ՄԲ ռոումինգ",
      "35 հեռուստաալիք",
    ],
  },
];

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Սակագնային փաթեթներ</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
