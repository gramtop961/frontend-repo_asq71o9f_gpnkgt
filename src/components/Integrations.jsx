import { Slack, Github, Database, Phone, Mail, Webhook } from 'lucide-react'

export default function Integrations() {
  const items = [
    { name: 'Slack', icon: Slack },
    { name: 'GitHub', icon: Github },
    { name: 'Postgres', icon: Database },
    { name: 'Twilio', icon: Phone },
    { name: 'Email', icon: Mail },
    { name: 'Webhooks', icon: Webhook },
  ]

  return (
    <section id="integrations" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {items.map((it) => (
            <div key={it.name} className="flex items-center gap-2 text-slate-200/90">
              <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
                <it.icon className="h-5 w-5" />
              </div>
              <span className="text-sm">{it.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
