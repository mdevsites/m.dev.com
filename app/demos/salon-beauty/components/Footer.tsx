import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#F5F1E8] text-[#212121] py-3 pb-0 border-t border-[#D4AF37]/20 m-0">
            <div className="w-full flex items-center justify-center gap-8">
                {/* Navigation */}
                <Link href="/demos/salon-beauty" className="text-xs text-gray-600 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Home</Link>
                <Link href="/demos/salon-beauty/uslugi" className="text-xs text-gray-600 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Usługi</Link>
                <Link href="/demos/salon-beauty/galeria" className="text-xs text-gray-600 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Galeria</Link>
                <Link href="/demos/salon-beauty/kontakt" className="text-xs text-gray-600 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Kontakt</Link>

                <span className="text-gray-400">|</span>

                {/* Social */}
                <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-[#212121] hover:text-white shadow-sm">
                    <Facebook size={14} />
                </a>
                <a href="#" className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors text-[#212121] hover:text-white shadow-sm">
                    <Instagram size={14} />
                </a>

                <span className="text-gray-400">|</span>

                {/* Copyright */}
                <p className="text-gray-500 text-xs">© 2024 Beauty Salon</p>
            </div>
        </footer>
    );
}
