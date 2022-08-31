import './App.css'
import Hero from './Container/Hero /Hero'
import Navbar from './Container/Navbar/Navbar'
import Features from './Container/Features/Features'
import Extensions from './Container/Extensions/Extensions'
import FAQ from './Container/FAQ/FAQ'
import Footer from './Container/Footer/Footer'

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Features/>
    <Extensions/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default App