import { motion } from 'framer-motion'
import { Pickaxe, Shield, Rocket, Cpu } from 'lucide-react'

const items = [
  {
    icon: Pickaxe,
    title: 'Crafted like a perfect pickaxe',
    desc: 'Worldgen, loot tables, and recipes tuned so progression feels rewarding without the grind walls.'
  },
  {
    icon: Cpu,
    title: 'Chunk-smooth performance',
    desc: 'Optimized view distances, entity culling, and async I/O keep TPS stable even with mega-bases.'
  },
  {
    icon: Shield,
    title: 'Grief-proof & safe',
    desc: 'Backups, anticheat, and rollback tooling protect your builds and keep the vibe friendly.'
  },
  {
    icon: Rocket,
    title: 'Adventure that scales',
    desc: 'Questlines and endgame loops designed for small parties or server-wide events.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.10),transparent_60%)]">
      {/* subtle pixel grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.35) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-2xl sm:text-4xl font-bold text-white">
          Built for Minecraft players
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(16,185,129,0.10))] opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="grid grid-cols-2 gap-1 p-2 rounded-md bg-slate-800/70 border border-slate-700/60">
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-emerald-400" />
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-slate-300/80" />
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-slate-500/70" />
                  <div className="w-2.5 h-2.5 rounded-[3px] bg-slate-700/70" />
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
