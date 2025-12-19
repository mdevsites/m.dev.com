"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import TextReveal, { MultiLineReveal } from "./components/TextReveal";
import ParallaxImage from "./components/ParallaxImage";
import {
    ChevronRight,
    ArrowRight,
    Maximize,
    Bed,
    Bath,
    MapPin,
    CheckCircle2,
    ShieldCheck,
    Award,
    TrendingUp
} from "lucide-react";

const featuredProperties = [
    {
        id: 1,
        title: "Modern Glass Penthouse",
        location: "Warszawa, Centrum",
        price: "4 250 000 PLN",
        sqm: 145,
        beds: 3,
        baths: 2,
        image: "/assets/demos/nieruchomosci/penthouse-new.png",
        tag: "Nowość"
    },
    {
        id: 2,
        title: "Lakeside Luxury Mansion",
        location: "Mazury, Giżycko",
        price: "6 800 000 PLN",
        sqm: 320,
        beds: 5,
        baths: 4,
        image: "/assets/demos/nieruchomosci/lakeview-new.png",
        tag: "Wyjątkowa Oferta"
    },
    {
        id: 3,
        title: "Skyline Residence",
        location: "Wrocław, Sky Tower",
        price: "3 100 000 PLN",
        sqm: 98,
        beds: 2,
        baths: 2,
        image: "/assets/demos/nieruchomosci/skyline-new.png",
        tag: "Inwestycja"
    }
];

const stats = [
    { label: "Wyjątkowych Ofert", value: "120+" },
    { label: "Zadowolonych Klientów", value: "450+" },
    { label: "Lat Doświadczenia", value: "15" },
    { label: "Wartość Sprzedana", value: "1.2 mld" },
];

const amenities = [
    {
        title: "Prywatne Spa & Wellness",
        description: "Dostęp do ekskluzywnych stref relaksu tylko dla mieszkańców.",
        icon: <ShieldCheck className="w-8 h-8 text-[#C5A059]" />,
        className: "md:col-span-2 md:row-span-1"
    },
    {
        title: "Inteligentny Dom",
        description: "Pełna kontrola nad Twoją rezydencją z dowolnego miejsca na ziemie.",
        icon: <TrendingUp className="w-8 h-8 text-[#C5A059]" />,
        className: "md:col-span-1 md:row-span-2"
    },
    {
        title: "Obsługa Concierge",
        description: "Twój osobisty asystent dostępny 24/7 dla każdego Twojego życzenia.",
        icon: <Award className="w-8 h-8 text-[#C5A059]" />,
        className: "md:col-span-1 md:row-span-1"
    },
    {
        title: "Bezpieczeństwo 24/7",
        description: "Najnowocześniejsze systemy ochrony i stały nadzór personelu.",
        icon: <Maximize className="w-8 h-8 text-[#C5A059]" />,
        className: "md:col-span-1 md:row-span-1"
    }
];

