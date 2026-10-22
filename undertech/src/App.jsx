import './App.css'
import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import MetricsSection from './components/MetricsSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import BuildsSection from './components/BuildsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import LocationSection from './components/LocationSection.jsx'
import SuggestionsSection from './components/SuggestionsSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'

function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <BuildsSection />
        <ContactSection />
        <LocationSection />
        <SuggestionsSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
