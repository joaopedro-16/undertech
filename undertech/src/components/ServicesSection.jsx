import './ServicesSection.css'

const services = [
  {
    number: '01',
    title: 'PC gamer sob medida',
    description:
      'Escolhemos cada componente com você para montar uma máquina do seu jeito e dentro do seu orçamento.',
    icon: '⌘',
  },
  {
    number: '02',
    title: 'Montagem profissional',
    description:
      'Montagem cuidadosa, cable management impecável e testes completos antes de o PC chegar até você.',
    icon: '⚙',
  },
  {
    number: '03',
    title: 'Upgrade e manutenção',
    description:
      'Mais FPS, menos calor e tudo funcionando como deveria. Cuidamos do seu setup em todas as fases.',
    icon: '↗',
  },
]

function ServicesSection() {
  return (
    <section className="services section-wrap" id="servicos">
      <div className="section-heading">
        <div>
          <div className="eyebrow">O QUE A GENTE FAZ</div>
          <h2>Mais que peças.<br /><span>Uma experiência completa.</span></h2>
        </div>
        <p>Do primeiro “qual placa de vídeo eu compro?” ao primeiro boot. Estamos com você em cada etapa.</p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top"><span>{service.number} / 03</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#contato" aria-label={`Saiba mais sobre ${service.title}`}>Saiba mais <span aria-hidden="true">↗</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
