export default function PyplanHomepage() {
  const palette = {
    blue: "#2176C2",
    blueSoft: "#D9E8F5",
    teal: "#4F676B",
    yellow: "#E8D63A",
    yellowSoft: "#F7F1BF",
    ink: "#0F172A",
  };
  const heroPills = [
    "Supply Chain Planning",
    "Financial Planning",
    "Spreadsheet Replacement",
  ];

  const capabilityCards = [
    {
      title: "Plan with business logic",
      text: "Move beyond spreadsheet-heavy processes with a model that captures how operational and financial drivers interact across the business.",
    },
    {
      title: "Simulate economic impact",
      text: "Evaluate the downstream effect of decisions on inventory, production, service levels, margins, cash flow, and profitability before committing to a plan.",
    },
    {
      title: "Power AI with Python",
      text: "Use Python as the modeling language behind your planning processes, giving LLMs a flexible and explainable calculation layer.",
    },
  ];

  const marketSections = [
    {
      title: "Supply Chain Planning",
      text: "Support demand planning, inventory management, material requirements planning, and production scheduling with a transparent model of operational reality.",
    },
    {
      title: "Financial Planning",
      text: "Build driver-based planning tools that connect commercial, operational, and financial assumptions into one economic view of the business.",
    },
  ];

  const differentiators = [
    {
      title: "Economic Decision Engine",
      text: "At the core of Pyplan is a model that captures the business logic of the company and computes the physical and economic impact of every scenario.",
    },
    {
      title: "Python-native",
      text: "Pyplan uses Python as its modeling language, enabling expressive logic, advanced calculations, and natural compatibility with AI systems.",
    },
    {
      title: "Transparent by design",
      text: "Influence diagrams make every variable, dependency, and calculation visible, so complex decision models remain explainable and maintainable.",
    },
    {
      title: "Built for AI-enabled tools",
      text: "LLMs can interpret the question. Pyplan can perform the calculation. Together they enable a new generation of intelligent decision support applications.",
    },
  ];

  const proofPoints = [
    "Connect data, business rules, and calculations in one model",
    "Support both operational and financial planning use cases",
    "Create AI-enabled decision support tools on top of Python logic",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-semibold text-white"
              style={{ backgroundColor: palette.blue }}
            >
              P
            </div>
            <span className="text-lg font-semibold tracking-tight" style={{ color: palette.teal }}>
              Pyplan
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#markets" className="hover:text-slate-950">Solutions</a>
            <a href="#engine" className="hover:text-slate-950">Economic Decision Engine</a>
            <a href="#ai" className="hover:text-slate-950">AI</a>
            <a href="#why-pyplan" className="hover:text-slate-950">Why Pyplan</a>
          </nav>
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:border-slate-950">
            Book a demo
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200" style={{ background: `radial-gradient(circle at top left, ${palette.yellowSoft}, transparent 28%), radial-gradient(circle at top right, ${palette.blueSoft}, transparent 32%), linear-gradient(to bottom, white, white)` }}>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  {heroPills.map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border bg-white px-4 py-1.5 text-sm shadow-sm" style={{ borderColor: palette.blueSoft, color: palette.teal }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl" style={{ color: palette.teal }}>
                  AI-powered planning software driven by your <span style={{ color: palette.blue }}>business logic</span>.
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Pyplan helps supply chain and finance teams replace fragile spreadsheets and rigid planning tools with decision support applications powered by a Python-based model that captures business logic and simulates economic impact.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button className="rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90" style={{ backgroundColor: palette.blue, boxShadow: '0 12px 30px rgba(33,118,194,0.18)' }}>
                    Book a demo
                  </button>
                  <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:border-slate-950">
                    See planning solutions
                  </button>
                </div>
                <div className="mt-14 grid gap-4 sm:grid-cols-3">
                  {capabilityCards.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.blue }}>
              How it works
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-medium text-slate-500">1. Business question</p>
                <p className="mt-3 text-base font-semibold text-slate-950">
                  What is the impact of a demand shift or supply constraint?
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-medium text-slate-500">2. AI + Pyplan</p>
                <p className="mt-3 text-base font-semibold text-slate-950">
                  LLM interprets the question. Pyplan computes the scenario using Python business logic.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-medium text-slate-500">3. Decision support</p>
                <p className="mt-3 text-base font-semibold text-slate-950">
                  Teams get explainable operational and financial outcomes before taking action.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.blue }}>
                Planning markets
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: palette.teal }}>
                Built for planning teams that need more than <span style={{ backgroundColor: palette.yellowSoft, padding: '0 0.2em', borderRadius: '0.25rem' }}>workflow software</span>.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Pyplan is designed for companies evaluating Supply Chain Planning and Financial Planning solutions, but who need more flexibility, transparency, and modeling depth than spreadsheets or rigid platforms can provide.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {marketSections.map((item) => (
                <div key={item.title} className="rounded-[2rem] border p-8" style={{ borderColor: palette.blueSoft, backgroundColor: 'white' }}>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="engine" className="border-t border-slate-200" style={{ backgroundColor: '#FAFBFC' }}>
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.95fr,1.05fr] lg:px-8 lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.blue }}>
                The differentiator
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: palette.teal }}>
                An <span style={{ color: palette.blue }}>Economic Decision Engine</span> behind every planning workflow.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Pyplan does more than manage planning workflows. At its core is an Economic Decision Engine: a model that captures the business logic of the company and computes how decisions propagate through operations and into financial results.
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              
              <div className="grid gap-4">
                {proofPoints.map((point) => (
                  <div key={point} className="rounded-2xl px-5 py-4 text-base font-medium" style={{ backgroundColor: palette.blueSoft, color: palette.teal }}>
                    {point}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base leading-7 text-slate-600">
                This is what enables Pyplan to support integrated business planning, advanced supply chain logic, and tailored financial models for companies whose operations cannot be captured reliably in spreadsheets or rigid planning platforms.
              </p>
            </div>
          </div>
        </section>

        <section id="ai" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.blue }}>
                  AI compatibility
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl" style={{ color: palette.teal }}>
                  Python makes Pyplan practical for <span style={{ color: palette.blue }}>AI-enabled planning tools</span>.
                </h2>
              </div>
              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Because Pyplan models are built in Python, they fit naturally into the language ecosystem used by modern AI tools and large language models. That makes Pyplan a practical calculation layer behind AI assistants for planners, analysts, and decision-makers.
                </p>
                <p>
                  Instead of asking an LLM to guess the economics of the business, companies can connect AI to a model that already encodes the rules, calculations, and quantitative relationships that matter.
                </p>
                <p className="font-medium text-slate-950">
                  Natural language on the front end. Business logic in Python underneath.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="why-pyplan" className="border-t border-slate-200 text-white" style={{ backgroundColor: palette.teal }}>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em]" style={{ color: palette.yellow }}>
                Why Pyplan
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Planning software for companies that need their business logic to stay visible.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Pyplan gives planning teams a stronger alternative to spreadsheets and rigid platforms: a transparent, Python-based Economic Decision Engine that supports better planning, faster scenario analysis, and more reliable AI-enabled decision tools.
              </p>
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <div key={item.title} className="rounded-3xl border p-6" style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.06)' }}>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full px-6 py-3 text-sm font-medium hover:opacity-90" style={{ backgroundColor: palette.yellow, color: palette.teal }}>
                  Book a demo
                </button>
                <button className="rounded-full border px-6 py-3 text-sm font-medium text-white hover:opacity-90" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                  Talk to sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
