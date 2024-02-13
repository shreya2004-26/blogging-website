import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
const App = () => {
  const element = document.getElementById("title");
  element.innerText = "Home | BlogWithShreya";
  return (
    <>
      <Header />
      <Hero />
      <Footer/>
    </>
  )
}

export default App