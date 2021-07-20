import React from 'react'
import * as planStyle from "../styles/planzone.module.scss"

const PlanZone = () => {
  return (
    <div className={planStyle.choosezone}>
      <div className={planStyle.container}>
        <div className={planStyle.lowzone}>
          <div className={planStyle.text}>Ready.Set.Go</div>
          <p className={planStyle.subtext}>See why over 1 million members love us! </p>
          <input className={planStyle.input} placeholder="Email"></input>
          <button className={planStyle.button}  >Invest Now</button>
        </div>
      </div>
    </div>
  )
}

export default PlanZone