export default function RealEstateHomePage() {
    return (
        <div className="overflow-x-hidden flex flex-col items-center w-full">
            {/* Hero Section - Asymmetric Magazine Layout */}
            <section className="relative h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col md:flex-row items-center">

                {/* Background Grain/Texture (Optional subtle noise) */}
                {/* Background Grain/Texture (Disabled for performance) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 mix-blend-overlay" />


                {/* Left Content - Asymmetric Placement */}
                <div className="relative z-20 w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-20 pointer-events-none">

                    {/* Ambient Gold Glow */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059] rounded-full blur-[140px] opacity-[0.12] -z-10 pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="space-y-8 will-change-transform text-center md:text-left flex flex-col items-center md:items-start"
                    >
                        <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-serif font-bold tracking-tighter m-0 pointer-events-auto text-white">
                            <TextReveal delay={0.2} className="md:pr-8 pb-4 pt-4">HORIZON</TextReveal>
                        </h1>
                        <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-serif font-bold tracking-tighter m-0 md:ml-24 text-[#C5A059] opacity-90 pointer-events-auto">
                            <TextReveal delay={0.6} className="md:pr-8 pb-4 pt-4">ESTATES</TextReveal>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
                        className="mt-12 md:max-w-md pointer-events-auto will-change-transform flex flex-col items-center md:items-start md:ml-[25px]"
                    >
                        <div className="flex items-center gap-6 mb-8 text-center md:text-left">
                            <div className="w-[3px] h-12 bg-[#C5A059] shrink-0 hidden md:block" />
                            <p className="text-gray-300 text-lg md:text-xl font-light tracking-widest text-center md:text-left">
                                DEFINIUJEMY NOWĄ ERĘ LUKSUSU
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center md:justify-start">
                            {/* Structural spacer to align button text with the slogan text above (Line 3px + Gap 24px) */}
                            <div className="hidden md:block w-[3px] shrink-0" />
                            <Link
                                href="/demos/nieruchomosci/oferty"
                                className="group/btn flex items-center gap-4 px-0 py-2 border-b border-[#C5A059] text-[#C5A059] font-serif text-xl tracking-widest hover:text-white hover:border-white transition-colors duration-500"
                            >
                                ZOBACZ KOLEKCJĘ
                                <span className="group-hover/btn:translate-x-2 transition-transform duration-500">
                                    →
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content - Image Pane */}
                <motion.div
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.8, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-full h-full md:w-[55%] z-10 will-change-transform"
                >
                    <ParallaxImage
                        src="/assets/demos/nieruchomosci/hero.png"
                        alt="Luxury Architecture"
                        fill
                        className="object-cover"
                        priority
                        containerClassName="w-full h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]" />
                        <div className="absolute inset-0 bg-black/20" />
                    </ParallaxImage>
                </motion.div>
            </section>

            {/* Featured Properties Section - Magazine Grid */}
            <section className="bg-[#0a0a0a] w-full flex justify-center" style={{ paddingBlock: '140px' }}>
                <div className="max-w-[1400px] mx-auto w-full px-6">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 gap-12 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            <div className="w-[3px] h-32 bg-[#C5A059] shrink-0 hidden md:block" />
                            <div className="max-w-[700px] flex flex-col items-center md:items-start">
                                <h2 className="text-[#C5A059] text-xs uppercase tracking-[0.4em] mb-6 font-bold">
                                    <TextReveal>Kolekcja</TextReveal>
                                </h2>
                                <h3 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[0.9]">
                                    <MultiLineReveal>
                                        {`WYBRANE\nREZYDENCJE`}
                                    </MultiLineReveal>
                                </h3>
                            </div>
                        </div>
                        <Link
                            href="/demos/nieruchomosci/oferty"
                            className="group flex items-center gap-4 text-white hover:text-[#C5A059] transition-colors pb-2 border-b border-white/20 hover:border-[#C5A059]"
                        >
                            <span className="text-sm uppercase tracking-widest">Wszystkie oferty</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>

                    {/* Properties Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                        {featuredProperties.map((prop, idx) => (
                            <motion.div
                                key={prop.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="group cursor-pointer rounded-sm hover:shadow-[0_0_40px_-10px_rgba(197,160,89,0.15)] transition-shadow duration-700"
                            >
                                <ParallaxImage
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
                                    containerClassName="aspect-[3/4] mb-8 overflow-hidden"
                                >
                                    <div className="absolute top-6 left-6 flex items-center gap-3">
                                        <div className="w-8 h-[1px] bg-[#C5A059]" />
                                        <span className="text-white text-[10px] uppercase tracking-[0.25em] font-medium drop-shadow-md">
                                            {prop.tag}
                                        </span>
                                    </div>
                                </ParallaxImage>

                                <div>
                                    <div className="flex items-baseline justify-between mb-4 border-b border-white/10 pb-4">
                                        <div className="text-[#C5A059] text-xs uppercase tracking-widest">
                                            {prop.location}
                                        </div>
                                        <div className="text-white font-serif text-xl">
                                            {prop.price}
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                                        {prop.title}
                                    </h4>
                                    <div className="flex gap-4 text-gray-500 text-xs uppercase tracking-widest mt-4">
                                        <span>{prop.sqm} M²</span>
                                        <span>•</span>
                                        <span>{prop.beds} Pokoje</span>
                                        <span>•</span>
                                        <span>{prop.baths} Łazienki</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy & Stats Section */}
            <section className="bg-[#0a0a0a] w-full flex justify-center border-t border-white/5" style={{ paddingBlock: '140px' }}>
                <div className="max-w-[1400px] mx-auto w-full px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Left - Philosophy & Stats */}
                        <div className="lg:w-[55%] w-full flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-[#C5A059] text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 font-bold">Filozofia</h2>
                            <h3 className="text-3xl md:text-6xl font-serif font-bold text-white leading-[1.1] mb-8 w-full">
                                Architektura <br className="hidden md:block" /> Twojego Życia
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed w-full md:text-justify mb-12">
                                Tworzymy przestrzenie, które nie są tylko miejscem zamieszkania. Są sceną dla Twoich sukcesów, oazą spokoju i dziełem sztuki, w którym budzisz się każdego dnia.
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 w-full mt-10 md:mt-16">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col items-center md:items-start text-center md:text-left">
                                        <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">{stat.value}</div>
                                        <div className="text-[10px] text-[#C5A059] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Amenities List */}
                        <div className="lg:w-[45%] flex flex-col">
                            <div className="flex flex-col justify-between h-full">
                                {amenities.map((item, idx) => (
                                    <div key={idx} className="group border-b border-white/10 hover:border-[#C5A059] transition-colors duration-500 py-8 cursor-pointer">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-6">
                                                <span className="text-[#C5A059] text-xs font-bold tracking-widest">0{idx + 1}</span>
                                                <h4 className="text-2xl font-serif text-white group-hover:text-[#C5A059] transition-colors">{item.title}</h4>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section - Minimal */}
            {/* Final CTA - Massive & Minimal - Completed */}
            <section className="min-h-[40vh] bg-[#0a0a0a] w-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#C5A059]/5 opacity-50 mix-blend-overlay" />

                <div className="relative z-10 text-center px-6">
                    <p className="text-[#C5A059] text-xs uppercase tracking-[0.5em] mb-4 animate-pulse">Nowy Rozdział</p>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        GOTOWY NA <br /> <span className="text-[#C5A059]">WIĘCEJ?</span>
                    </h2>

                    <Link
                        href="/demos/nieruchomosci/kontakt"
                        className="inline-block text-white text-lg md:text-xl uppercase tracking-[0.3em] font-bold border-b border-[#C5A059] pb-2 hover:text-[#C5A059] hover:border-white transition-all duration-500"
                    >
                        Rozpocznij Podróż
                    </Link>
                </div>
            </section>
        </div>
    );
}
