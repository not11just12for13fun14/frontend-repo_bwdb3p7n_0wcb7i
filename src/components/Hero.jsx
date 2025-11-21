import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/40 px-3 py-1 text-emerald-300/80 backdrop-blur">
            <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400" />
            <span className="text-xs">handcrafted modded servers</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            BunnyNetwork
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            A carefully curated world of modded Minecraft. Custom-built packs, stable performance, and a community-first vibe — all wrapped in a sleek, cube-driven aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#join" className="inline-flex items-center rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/20 transition">
              Join the Network
            </a>
            <a href="#modpacks" className="inline-flex items-center rounded-xl border border-slate-700/70 hover:border-slate-600 text-slate-200 px-6 py-3 bg-black/40 backdrop-blur transition">
              Explore Modpacks
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
