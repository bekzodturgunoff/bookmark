import './App.css'
import Features from './Container/Features/Features'
import Hero from './Container/Hero /Hero'
import Navbar from './Container/Navbar/Navbar'


function App() {

  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Features/>
    </div>
  )
}

export default App