export default function MobileIdCard() {
  return (
    <div className="flex items-center justify-center gap-[60px]">
      <img
        src="https://www.ucom.am/storage/files/mobile-id-web-12-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=86ec6583e4adb10b6857a9b93bbf0dc5"
        alt="Mobile ID"
        className="relative h-[300px] w-[520px] rounded-[18px] object-cover"
      />

      <div className="max-w-[420px]">
        <h1 className="mb-4 text-[32px] font-bold">Mobile ID</h1>

        <p className="mb-6 leading-relaxed text-[#555]">
          Thanks to the Mobile ID service, you can quickly and securely
          complete identification processes and sign documents
          electronically. The service is available to individuals with
          a valid ID card.
        </p>

        <button className="cursor-pointer rounded-xl bg-[#7CFF00] px-7 py-3.5 font-bold transition hover:opacity-90">
          Details
        </button>
      </div>
    </div>
  );
}

