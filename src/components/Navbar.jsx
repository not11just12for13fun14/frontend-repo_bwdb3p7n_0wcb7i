import { useState } from 'react'
import { Menu, Server, Hammer, Cuboid, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-5 py-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="grid grid-cols-2 gap-1 p-2 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/60 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                <div className="w-2.5 h-2.5 rounded-sm bg-slate-300/80" />
                <div className="w-2.5 h-2.5 rounded-sm bg-slate-500/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-slate-700/70" />
              </div>
              <div>
                <div className="text-white font-semibold tracking-tight leading-none">
                  BunnyNetwork
                </div>
                <div className="text-xs text-emerald-300/70 -mt-0.5">
                  handcrafted modded servers
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#modpacks" className="text-slate-300 hover:text-white transition">Modpacks</a>
              <a href="#about" className="text-slate-300 hover:text-white transition">About</a>
              <a href="#join" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-500 text-slate-900 font-medium shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition">
                <Sparkles size={16} /> Join Now
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-700/60 text-slate-200">
              <Menu size={20} />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-slate-700/60 px-5 py-3 space-y-2">
              <a href="#features" className="block text-slate-300">Features</a>
              <a href="#modpacks" className="block text-slate-300">Modpacks</a>
              <a href="#about" className="block text-slate-300">About</a>
              <a href="#join" className="block rounded-lg px-4 py-2 bg-emerald-500 text-slate-900 font-medium">Join Now</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
