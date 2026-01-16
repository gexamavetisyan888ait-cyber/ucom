import React from "react";
import InfoItem from './InfoItem'
import StepCard from './StepCard'
import './Subscribtion.css'

export default function Subscribtion() {
  return (
    <div className="page">
      <h1 className="title">Դարձեք Ucom-ի բաժանորդ ձեր հեռախոսահամարով</h1>

      <div className="steps">
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

      <h2 className="subtitle">Բջջային համարի տեղափոխում</h2>
      <p className="description">
        Ունեք այլ բջջային օպերատորի համար, բայց ցանկանում եք տեղափոխվել Ucom։
        Պահպանեք Ձեր գործող համարը՝ միանալով Ucom-ին։
      </p>

      <div className="info-list">
        <InfoItem text="Տեղափոխումը հնարավոր է անվճար" />
        <InfoItem text="Համարը տեղափոխվում է Ucom-ի ցանց" />
      </div>

      <div className="actions">
        <button className="primary">Սկսել</button>
        <button className="secondary">Ավելին</button>
      </div>
    </div>
  );
}
