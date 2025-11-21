import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Modpacks from './components/Modpacks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Modpacks />
      <Footer />
    </div>
  )
}

export default App
