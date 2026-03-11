import './App.css'
import Features from './components/Features'

function App() {
  return (
    <>
      <header className="hero">
        <h1 className="hero-title">Pyplan</h1>
        <p className="hero-subtitle">
          The Python IDE for planning &amp; analytics
        </p>
        <a
          className="hero-cta"
          href="https://pyplan.com"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </header>
      <main>
        <Features />
      </main>
    </>
  )
}

export default App
