import  './MobileIdCard.css'
export default function MobileIdCard() {
  return (
    <div className="mobile-id-section">

          <img className='visual-card' src="https://www.ucom.am/storage/files/mobile-id-web-12-1.png-1232x_-quality(75)-webp(80)-o(png).webp?token=86ec6583e4adb10b6857a9b93bbf0dc5" alt="" />
       


      <div className="info">
        <h1>Mobile ID</h1>
        <p>
          Thanks to the Mobile ID service, you can quickly and securely
          complete identification processes and sign documents
          electronically. The service is available to individuals with
          a valid ID card.
        </p>

        <button>Details</button>
      </div>
    </div>
  );
}
