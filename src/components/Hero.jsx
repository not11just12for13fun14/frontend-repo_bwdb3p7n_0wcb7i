import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  const [copied, setCopied] = useState(false)
  const serverIP = 'play.bunny.network'

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error('Clipboard failed', e)
    }
  }

  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* 3D voxel/cube ambience */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark vignette + emerald fog */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950/95 pointer-events-none" />

      {/* Pixel grid overlay for subtle Minecraft vibe */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.3) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-slate-900/70 px-2.5 py-1 text-emerald-300/90 backdrop-blur shadow-[inset_0_0_0_1px_rgba(16,185,129,0.15)]">
            <div className="w-1.5 h-1.5 rounded-[2px] bg-emerald-400" />
            <span className="text-[11px] tracking-wide">Java 1.20.x • Forge & Fabric • No pay-to-win</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            BunnyNetwork
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            Premium, modded Minecraft realms with handcrafted packs and zero compromise on performance. Chunk-friendly configs, grief-proof worlds, and a community that loves the grind.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={copyIP} className="inline-flex items-center rounded-[10px] bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 shadow-lg shadow-emerald-500/20 transition active:translate-y-[1px]">
              {copied ? 'IP Copied!' : `Copy IP • ${serverIP}`}
            </button>
            <a href="#modpacks" className="inline-flex items-center rounded-[10px] border border-slate-700/70 hover:border-slate-600 text-slate-200 px-6 py-3 bg-black/40 backdrop-blur transition">
              Explore Modpacks
            </a>
          </div>

          {/* Blocky tip */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-[8px] border border-emerald-500/20 bg-slate-900/60 px-3 py-2 text-xs text-slate-300">
            <span className="inline-flex size-2 rounded-[2px] bg-emerald-400" /> Add server in Multiplayer → Direct Connection → paste IP
          </div>
        </motion.div>
      </div>

      {/* Decorative block edges */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-[linear-gradient(to_top,rgba(15,23,42,1),rgba(15,23,42,0))]" />
    </section>
  )
}
