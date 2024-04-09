import React, { useContext } from "react"
import Layout from "../components/Layout"
import Preloader from "../components/Preloader"
import Header from "../components/Header"
import Banner from "../components/Banner"
import Footer from "../components/Footer"
import BlogHome from "../components/BlogHome"
import CTAThree from "../components/CTAThree"
import Contact from "../components/Contact"
import Services from "../components/Services"
import CTAOne from "../components/CTAOne"
import FunFact from "../components/FunFact"
import CTATwo from "../components/CTATwo"
import Team from "../components/Team"
import Pricing from "../components/Pricing"
import VideoOne from "../components/VideoOne"
import AppScreen from "../components/AppScreen"
import FAQ from "../components/FAQ"
import Clients from "../components/Clients"
import Testimonials from "../components/Testimonials"
import MenuContextProvider from "../context/MenuContext"
import Thriving from "../components/Thriving"
import Rewards from "../components/Rewards"
import Segmented from "../components/Segmented"
import AboutUs from "../components/AboutUs"
import Career from "../components/Career"

const HomePage = () => {
  return (
    <MenuContextProvider>
      <Preloader />

      <Layout pageTitle="Money CEO">
        <Header
          btnClass="main-nav__btn"
          extraClassName="site-header-one__fixed-top"
        />
        <Banner />
        <CTAOne />
        <Thriving />
        <Rewards />
        <Segmented />
        <AboutUs />
        <Career />
        {/* <Services /> */}
        {/* <FunFact /> */}
        {/* <CTATwo /> */}

        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        {/* <Team /> */}
        {/* <VideoOne /> */}
        {/* <AppScreen /> */}
        {/* <FAQ /> */}
        {/* <BlogHome /> */}
        <Contact />
        {/* <CTAThree /> */}
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default HomePage
