export default function StepCard({ number, text }) {
  return (
    <div className="relative rounded-2xl bg-[#f9fdf0] p-5 sm:p-6 min-h-[140px]">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f6c8] font-bold">
        {number}
      </div>
      <p className="font-semibold text-sm sm:text-base leading-snug">
        {text}
      </p>
    </div>
  );
}
