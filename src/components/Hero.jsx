import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-black/5">
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-500" />
            New: Mobile app experience for your web app
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Connectify
          </h1>
          <div className="mt-4 text-lg text-gray-700 space-y-2">
            <p>In a world full of endless scrolling, Connectify brings connection back to reality.</p>
            <p>Scan, tag, and discover people around you who matter.</p>
            <p>It’s time to make networking human again — fast, simple, and real.</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://connectify111.base44.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center rounded-md bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95 transition"
            >
              Open Connectify
            </a>
            <a
              href="#features"
              className="inline-flex justify-center items-center rounded-md px-5 py-3 font-semibold text-gray-800 bg-white/80 shadow ring-1 ring-black/5 hover:bg-white"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
