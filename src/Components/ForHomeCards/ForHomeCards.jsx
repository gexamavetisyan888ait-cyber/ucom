import React from "react";

const packages = [
  {
    name: "uNet 7000",
    homeSpeed: "150 Մբ/վ",
    wifi: "Wi-Fi սարք",
    ftth: "FTTH տեխնոլոգիա",
    price: "7 000 ֏",
  },
  {
    name: "uNet 9500",
    homeSpeed: "250 Մբ/վ",
    wifi: "Super Wi-Fi սարք",
    ftth: "FTTH տեխնոլոգիա",
    price: "9 500 ֏",
  },
  {
    name: "uNet 5000 မարքեթինգ",
    homeSpeed: "100 Մբ/վ",
    wifi: "Wi-Fi սարք",
    ftth: "FTTH տեխնոլոգիա",
    price: "5 000 ֏",
  },
];

export default function InternetPackages() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12">
      <h2 className="text-3xl font-bold mb-2">Տան ինտերնետը</h2>
      <p className="text-gray-500 mb-8">Հարմար ինտերնետ տունը համար</p>

      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="bg-lime-500 p-4 text-white font-bold text-lg">
              {pkg.name}
            </div>

            <div className="p-6 flex flex-col gap-3">
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-house text-lime-500"></i> {pkg.homeSpeed} տան ինտերնետ
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-wifi text-lime-500"></i> {pkg.wifi}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <i className="fa-solid fa-globe text-lime-500"></i> {pkg.ftth}
              </p>
            </div>

            <div className="p-4 border-t flex items-center justify-between">
              <span className="font-bold text-lg">{pkg.price}</span>
              <button className="bg-lime-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-600 transition">
                Միանալ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
