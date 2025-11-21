import { motion } from 'framer-motion'
import { Cpu, Rocket, Shield, Boxes } from 'lucide-react'

const items = [
  {
    icon: Boxes,
    title: 'Cube-crafted design',
    desc: 'Every server and system is intentionally shaped around modular blocks — clean, stable, and aesthetically cohesive.'
  },
  {
    icon: Cpu,
    title: 'Performance tuned',
    desc: 'Optimized configs, smart profiling, and real-time monitoring keep TPS high and latency low.'
  },
  {
    icon: Shield,
    title: 'Safe & stable',
    desc: 'Rigorous testing, backups, and patch pipelines so your worlds remain intact and thriving.'
  },
  {
    icon: Rocket,
    title: 'Curated experiences',
    desc: 'Each pack is handpicked and refined to feel cohesive, adventurous, and replayable.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(148,163,184,.6) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-4xl font-bold text-white">
          Built with intention
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1 p-2 rounded-lg bg-slate-800/70 border border-slate-700/60">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-300/80" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-500/70" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-700/70" />
                </div>
                <item.icon className="text-emerald-300" size={20} />
              </div>
              <h3 className="mt-5 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
