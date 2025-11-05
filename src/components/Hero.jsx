import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background layer: soft radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_50%_10%,#eef2ff_0%,#f8fafc_30%,#ffffff_65%)]" />

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient veil to keep text legible without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/70" />

      {/* Foreground content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Make real connections, not just contacts
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-700">
            Scan, tag, and discover people around you who matter. Connectify turns
            fleeting moments into lasting relationships — fast, simple, and real.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="https://connectify111.base44.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gray-900 hover:bg-gray-800 transition-colors shadow-sm"
            >
              Open Connectify
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-white text-gray-900 border border-black/10 hover:bg-gray-50 transition-colors"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
