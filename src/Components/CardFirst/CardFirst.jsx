import React from 'react'
import './CardFirst.css'

export default function CardFirst() {

    let cards = [
        "https://www.ucom.am/storage/files/honorx7d-arm.png-650x_-quality(75)-webp(80)-o(png).webp?token=c0fa9d36ff4cddff30fddb48ec6559e1",
        "https://www.ucom.am/storage/files/apple-watch-eshop-mobile-arm.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=78d89c0a8131c257c8ad48f33f623538",
        "https://www.ucom.am/storage/files/ucoin-web-650x920-arm-1.png-650x_-quality(75)-webp(80)-o(png).webp?token=d7bd44ce8cd1aa89ccc41824e4fc10a5",
        "https://www.ucom.am/storage/files/airpods-eshop-mobile-arm.jpg-650x_-quality(75)-webp(80)-o(jpg).webp?token=126eee14aae30692c93b574b7f8c5824"
    ]

  return (
    <div className='yndhannurDiv'>
        {cards.map(el=>{
            return <img key={el} src={el} alt="" />
        })}
    </div>
  )
}
