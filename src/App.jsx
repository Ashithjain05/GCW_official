import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'
import Ticker from './components/Ticker'
import CompressorList from './components/CompressorList'
import CompressorGallery from './components/CompressorGallery'
import ServiceDetailList from './components/ServiceDetailList'
import './App.css'

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [view, setView] = React.useState('home');

  return (
    <div className="App selection:bg-accent selection:text-white">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setView={setView} />
      
      <main>
        {view === 'home' ? (
          <>
            <section id="home" className="p-0 m-0">
              <Hero />
              <Ticker />
            </section>
            
            <About />
            
            <Services searchQuery={searchQuery} />
            
            <WhyChooseUs />
            
            <Products searchQuery={searchQuery} />
            
            <Testimonials />
            
            <Booking />
            
            <Contact />
          </>
        ) : view === 'compressor-gallery' ? (
          <CompressorGallery setView={setView} />
        ) : view === 'service-list' ? (
          <ServiceDetailList setView={setView} />
        ) : (
          <CompressorList setView={setView} />
        )}
      </main>

      <Footer />
      <WhatsApp />
      
      <style jsx>{`
        .App {
          max-width: 100vw;
          overflow-x: hidden;
        }
        main section {
          padding: 0;
        }
      `}</style>
    </div>
  )
}

export default App
