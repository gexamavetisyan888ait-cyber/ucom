import React from "react";
import { useRealtimeCollection } from "../../hooks/useRealtimeCollection";

export default function InternetPackages() {
  const { data: packages, loading, error } =
    useRealtimeCollection("db/ForHomeDB");

  if (loading) return <p>Բեռնվում է...</p>;
  if (error) return <p>Սխալ՝ {error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-5 py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Տան ինտերնետը
      </h2>
      <p className="text-gray-500 mb-6 sm:mb-8">
        Հարմար ինտերնետ տունը համար
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex flex-col justify-between border rounded-2xl overflow-hidden shadow transition hover:shadow-lg"
          >
            <div className="bg-lime-500 p-4 text-white font-bold text-base sm:text-lg">
              {pkg.name}
            </div>

            <div className="p-5 sm:p-6 flex flex-col gap-3 text-sm sm:text-base">
              <p className="flex items-center gap-2 text-gray-700">
                {pkg.homeSpeed} տան ինտերնետ
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                {pkg.wifi}
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                {pkg.ftth}
              </p>
            </div>

            <div className="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-bold text-lg">{pkg.price}</span>
              <button className="w-full sm:w-auto bg-lime-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-lime-600 transition">
                Միանալ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}