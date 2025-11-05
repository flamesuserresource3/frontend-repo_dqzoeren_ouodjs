import { Zap } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Connectify</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="https://connectify111.base44.app" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-indigo-500 shadow hover:opacity-95 transition">
            Open App
          </a>
        </div>
      </div>
    </header>
  );
}
