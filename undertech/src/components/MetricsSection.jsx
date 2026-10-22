import './MetricsSection.css'

function MetricsSection() {
  return (
    <section className="metrics" aria-label="Diferenciais Undertech">
      <div className="metrics-inner">
        <p><strong>100%</strong><span>testado antes de sair</span></p>
        <span className="metric-divider" />
        <p><strong>Do seu jeito</strong><span>cada build é única</span></p>
        <span className="metric-divider" />
        <p><strong>Suporte real</strong><span>gente que entende</span></p>
        <span className="metric-note">SEU GAME. SUAS REGRAS.</span>
      </div>
    </section>
  )
}

export default MetricsSection
