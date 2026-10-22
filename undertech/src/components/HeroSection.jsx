import { useEffect, useState } from 'react'
import './HeroSection.css'
import cyberpunkArt from '../assets/campaigns/promo-cyberpunk.jpeg'
import neonArt from '../assets/campaigns/promo-neon.jpeg'
import gamerArt from '../assets/campaigns/promo-gamer.jpeg'

const campaignArts = [
  { image: cyberpunkArt, alt: 'Arte Undertech: notebook gamer com iluminação roxa e azul' },
  { image: neonArt, alt: 'Arte Undertech: notebook gamer com iluminação neon' },
  { image: gamerArt, alt: 'Arte Undertech: setup gamer em uma campanha roxa e azul' },
]

function HeroSection() {
  const [activeArt, setActiveArt] = useState(0)
  const currentArt = campaignArts[activeArt]

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveArt((index) => (index + 1) % campaignArts.length)
    }, 3000)

    return () => window.clearInterval(carouselTimer)
  }, [])

  function showPreviousArt() {
    setActiveArt((index) => (index - 1 + campaignArts.length) % campaignArts.length)
  }

  function showNextArt() {
    setActiveArt((index) => (index + 1) % campaignArts.length)
  }

  return (
    <section className="hero section-wrap" id="inicio">
      <div className="hero-copy">
        <h1>
          <span className="hero-title-line">JOGUE.</span>
          <span className="hero-title-line hero-title-accent">EVOLUA.</span>
          <span className="hero-title-line">DOMINE<span className="hero-title-period">.</span></span>
        </h1>
        <p className="hero-description">
          Seu próximo nível começa com um setup feito para você.
          PCs gamers personalizados, montados por quem também joga.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#pcs">
            ENCONTRE SEU PRÓXIMO PC <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#servicos">CONHEÇA NOSSOS SERVIÇOS <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-proof">
          <div className="avatar-stack" aria-hidden="true">
            <span>G</span><span>+</span><span>U</span>
          </div>
          <p><strong>Feito por quem joga.</strong><br />Montagem cuidadosa, suporte de verdade.</p>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame">
          <img key={currentArt.image} src={currentArt.image} alt={currentArt.alt} />
          <span className="hero-image-glow" aria-hidden="true" />
        </div>
        <div className="hero-carousel" aria-label="Artes da campanha">
          <button type="button" aria-label="Arte anterior" onClick={showPreviousArt}>←</button>
          <div className="hero-carousel-dots">
            {campaignArts.map((art, index) => (
              <button
                className={activeArt === index ? 'is-active' : ''}
                type="button"
                aria-label={`Exibir arte ${index + 1}`}
                aria-pressed={activeArt === index}
                key={art.image}
                onClick={() => setActiveArt(index)}
              />
            ))}
          </div>
          <span className="hero-carousel-index">0{activeArt + 1} <span>/</span> 0{campaignArts.length}</span>
          <button type="button" aria-label="Próxima arte" onClick={showNextArt}>→</button>
        </div>
      </div>
      <a className="scroll-cue" href="#servicos"><span /> ROLE PARA EXPLORAR</a>
    </section>
  )
}

export default HeroSection
