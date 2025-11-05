import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm text-white">
            <Zap className="h-5 w-5" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Connectify</span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Features</a>
          <a href="https://connectify111.base44.app" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">Open App</a>
          <a href="#contact" className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
