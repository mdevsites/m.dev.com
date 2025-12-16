"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, User, Star, ChevronLeft, ChevronRight, Brush, Hand, Smile } from "lucide-react";

// --- Data ---
const services = [
    {
        icon: Hand,
        title: "Stylizacja paznokci",
        desc: "Manicure, pedicure, hybryda. Profesjonalna stylizacja, która zachwyca.",
        link: "/demos/salon-beauty/uslugi",
    },
    {
        icon: Smile, // Or Face if available in this version of lucide, Smile is safe
        title: "Zabiegi na twarz",
        desc: "Pielęgnacja, oczyszczanie, masaże. Odzyskaj blask swojej cery.",
        link: "/demos/salon-beauty/uslugi",
    },
    {
        icon: Brush, // Makeup brush substitute
        title: "Makijaż",
        desc: "Makijaż dzienny, wieczorowy, ślubny. Wyglądaj zjawiskowo na każdą okazję.",
        link: "/demos/salon-beauty/uslugi",
    },
];

const testimonials = [
    {
        id: 1,
        text: "Najlepszy salon w mieście! Profesjonalna obsługa i piękne wnętrze. Zawsze wychodzę stąd zrelaksowana i piękniejsza.",
        author: "Magdalena K.",
        rating: 5,
    },
    {
        id: 2,
        text: "Stylizacja paznokci wykonana perfekcyjnie. Trzymają się idealnie przez 3 tygodnie. Na pewno wrócę!",
        author: "Karolina W.",
        rating: 5,
    },
    {
        id: 3,
        text: "Zabieg na twarz był cudowny. Czuję się świeżo i wypoczęta, a moja skóra wygląda promiennie.",
        author: "Anna S.",
        rating: 5,
    },
];

// --- Components ---

function HeroSection() {
    return (
        <>
            <section className="relative w-full flex flex-col mb-10">
                {/* HEROWRAPPER: Image and Content */}
                <div className="relative h-[75vh] w-full flex justify-center bg-[#F5F1E8]">
                    {/* 1. Background Image - Absolute */}
                    <div className="absolute inset-0 overflow-hidden z-0 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
                        <motion.div
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop"
                                alt="Luxury Spa Treatment"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
                        </motion.div>
                    </div>

                    {/* 2. Hero Content - Centered in the 75vh container */}
                    <div className="relative z-10 w-full h-full max-w-[1600px] px-4 md:px-8 mx-auto flex flex-col items-center justify-center text-center text-white pb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                            className="flex flex-col items-center w-full gap-10 md:gap-14"
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold font-montserrat leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                            >
                                Piękno, które podkreśla<br />
                                <span className="text-[#D4AF37] drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">Twoją wyjątkowość</span>
                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl font-light max-w-4xl mx-auto opacity-90 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.9 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                Profesjonalne usługi beauty w sercu miasta.<br />
                                Odkryj miejsce, gdzie dbamy o każdy detal Twojego wyglądu.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                            >
                                <Link
                                    href="/demos/salon-beauty/uslugi"
                                    className="group relative px-16 py-6 text-white hover:bg-white/5 transition-all duration-300 rounded-none overflow-hidden"
                                >
                                    <span className="relative z-10 font-medium tracking-[0.15em] uppercase text-2xl group-hover:tracking-[0.2em] transition-all duration-300">Nasze usługi</span>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </Link>
                                <Link
                                    href="/demos/salon-beauty/kontakt"
                                    className="group relative px-16 py-6 text-white hover:bg-white/5 transition-all duration-300 rounded-none"
                                >
                                    <span className="relative z-10 font-medium tracking-[0.15em] uppercase text-2xl text-white/90 group-hover:text-white transition-colors duration-300">Umów wizytę</span>
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 3. Cards - ABSOLUTE POSITIONED ON THE BOTTOM LINE OF HERO IMAGE (Desktop only) */}
                    <div className="hidden md:flex absolute bottom-0 left-0 w-full translate-y-1/2 z-30 px-4 pointer-events-none justify-center">
                        <div className="w-full h-full flex flex-wrap justify-center gap-16 md:gap-64 pointer-events-auto pb-20">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 1, y: 50, rotate: 45 }}
                                    whileInView={{ opacity: 1, y: 0, rotate: 45 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 50 }}
                                    whileHover={{ scale: 1.02, y: -25, rotate: 45, transition: { duration: 0.3, ease: "easeOut" } }}
                                    className="relative bg-white rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group text-center w-64 h-64 md:w-72 md:h-72 flex items-center justify-center transform-gpu my-10"
                                >
                                    {/* Decorative Border Gradient on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FCE4EC] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 p-[1px] rounded-[2.5rem] pointer-events-none">
                                        <div className="absolute inset-0 bg-white rounded-[2.5rem]" />
                                    </div>

                                    {/* Content: Counter Rotated -45deg */}
                                    <div className="relative z-10 flex flex-col items-center justify-center w-[140%] h-[140%] -rotate-45">
                                        {/* Icon - Minimalist Gold */}
                                        <motion.div
                                            className="mb-4 text-[#D4AF37] transition-colors duration-500"
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <service.icon strokeWidth={1.5} size={48} />
                                        </motion.div>

                                        <h3 className="text-lg font-semibold uppercase tracking-[0.1em] font-montserrat mb-3 text-[#212121] group-hover:text-[#D4AF37] transition-colors duration-300 max-w-[70%]">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm font-light leading-relaxed mb-5 max-w-[60%] line-clamp-3">
                                            {service.desc}
                                        </p>

                                        <Link
                                            href={service.link}
                                            className="group/btn inline-flex items-center justify-center text-[#212121] text-xs uppercase tracking-widest hover:text-[#E91E63] transition-colors duration-300 gap-1 border-b border-transparent hover:border-[#E91E63] pb-0.5"
                                        >
                                            Odkryj
                                            <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Cards Section - Below Hero */}
            <section className="md:hidden w-full bg-[#F5F1E8] py-12 px-4">
                <div className="w-full flex flex-col gap-8 items-center">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="relative bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] p-8 text-center w-72 h-72 flex flex-col items-center justify-center"
                        >
                            <div className="mb-6 text-[#D4AF37] flex justify-center">
                                <service.icon strokeWidth={1.5} size={48} />
                            </div>

                            <h3 className="text-xl font-semibold uppercase tracking-wide font-montserrat mb-4 text-[#212121]">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center justify-center text-[#D4AF37] text-sm uppercase tracking-widest hover:text-[#E91E63] transition-colors duration-300 gap-2 border-b-2 border-[#D4AF37] hover:border-[#E91E63] pb-1"
                            >
                                Odkryj
                                <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
}

