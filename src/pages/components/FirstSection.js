import React from 'react'
import * as firstStyle from "../styles/firstSection.module.scss"

const FirstSection = () => {
  const logtwo = require('../styles/asset/undraw_Investing_re_bov7.png')
  const logone = require('../styles/asset/undraw_Agreement_re_d4dv.png')
  const logthree = require('../styles/asset/undraw_wallet_aym5.png')
  return (
    <div className={firstStyle.section}>
      <div className={firstStyle.howtozone} >
        <div className={firstStyle.title}>How Its Works</div>
        <div className={firstStyle.card} >
          <div className={firstStyle.imgwrapper}>
            <img className={firstStyle.img} src={logone.default} alt="nothing" />
          </div>
          <h1>Partnership</h1>
          <p>Kurama is unique in the way that we do not issue loans – they are brought to the platform by our partner lending companies from around the world. Lending companies provide alternative financing to individuals and small businesses.</p>
        </div>
        <div className={firstStyle.card} >
          <div className={firstStyle.imgwrapper}>
            <img className={firstStyle.img} src={logtwo.default} alt="nothing" />
          </div>
          <h1>Investment</h1>
          <p>On Kurama, investing starts from € 10 per loan, or the equivalent in the other 10+ currencies we support. That means everyone can be an investor. And it’s really easy to create a diversified and automated portfolio to protect your investment.</p>
        </div>
        <div className={firstStyle.card} >
          <div className={firstStyle.imgwrapper}>
            <img className={firstStyle.img} src={logthree.default} alt="nothing" />
          </div>
          <h1>Payback</h1>
          <p>Since 2015, investors have earned 9.85% net return per year on average. Many investors choose to reinvest their returns so their money can keep working. Given enough time, earnings can grow exponentially thanks to the power of compound interest.</p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
