"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    Users,
    Award,
    Sparkles,
    History,
    Target,
    Heart,
    ShieldCheck
} from "lucide-react";

const values = [
    {
        title: "Integrność",
        description: "Działamy z pełną transparentnością i uczciwością na każdym etapie współpracy.",
        icon: <ShieldCheck className="w-8 h-8 text-[#C5A059]" />
    },
    {
        title: "Doskonałość",
        description: "Dążymy do perfekcji w każdym detalu, od wyboru oferty po finalizację transakcji.",
        icon: <Award className="w-8 h-8 text-[#C5A059]" />
    },
    {
        title: "Innowacja",
        description: "Wykorzystujemy najnowsze technologie, by prezentować nieruchomości w sposób rewolucyjny.",
        icon: <Sparkles className="w-8 h-8 text-[#C5A059]" />
    }
];

export default function AboutPage() {
    return (
        <div className="bg-[#050505] w-full flex flex-col items-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#C5A059] opacity-[0.03] blur-[120px] pointer-events-none" />

            {/* Navbar Clearance Spacer */}
            <div className="h-40"></div>

            <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col items-center text-center md:items-start md:text-left animate-[fadeIn_0.8s_ease-out]">
                        <h2 className="text-[#C5A059] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Nasza Historia</h2>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">Definiujemy nową erę luksusu.</h1>

                        {/* Atomic Spacer */}
                        <div className="h-6"></div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Horizon Estates powstało z pasji do wyjątkowej architektury i pragnienia dostarczania usług na poziomie niespotykanym dotąd na polskim rynku. Nasza podróż zaczęła się 15 lat temu od małego zespołu wizjonerów.
                        </p>

                        {/* Atomic Spacer */}
                        <div className="h-6"></div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Dziś jesteśmy liderem w segmencie nieruchomości premium, łącząc globalne standardy z lokalną wiedzą i indywidualnym podejściem do każdego klienta.
                        </p>
                    </div>

                    <div className="relative h-[500px] border border-[#C5A059]/30 p-4 animate-[fadeIn_0.8s_ease-out_0.2s_both]">
                        <div className="absolute inset-4 overflow-hidden">
                            <Image
                                src="/assets/demos/nieruchomosci/hero.png"
                                alt="Modern Architecture"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section Spacer */}
                <div className="h-32"></div>

                {/* Stats Section */}
                <div className="border border-white/5 rounded-xl p-8 md:p-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-2">15+</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Lat na rynku</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-2">1.2mld</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Aktywów</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-2">25</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Nagród</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-serif font-bold text-[#C5A059] mb-2">100%</div>
                            <div className="text-[10px] text-gray-500 uppercase tracking-widest">Dyskrecji</div>
                        </div>
                    </div>
                </div>

                {/* Section Spacer */}
                <div className="h-32"></div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden">
                        {/* Top Spacer */}
                        <div className="h-10"></div>

                        <div className="flex text-center md:text-left">
                            {/* Left Spacer */}
                            <div className="w-6 md:w-10 shrink-0"></div>

                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-4">
                                    <Target className="text-[#C5A059]" size={32} />
                                </div>

                                {/* Atomic Spacer */}
                                <div className="h-4"></div>

                                <h3 className="text-2xl font-serif font-bold text-white">Nasza Misja</h3>

                                {/* Atomic Spacer */}
                                <div className="h-6"></div>

                                <p className="text-gray-400 leading-relaxed text-center md:text-left">
                                    Dostarczanie wyjątkowych doświadczeń i nieruchomości, które nie są tylko miejscem zamieszkania, ale inspiracją do lepiej życia. Tworzymy relacje oparte na zaufaniu i profesjonalizmie.
                                </p>
                            </div>

                            {/* Right Spacer */}
                            <div className="w-6 md:w-10 shrink-0"></div>
                        </div>

                        {/* Bottom Spacer */}
                        <div className="h-10"></div>
                    </div>

                    <div className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl overflow-hidden">
                        {/* Top Spacer */}
                        <div className="h-10"></div>

                        <div className="flex text-center md:text-left">
                            {/* Left Spacer */}
                            <div className="w-6 md:w-10 shrink-0"></div>

                            <div className="flex-1 flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 bg-[#C5A059]/10 rounded-full flex items-center justify-center mb-4">
                                    <Heart className="text-[#C5A059]" size={32} />
                                </div>

                                {/* Atomic Spacer */}
                                <div className="h-4"></div>

                                <h3 className="text-2xl font-serif font-bold text-white">Nasza Wizja</h3>

                                {/* Atomic Spacer */}
                                <div className="h-6"></div>

                                <p className="text-gray-400 leading-relaxed text-center md:text-left">
                                    Być pierwszym wyborem dla najbardziej wymagających inwestorów i osób szukających swojego wymarzonego domu w segmencie luksusowym na świecie.
                                </p>
                            </div>

                            {/* Right Spacer */}
                            <div className="w-6 md:w-10 shrink-0"></div>
                        </div>

                        {/* Bottom Spacer */}
                        <div className="h-10"></div>
                    </div>
                </div>

                {/* Section Spacer */}
                <div className="h-32"></div>

                {/* Values Header */}
                <div className="text-center">
                    <h2 className="text-[#C5A059] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Wartości</h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">To, w co wierzymy</h3>
                </div>

                {/* Section Spacer */}
                <div className="h-16"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl text-center group hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Top Spacer */}
                            <div className="h-10"></div>

                            <div className="flex">
                                {/* Left Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>

                                <div className="flex-1 flex flex-col items-center">
                                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {val.icon}
                                    </div>

                                    {/* Atomic Spacer */}
                                    <div className="h-4"></div>

                                    <h4 className="text-xl font-serif font-bold text-white">{val.title}</h4>

                                    {/* Atomic Spacer */}
                                    <div className="h-4"></div>

                                    <p className="text-gray-400 text-sm leading-relaxed text-center px-2">{val.description}</p>
                                </div>

                                {/* Right Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-10"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Page Spacer */}
                <div className="h-24"></div>
            </div>
        </div>
    );
}