function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="pt-20 pb-32 bg-[#F5F1E8] w-full relative overflow-hidden">
            <div className="w-full px-4 md:px-8 flex flex-col items-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#212121] mb-4 text-center">
                        Opinie Klientek
                    </h2>
                    <p className="text-gray-600 text-center">Zobacz co mówią o nas osoby,<br className="hidden md:block" /> które nam zaufały</p>
                </motion.div>

            </div>

            <div className="w-full flex justify-center px-4 md:px-8 relative z-10">
                <div className="relative w-full flex flex-col items-center">
                    <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-center px-8 md:px-16"
                            >
                                <div className="flex justify-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                        >
                                            <Star size={24} className="text-[#FFD700] fill-current drop-shadow-sm" />
                                        </motion.div>
                                    ))}
                                </div>
                                <blockquote className="text-xl md:text-2xl font-light italic text-[#212121] mb-8 leading-relaxed">
                                    "{testimonials[current].text}"
                                </blockquote>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#F06292] rounded-full flex items-center justify-center text-white shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                                    >
                                        <User size={28} />
                                    </motion.div>
                                    <div className="text-center">
                                        <p className="font-bold font-montserrat">{testimonials[current].author}</p>
                                        <p className="text-sm text-gray-500">Klientka</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#E91E63" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#212121] transition-colors duration-200"
                    >
                        <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "#E91E63" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#212121] transition-colors duration-200"
                    >
                        <ChevronRight size={24} />
                    </motion.button>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrent(index)}
                                whileHover={{ scale: 1.2 }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-[#E91E63] w-8" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CTA() {
    return (
        <section className="py-24 bg-[#F5F1E8] text-[#212121] w-full relative overflow-hidden">
            <div className="w-full px-4 md:px-8 flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold font-montserrat mb-6 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Gotowa na metamorfozę?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-600 mb-20 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Zarezerwuj wizytę już dziś<br className="hidden md:block" /> i pozwól nam zadbać o Twoje piękno.
                    </motion.p>
                    <div className="h-16"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link
                            href="/demos/salon-beauty/kontakt"
                            className="group relative inline-block px-16 py-6 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none"
                        >
                            <span className="font-medium tracking-[0.15em] uppercase text-2xl group-hover:tracking-[0.2em] transition-all duration-300">Skontaktuj się z nami</span>
                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function BeautyShopHome() {
    return (
        <div className="w-full relative block">
            <HeroSection />
            <div className="h-[200px] md:h-[300px] w-full bg-[#F5F1E8]" /> {/* Colored spacer for floating cards */}
            <Testimonials />
            <div className="h-[80px] md:h-[120px] w-full bg-[#F5F1E8]" /> {/* Spacer after testimonials */}
            <CTA />
            <div className="h-[60px] md:h-[80px] w-full bg-[#F5F1E8]" /> {/* Spacer after CTA */}
        </div>
    );
}
