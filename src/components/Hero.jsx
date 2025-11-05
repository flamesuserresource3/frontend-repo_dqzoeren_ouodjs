import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background layer: soft radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_10%,#eef2ff_0%,#f8fafc_30%,#ffffff_65%)]" />

      {/* 3D Spline scene (full-width cover background) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pZWHhXqbwV-KfY5J/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient veil to keep text legible without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      {/* Foreground content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="max-w-2xl"
        >
          <motion.h1
            variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            Make real connections, not just contacts
          </motion.h1>

          <motion.p
            variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="mt-5 text-lg sm:text-xl text-gray-700"
          >
            Scan, tag, and discover people around you who matter. Connectify turns
            fleeting moments into lasting relationships — fast, simple, and real.
          </motion.p>

          <motion.div
            variants={{ hidden: { y: 12, opacity: 0 }, show: { y: 0, opacity: 1 } }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-8 flex items-center gap-3"
          >
            <motion.a
              href="https://connectify111.base44.app"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Connectify
            </motion.a>
            <motion.a
              href="#features"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-gray-900 border border-black/10 hover:bg-gray-50 transition-colors"
            >
              Explore Features
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating accent */}
      <motion.div
        className="pointer-events-none absolute -right-8 bottom-10 h-48 w-48 rounded-full bg-gradient-to-tr from-indigo-400/30 via-fuchsia-400/20 to-amber-300/20 blur-2xl"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
