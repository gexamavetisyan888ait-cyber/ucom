export default function StepCard({ number, text }) {
  return (
    <div className="relative flex-1 rounded-2xl bg-[#f9fdf0] p-6 min-h-[150px]">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#e8f6c8] font-bold">
        {number}
      </div>
      <p className="font-semibold">{text}</p>
    </div>
  );
}
