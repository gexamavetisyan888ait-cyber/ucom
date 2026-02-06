
import Card from "./Card";
import {db} from '../../lib/db.js'

export default function CardSec() {
 
  return (
    <div className="w-full mx-auto mt-12 px-5">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Լավագույն առաջարկ
      </h1>

      <div
        className="
          grid gap-[70px] justify-items-center
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          mb-10
        "
      >
        {db.CardSecDB.map((el, i) => (
          <Card key={i} {...el} />
        ))}
      </div>
    </div>
  );
}
