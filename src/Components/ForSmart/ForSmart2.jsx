import React from "react";
import PackageCard from "./ForSmart";
import { useFirestoreCollection } from "../../hooks/useFirestoreCollection";

const Packages = () => {
  const { data: packages, loading, error } = useFirestoreCollection("ForSmartDB");

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading packages...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (!packages.length) {
    return <div className="text-center py-10 text-gray-500">No packages available</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Սակագնային փաթեթներ</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard key={pkg.id || index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;