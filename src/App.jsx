import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Experience from './components/experience/experience'
import About from './components/about/About'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
  return (
      <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer /> 
      </>
  )
}

export default App