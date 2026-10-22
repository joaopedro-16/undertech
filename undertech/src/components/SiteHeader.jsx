import { useState } from 'react'
import logo from '../assets/LOGO/logo-azul.png'
import './SiteHeader.css'

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Undertech — início" onClick={closeMenu}>
        <img className="brand-logo" src={logo} alt="Undertech Solutions" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#pcs" onClick={closeMenu}>PCs montados</a>
        <a href="#loja" onClick={closeMenu}>A loja</a>
        <a className="nav-cta" href="#contato" onClick={closeMenu}>
          Fale com um especialista <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
