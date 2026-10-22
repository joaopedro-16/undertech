import './ContactSection.css'
import circuitBanner from '../assets/campaigns/undertech-circuit-banner.jpeg'

function ContactSection() {
  return (
    <section className="contact section-wrap" id="contato">
      <img className="contact-art" src={circuitBanner} alt="" aria-hidden="true" />
      <div className="contact-orb" aria-hidden="true" />
      <div className="contact-content">
        <div className="eyebrow">BORA MONTAR O SEU?</div>
        <h2>Seu próximo game<br />começa com <span>uma conversa.</span></h2>
        <p>Conta pra gente o que você joga e quanto quer investir. A gente ajuda a encontrar a build perfeita para você.</p>
        <a className="button button-primary" href="mailto:contato@undertech.com.br?subject=Quero%20montar%20meu%20PC%20gamer">
          Fale com a Undertech <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}

export default ContactSection
