import { Rocket, Wifi, Bell, Download, Shield, Smartphone, RefreshCw, Share2, Cloud } from 'lucide-react';

const features = [
  {
    title: 'Native feel, web speed',
    desc: 'Your site runs inside a refined shell with smooth transitions and gestures.',
    Icon: Smartphone,
  },
  {
    title: 'Instant updates',
    desc: 'Ship changes to the web and the app reflects them automatically.',
    Icon: RefreshCw,
  },
  {
    title: 'Offline support',
    desc: 'Cache essential pages to keep users going without internet.',
    Icon: Wifi,
  },
  {
    title: 'Push notifications',
    desc: 'Re-engage users with timely, targeted messages.',
    Icon: Bell,
  },
  {
    title: 'Secure by default',
    desc: 'Hardened network layer and safe permissions.',
    Icon: Shield,
  },
  {
    title: 'Auto preloading',
    desc: 'Smart caching keeps the experience snappy.',
    Icon: Download,
  },
  {
    title: 'Share anything',
    desc: 'System share sheets for links and content.',
    Icon: Share2,
  },
  {
    title: 'Cloud-friendly',
    desc: 'Optimized for modern hosting and CDNs.',
    Icon: Cloud,
  },
  {
    title: 'Performance-first',
    desc: 'Built with best practices for speed and polish.',
    Icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Everything you need for a premium mobile app
          </h2>
          <p className="mt-3 text-gray-600">
            Wrap your web experience with native capabilities while keeping the agility of the web.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-fuchsia-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
