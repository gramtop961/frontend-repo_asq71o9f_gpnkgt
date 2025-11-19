import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Integrations from './components/Integrations'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
      <Navbar />
      <Hero />
      <Features />
      <Integrations />

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Simple, usage-based pricing</h2>
              <p className="mt-2 text-slate-300/90">Start free, scale as you integrate. Contact us for enterprise plans and on-prem options.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90 list-disc list-inside">
                <li>Pay per successful task</li>
                <li>Unlimited seats</li>
                <li>Priority support for enterprise</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="text-4xl font-semibold">$0.05</div>
              <div className="text-sm text-slate-300/80">per successful action</div>
              <a id="cta" href="https://www.altheo.org/" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition">Talk to us</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 pb-10 text-sm text-slate-400/80">
        © {new Date().getFullYear()} Altheo. All rights reserved.
      </footer>
    </div>
  )
}

export default App
