import React, { Fragment } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import BlackBare from "./components/BlackBare"
import './styles/index.scss'

const index = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <FirstSection />
      <BlackBare />
      <Footer />
    </Fragment>
  )
}

export default index
