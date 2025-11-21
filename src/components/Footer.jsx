export default function Footer() {
  return (
    <footer id="join" className="relative py-16 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-white font-semibold">BunnyNetwork</div>
            <p className="mt-2 text-slate-400 text-sm">Handcrafted modded Minecraft servers with a focus on stability, performance, and style.</p>
          </div>
          <div>
            <div className="text-slate-200 font-medium">Connect</div>
            <ul className="mt-3 text-slate-400 text-sm space-y-2">
              <li>play.bunny.network</li>
              <li>survival.bunny.network</li>
              <li>sky.bunny.network</li>
            </ul>
          </div>
          <div>
            <div className="text-slate-200 font-medium">Community</div>
            <ul className="mt-3 text-slate-400 text-sm space-y-2">
              <li>Discord</li>
              <li>Guides</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <div className="text-slate-200 font-medium">Status</div>
            <p className="mt-3 text-slate-400 text-sm">Uptime: 99.9% • Backups: nightly • Region: global edge</p>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} BunnyNetwork. All rights reserved.</div>
      </div>
    </footer>
  )
}
