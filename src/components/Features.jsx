import './Features.css'

const features = [
  {
    icon: '📊',
    title: 'Planning & Analytics',
    description:
      'Build powerful planning and analytics models with an intuitive node-based interface.',
  },
  {
    icon: '🐍',
    title: 'Python-Powered',
    description:
      'Leverage the full power of Python and its rich ecosystem of data science libraries.',
  },
  {
    icon: '🤝',
    title: 'Collaborative',
    description:
      'Work together in real time with your team, sharing models and insights seamlessly.',
  },
  {
    icon: '☁️',
    title: 'Cloud Ready',
    description:
      'Deploy and run your models in the cloud or on-premises to suit your needs.',
  },
]

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Why Pyplan?</h2>
      <p className="features-subtitle">
        Pyplan is an IDE for creating planning and analytics applications using Python.
      </p>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h3 className="feature-name">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
