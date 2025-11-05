export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {year} Connectify</p>
          <p>Built for fast, premium experiences across web, Android, and iOS.</p>
        </div>
      </div>
    </footer>
  );
}
