import './LocationSection.css'

function LocationSection() {
  return (
    <section className="location" id="loja">
      <div className="section-wrap location-inner">
        <div>
          <div className="eyebrow">CHEGA MAIS</div>
          <h2>Endereço da<br /><span>sua próxima build.</span></h2>
          <p className="location-intro">Passe para conhecer a loja, conversar sobre seu projeto e ver as máquinas de perto.</p>
        </div>
        <div className="address-card">
          <span className="address-icon" aria-hidden="true">⌖</span>
          <div>
            <span className="address-label">NOSSO ENDEREÇO</span>
            <h3>Adicione aqui o endereço da loja</h3>
            <p>Rua, número — bairro<br />Cidade — UF, CEP</p>
            <span className="hours-label">HORÁRIO DE ATENDIMENTO</span>
            <p>Segunda a sexta, 9h às 18h<br />Sábado, 9h às 13h</p>
            <a href="mailto:contato@undertech.com.br?subject=Endere%C3%A7o%20e%20hor%C3%A1rio%20da%20loja">Consulte como chegar <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
