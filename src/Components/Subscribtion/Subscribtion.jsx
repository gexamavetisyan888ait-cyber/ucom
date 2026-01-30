import StepCard from "./StepCard";
import InfoItem from "./InfoItem";

export default function Subscribtion() {
  return (
    <section className="bg-[#f6fbea] py-10 px-4 sm:px-6">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-10 text-center text-xl sm:text-2xl md:text-3xl font-bold">
          Դարձեք Ucom-ի բաժանորդ ձեր հեռախոսահամարով
        </h1>

        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <StepCard number="1" text="Լրացրեք դիմումի հայտը" />
          <StepCard
            number="2"
            text="1 աշխատանքային օրվա ընթացքում Ձեզ հետ կկապվի Ucom ցանցի ներկայացուցիչը"
          />
          <StepCard
            number="3"
            text="Ստացեք քարտը հեռախոսի մեջ և վայելեք ծառայությունը"
          />
        </div>

        <h2 className="mb-2 text-lg sm:text-xl font-semibold">
          Բջջային համարի տեղափոխում
        </h2>

        <p className="mb-5 max-w-[700px] text-sm sm:text-base text-gray-700">
          Ունեք այլ բջջային օպերատորի համար, բայց ցանկանում եք տեղափոխվել Ucom։
          Պահպանեք Ձեր գործող համարը՝ միանալով Ucom-ին։
        </p>

        <div className="mb-8 flex flex-col gap-3">
          <InfoItem text="Տեղափոխումը հնարավոր է անվճար" />
          <InfoItem text="Համարը տեղափոխվում է Ucom-ի ցանց" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="rounded-lg bg-[#7ad000] px-6 py-3 font-bold text-white transition hover:opacity-90">
            Սկսել
          </button>
          <button className="rounded-lg px-6 py-3 font-bold text-[#333] transition hover:text-[#7ad000]">
            Ավելին
          </button>
        </div>
      </div>
    </section>
  );
}
