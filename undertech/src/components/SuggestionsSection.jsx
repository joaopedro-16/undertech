import './SuggestionsSection.css'

const suggestions = [
  ['01', 'Monte seu PC', 'Um configurador interativo para escolher peças e acompanhar o preço em tempo real.'],
  ['02', 'Loja online', 'Catálogo completo de componentes, periféricos e acessórios com filtros e busca.'],
  ['03', 'Acompanhe seu pedido', 'Uma área do cliente para consultar status, garantia e histórico de compras.'],
]

function SuggestionsSection() {
  return (
    <section className="suggestions section-wrap">
      <div className="section-heading">
        <div>
          <div className="eyebrow">IDEIAS PARA O PRÓXIMO LEVEL</div>
          <h2>O que mais esse site<br /><span>pode ter?</span></h2>
        </div>
        <p>Esta é só a landing page inicial. Aqui vão algumas ideias para transformar a Undertech em uma experiência completa.</p>
      </div>
      <div className="suggestion-grid">
        {suggestions.map(([number, title, description]) => (
          <article className="suggestion-card" key={number}>
            <span>{number}</span><h3>{title}</h3><p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SuggestionsSection
