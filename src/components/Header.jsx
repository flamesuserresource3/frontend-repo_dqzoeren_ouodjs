import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <motion.span
            initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 shadow-sm text-white"
            aria-hidden
          >
            <Zap className="h-5 w-5" />
          </motion.span>
          <motion.span
            initial={{ y: -6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="text-lg font-semibold tracking-tight"
          >
            Connectify
          </motion.span>
        </a>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {[
            { href: "#features", label: "Features" },
            { href: "https://connectify111.base44.app", label: "Open App", external: true },
            { href: "#contact", label: "Contact", button: true },
          ].map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className={
                item.button
                  ? "inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                  : "text-gray-700 hover:text-gray-900 transition-colors"
              }
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  );
}
