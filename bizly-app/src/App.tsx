import { FeatureCards } from "./components/FeatureCards"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-2 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <FeatureCards />
        </main>
      </div>
    </div>
  )
}

export default App
