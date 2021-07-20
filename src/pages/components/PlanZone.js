import React from 'react'
import * as planStyle from "../styles/planzone.module.scss"

const PlanZone = () => {
  return (
    <div className={planStyle.choosezone}>
      <div className={planStyle.container}>
        <div className={planStyle.title}>
          Choose a Plan
          <p>See why over 1 million members love us! </p>
        </div>
        <div className={planStyle.card}>
          <h1>KuramIA</h1>
        </div>
        <div className={planStyle.card}>
          <h1>Classic</h1>
        </div>
        <div className={planStyle.lowzone}>
          <div className={planStyle.text}>Ready.Set.Go</div>
          <input className={planStyle.input}></input>
          <button className={planStyle.button} placeholder="Email" >Invest Now</button>
        </div>
      </div>
    </div>
  )
}

export default PlanZone
