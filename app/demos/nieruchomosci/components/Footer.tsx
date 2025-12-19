import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-8 flex justify-center">
            <div className="max-w-7xl mx-auto w-full px-6">
                {/* Minimal Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-gray-600 uppercase tracking-widest">
                    <div className="flex gap-8">
                        <span>© 2025 Horizon Estates</span>
                        <Link href="/demos/nieruchomosci/prywatnosc" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
