import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Swords, Zap, TreePine, Copy } from 'lucide-react'

const packs = [
  {
    name: 'Eternal Frontier',
    tagline: 'Tech + Magic, balanced for long-term worlds',
    tags: ['1.20.1', 'Forge', 'Quests'],
    online: 128,
    ip: 'play.bunny.network'
  },
  {
    name: 'Verdant Realms',
    tagline: 'Survival reimagined with nature-centric mods',
    tags: ['1.20.1', 'Fabric', 'Seasons'],
    online: 64,
    ip: 'survival.bunny.network'
  },
  {
    name: 'Quantum Skies',
    tagline: 'Skyblock progression with expert automation',
    tags: ['1.19.2', 'Forge', 'Expert'],
    online: 42,
    ip: 'sky.bunny.network'
  }
]

export default function Modpacks() {
  const [copied, setCopied] = useState('')

  const copy = async (text) => {
    try { await navigator.clipboard.writeText(text); setCopied(text); setTimeout(() => setCopied(''), 1200) } catch {}
  }

  return (
    <section id="modpacks" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Current modpack servers</h2>
            <p className="mt-2 text-slate-300/90">Curated experiences designed for stability, progression, and fun.</p>
          </div>
          <a href="#join" className="hidden sm:inline-flex rounded-xl px-4 py-2 border border-slate-700/60 text-slate-200 hover:border-slate-600 bg-black/40">View connection info</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <motion.div key={pack.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-950 p-6 overflow-hidden">
              <div className="absolute -right-10 -top-10 size-40 rotate-12 opacity-20 bg-[linear-gradient(90deg,transparent_48%,rgba(16,185,129,0.6)_50%,transparent_52%)] [background-size:14px_14px]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-lg border border-slate-700/60 bg-black/40 px-2 py-1 text-xs text-slate-300/90">
                    <span className="inline-flex size-2 rounded-[2px] bg-emerald-400" />
                    Online: {pack.online}
                  </div>
                  <h3 className="mt-3 text-white text-lg font-semibold tracking-tight">{pack.name}</h3>
                  <p className="mt-1 text-slate-300/90 text-sm">{pack.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pack.tags.map(t => (
                      <span key={t} className="text-xs rounded-md border border-slate-700/60 bg-slate-900/60 px-2 py-1 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
                <Server className="text-emerald-300" />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="text-slate-400 text-sm">IP: <span className="text-slate-200">{pack.ip}</span></div>
                <button onClick={() => copy(pack.ip)} className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-emerald-500 text-slate-900 hover:bg-emerald-400 transition">
                  <Copy size={14} /> {copied === pack.ip ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Blocky bottom border highlight */}
              <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
