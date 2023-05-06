import React from 'react'
import "./App.css";
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      <Portfolio/>
      {/* <Testimonials/> */}
      <Contact/>
    </main>
    </>
  )
}

export default App