import { Smartphone, RefreshCw, Wifi, Bell, Shield, Download, Share2, Cloud, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Mobile-first UI",
    description: "Feels native on every device with smooth gestures and polished details.",
    icon: Smartphone,
  },
  {
    title: "Instant updates",
    description: "Ship changes from the web — no app store wait required.",
    icon: RefreshCw,
  },
  {
    title: "Works offline",
    description: "Reliable caching keeps things running even without signal.",
    icon: Wifi,
  },
  {
    title: "Push notifications",
    description: "Keep your audience in the loop at the right moment.",
    icon: Bell,
  },
  {
    title: "Secure by design",
    description: "Best practices and permissions that respect privacy.",
    icon: Shield,
  },
  {
    title: "Fast downloads",
    description: "Small bundles and edge delivery for snappy loads.",
    icon: Download,
  },
  {
    title: "Easy sharing",
    description: "Deep links that open exactly where users need to be.",
    icon: Share2,
  },
  {
    title: "Cloud sync",
    description: "Seamlessly sync data across devices and platforms.",
    icon: Cloud,
  },
  {
    title: "Launch ready",
    description: "Optimized foundations for Play Store and App Store.",
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Everything you need to go mobile
          </h2>
          <p className="mt-3 text-gray-700">
            Upgrade your web app to a native-like experience with offline support,
            live updates, notifications, and branded visuals.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.05 } } }}
        >
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
