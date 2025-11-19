import { Workflow, Headphones, PlugIcon, ShieldCheck, BarChart3, CheckCircle2 } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: Workflow,
      title: 'Composable workflows',
      desc: 'Chain tools, memory, and reasoning. Ship complex flows with guardrails and observability.'
    },
    {
      icon: PlugIcon,
      title: 'Plug into anything',
      desc: 'SDKs and webhooks to connect CRMs, help desks, data warehouses, telephony, and more.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise-grade',
      desc: 'SOC2-ready posture, role-based access, rate limits, and audit trails out of the box.'
    },
    {
      icon: Headphones,
      title: 'Voice + multimodal',
      desc: 'Real-time voice, screen understanding, and action execution for end-to-end tasks.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & QA',
      desc: 'Measure success, trace decisions, and continuously improve with evals and feedback.'
    },
    {
      icon: CheckCircle2,
      title: 'Drop-in reliability',
      desc: 'Deterministic routing, retries, and human-in-the-loop ensure outcomes you can trust.'
    }
  ]

  return (
    <section id="workflows" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="group rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 hover:border-white/20 transition">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 flex items-center justify-center shadow-md shadow-purple-500/20 ring-1 ring-white/10">
              <it.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-white font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-300/90">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
