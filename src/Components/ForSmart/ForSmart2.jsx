import PackageCard from "./ForSmart";
import {db} from '../../lib/db'

const Packages = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        Սակագնային փաթեթներ
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {db.ForSmartDB.map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
