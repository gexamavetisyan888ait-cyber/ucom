export default function InfoItem({ text }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f6c8]">
        ✔
      </span>
      <span>{text}</span>
    </div>
  );
}
