import React from 'react'
import * as mintStyle from "../styles/mintosZone.module.scss"

const MintosZone = () => {
  return (
    <div className={mintStyle.mintsection}>
      <div className={mintStyle.bigcardone}>
        <div className={mintStyle.textboxe}>
          <h1>Manage your risk</h1>
          <p>Your safety blanket. More than 99% of the loans come with a buyback obligation from the lending company.<br />
           Know what you’re getting into. The Kurama Risk Score can help you make informed decisions.</p>
        </div>
      </div>
      <div className={mintStyle.bigcardtwo}>
        <div className={mintStyle.textboxe}>
          <h1>Investing made easy</h1>
          <p>Put your money on autopilot. Just set the course with our automated algorithms and sit back.<br />
             For every income and portfolio. Earn proven returns, whether you invest € 10 or € 500 000.</p>
        </div>
      </div>
    </div >
  )
}

export default MintosZone
