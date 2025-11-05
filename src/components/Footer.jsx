import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600"
        >
          <p>© {year} Connectify</p>
          <p>Built for fast, premium experiences across web, Android, and iOS.</p>
        </motion.div>
      </div>
    </footer>
  );
}
