
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'


function App() {


  return (
    <div className="font-sans bg-red">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
