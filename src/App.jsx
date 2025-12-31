import { Suspense } from "react"
import ThemeContextProvider from "./context/ThemeContextProvider"

import Navbar from "./layouts/Navbar"
import Footer from "./layouts/Footer"

import Hero from "./pages/Hero"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <ThemeContextProvider>
      <Suspense fallback={<div className="p-40">Loading...</div>}>
        <Navbar />

        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />

        <Footer />
      </Suspense>
    </ThemeContextProvider>
  )
}

export default App
