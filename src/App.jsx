import './App.css'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Model from './components/Model'
import Navbar from './components/Navbar'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

function App() {

  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks/>
    </main>
  )
}

export default App
