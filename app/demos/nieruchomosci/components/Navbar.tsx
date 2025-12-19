"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Landmark } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { name: "Home", href: "/demos/nieruchomosci" },
    { name: "Oferty", href: "/demos/nieruchomosci/oferty" },
    { name: "Wynajem", href: "/demos/nieruchomosci/wynajem" },
    { name: "O nas", href: "/demos/nieruchomosci/o-nas" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 flex justify-center w-full transition-all duration-500 ${isMobileMenuOpen
                    ? "z-[100] bg-transparent backdrop-blur-none shadow-none pointer-events-none"
                    : `z-50 ${isScrolled ? "bg-[#121212]/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`
                    }`}
                style={{
                    paddingTop: isScrolled ? '25px' : '40px',
                    paddingBottom: isScrolled ? '25px' : '40px'
                }}
            >
                <div className="max-w-[95%] mx-auto w-full px-6 flex items-center justify-end">
                    {/* Logo removed as per request */}

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative text-lg uppercase tracking-widest font-bold transition-colors hover:text-[#C5A059] group ${pathname === link.href ? "text-[#C5A059]" : "text-gray-300"
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#C5A059] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                                    }`} />
                            </Link>
                        ))}

                        <Link
                            href="/demos/nieruchomosci/kontakt"
                            className="px-6 py-2 text-[#C5A059] text-lg uppercase tracking-widest font-bold hover:text-white transition-all duration-300"
                        >
                            Rezerwuj Konsultację
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden text-[#C5A059] relative z-[100] transition-transform duration-500 pointer-events-auto ${isMobileMenuOpen ? "rotate-90" : ""}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Outside motion.nav for clean stacking context */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col items-center justify-start space-y-12 md:hidden shadow-2xl overflow-y-auto px-6 pt-32 pb-12"
                    >
                        <div className="flex flex-col items-center space-y-10 w-full mt-10">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-3xl uppercase tracking-[0.3em] font-serif transition-all duration-300 hover:scale-110 ${pathname === link.href ? "text-[#C5A059] scale-110" : "text-white opacity-80"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="w-20 h-[1px] bg-[#C5A059]/30 shrink-0" />

                        <Link
                            href="/demos/nieruchomosci/kontakt"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="px-8 py-5 border border-[#C5A059] text-[#C5A059] text-sm uppercase tracking-[0.4em] font-bold hover:bg-[#C5A059] hover:text-black transition-all duration-500 scale-110 inline-block text-center"
                        >
                            REZERWUJ KONSULTACJĘ
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
