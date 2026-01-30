export default function InfoItem({ text }) {
  return (
    <div className="flex items-start gap-3 text-sm sm:text-base">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f6c8] text-sm">
        ✔
      </span>
      <span>{text}</span>
    </div>
  );
}
