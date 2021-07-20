import React from 'react'
import * as firstStyle from "../styles/firstSection.module.scss"

const FirstSection = () => {
  let log = require('../styles/asset/undraw_Choose_re_7d5a.png')
  return (
    <div className={firstStyle.section}>
      <div className={firstStyle.howtozone} >
        <div className={firstStyle.title}>How Its Works</div>
        <div className={firstStyle.card} >
          <img className={firstStyle.img} src={log.default} alt="nothing" />
          <h1>Make it Official</h1>
          <p>Choose your plan, enter in your info, and get ready for the best in home goods, fashion, wellness, beauty and more – all picked for the season and delivered to your door 4x a year!</p>
        </div>
        <div className={firstStyle.card} >
          <img className={firstStyle.img} src={log.default} alt="nothing" />
          <h1>Make it Official</h1>
          <p>Choose your plan, enter in your info, and get ready for the best in home goods, fashion, wellness, beauty and more – all picked for the season and delivered to your door 4x a year!</p>
        </div>
        <div className={firstStyle.card} >
          <img className={firstStyle.img} src={log.default} alt="nothing" />
          <h1>Make it Official</h1>
          <p>Choose your plan, enter in your info, and get ready for the best in home goods, fashion, wellness, beauty and more – all picked for the season and delivered to your door 4x a year!</p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
