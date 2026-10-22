import './SiteFooter.css'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-wrap">
        <a className="brand" href="#inicio">
          <span className="brand-mark" aria-hidden="true">U</span>
          <span>under<span className="brand-accent">tech</span></span>
        </a>
        <p>Feito por quem joga.<br />Pensado para o seu próximo nível.</p>
        <a className="back-top" href="#inicio">VOLTAR AO TOPO <span aria-hidden="true">↑</span></a>
      </div>
      <div className="footer-bottom section-wrap"><span>© {currentYear} UNDERTECH. TODOS OS DIREITOS RESERVADOS.</span><span>PERFORMANCE QUE CONECTA.</span></div>
    </footer>
  )
}

export default SiteFooter
