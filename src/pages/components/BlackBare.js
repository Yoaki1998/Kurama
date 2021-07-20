import React from 'react'
import * as blackStyle from "../styles/blackbare.module.scss"

const BlackBare = ({ handleClick }) => {
  return (
    <div className={blackStyle.blackzone} >
      <div className={blackStyle.container} >
        <div className={blackStyle.side} >Easy To Use.<br /> Even on Smartphone.</div>
        <button onClick={handleClick} className={blackStyle.bigbutton}> Get started </button>
        <div className={blackStyle.side} >No Fee For European <br /> Customers</div>
      </div>
    </div>
  )
}

export default BlackBare
