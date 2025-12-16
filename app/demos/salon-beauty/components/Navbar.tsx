"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { name: "Home", href: "/demos/salon-beauty" },
    { name: "Usługi", href: "/demos/salon-beauty/uslugi" },
    { name: "Galeria", href: "/demos/salon-beauty/galeria" },
    { name: "Kontakt", href: "/demos/salon-beauty/kontakt" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full flex items-center justify-center ${isScrolled
                ? "h-12 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20"
                : "h-20 bg-transparent shadow-none border-b border-transparent"
                }`}
        >
            {/* Desktop Menu - Centered by parent flex */}
            <div className="hidden md:flex items-center gap-16">
                {links.map((link, index) => (
                    <motion.div
                        key={link.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                    >
                        <Link
                            href={link.href}
                            className={`relative text-sm uppercase tracking-[0.2em] font-bold hover:text-[#D4AF37] transition-colors px-2 group ${pathname === link.href ? "text-[#D4AF37]" : (isScrolled ? "text-[#212121]" : "text-white drop-shadow-sm")
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full ${pathname === link.href ? "w-full" : ""}`} />
                        </Link>
                    </motion.div>
                ))}
            </div>



            {/* Mobile Toggle - Absolute positioned */}
            <button
                className="absolute right-6 top-1/2 -translate-y-1/2 md:hidden text-[#212121]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} className={isScrolled ? "text-[#212121]" : "text-[#D4AF37] lg:text-white"} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden"
                    >
                        <div className="p-8 flex flex-col items-center space-y-6">
                            {links.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-[#212121] text-xl font-medium hover:text-[#D4AF37] text-center w-full transition-colors ${pathname === link.href && "text-[#D4AF37]"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
