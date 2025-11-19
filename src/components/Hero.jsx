import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2)_0%,transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 sm:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white/80">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live agentic workflows
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            AI agentic workflows you can drop into your product
          </h1>
          <p className="mt-4 text-lg text-slate-200/90">
            Orchestrate research, reasoning, calling, and automation. Integrate via API or SDK to augment your platform with reliable agents.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition">
              Book a demo
            </a>
            <a href="#workflows" className="inline-flex justify-center rounded-full bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition">
              Explore workflows
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
