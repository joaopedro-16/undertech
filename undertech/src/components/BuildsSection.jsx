import './BuildsSection.css'

const pcs = [
  {
    name: 'Nebula RTX',
    description: 'Potência para jogar sem limites.',
    processor: 'Ryzen 7 7800X3D',
    graphics: 'GeForce RTX 4070 SUPER',
    memory: '32 GB DDR5',
    price: 'A partir de R$ 8.990',
    image:
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85',
    alt: 'PC gamer montado com iluminação RGB',
    label: 'MAIS PROCURADO',
  },
  {
    name: 'Pulse White',
    description: 'Design clean com performance de sobra.',
    processor: 'Ryzen 5 7600',
    graphics: 'GeForce RTX 4060',
    memory: '32 GB DDR5',
    price: 'A partir de R$ 6.490',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85',
    alt: 'Setup gamer com computador e iluminação colorida',
    label: 'VISUAL ÚNICO',
  },
  {
    name: 'Phantom X',
    description: 'Feito para quem quer jogar no máximo.',
    processor: 'Intel Core i7 14700K',
    graphics: 'GeForce RTX 4080 SUPER',
    memory: '64 GB DDR5',
    price: 'A partir de R$ 14.990',
    image:
      'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=900&q=85',
    alt: 'Computador gamer de alto desempenho em um setup',
    label: 'ALTA PERFORMANCE',
  },
]

function BuildsSection() {
  return (
    <section className="builds" id="pcs">
      <div className="section-wrap">
        <div className="section-heading builds-heading">
          <div>
            <div className="eyebrow">MÁQUINAS PRONTAS PARA O GAME</div>
            <h2>Escolha seu <span>próximo nível.</span></h2>
          </div>
          <p>Algumas builds para inspirar. Todas podem ser personalizadas para combinar com o seu jogo.</p>
        </div>
        <div className="build-grid">
          {pcs.map((pc) => (
            <article className="build-card" key={pc.name}>
              <div className="build-image">
                <img src={pc.image} alt={pc.alt} loading="lazy" />
                <span className="build-label">{pc.label}</span>
                <span className="build-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="build-details">
                <div className="build-title-row"><h3>{pc.name}</h3><span className="build-price">{pc.price}</span></div>
                <p className="build-description">{pc.description}</p>
                <div className="spec-list">
                  <span><b>CPU</b>{pc.processor}</span>
                  <span><b>GPU</b>{pc.graphics}</span>
                  <span><b>RAM</b>{pc.memory}</span>
                </div>
                <a className="build-cta" href="#contato">Quero saber mais <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <p className="builds-note">* Configurações e valores ilustrativos. Consulte disponibilidade e personalize sua build com a nossa equipe.</p>
      </div>
    </section>
  )
}

export default BuildsSection
