"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Maximize,
    Bed,
    Bath,
    MapPin,
    Calendar,
    Zap,
    CheckCircle2,
    Phone,
    Mail
} from "lucide-react";
import { allProperties } from "../../data";
import { notFound } from "next/navigation";

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const property = allProperties.find(p => p.id === id);

    if (!property) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center w-full relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#C5A059] opacity-[0.03] blur-[120px] pointer-events-none" />

            {/* Hero Section with Image */}
            <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="max-w-7xl mx-auto w-full px-6 pb-12 md:pb-16 relative z-10 flex flex-col items-center text-center">
                        {/* Back Link */}
                        <Link
                            href="/demos/nieruchomosci/oferty"
                            className="inline-flex items-center gap-2 text-[#C5A059] mb-8 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
                        >
                            <ArrowLeft size={16} /> Powrót do ofert
                        </Link>

                        {/* Title & Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <div className="flex items-center gap-2 text-[#C5A059] text-sm uppercase tracking-widest mb-4">
                                <MapPin size={16} /> {property.location}
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
                                {property.title}
                            </h1>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                                <p className="text-gray-400 font-medium text-lg">{property.type} • {property.status}</p>
                                <p className="text-[#C5A059] text-3xl md:text-4xl font-serif font-bold">{property.price}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
                {/* Atomic Spacer */}
                <div className="h-16 md:h-24"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Left Content - Main Info */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Quick Stats Grid */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold text-white mb-8">Specyfikacja</h3>

                            {/* Atomic Spacer */}
                            <div className="h-6"></div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-white/5 rounded-lg p-6 border border-white/5 hover:border-[#C5A059]/20 hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3">
                                    <Maximize size={16} className="text-[#C5A059] shrink-0" />
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-white font-medium text-lg">{property.sqm}</span>
                                        <span className="text-gray-400 text-xs">m²</span>
                                    </div>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/5 hover:border-[#C5A059]/20 hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3">
                                    <Bed size={16} className="text-[#C5A059] shrink-0" />
                                    <span className="text-white font-medium text-lg">{property.beds}</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/5 hover:border-[#C5A059]/20 hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3">
                                    <Bath size={16} className="text-[#C5A059] shrink-0" />
                                    <span className="text-white font-medium text-lg">{property.baths}</span>
                                </div>
                                <div className="bg-white/5 rounded-lg p-6 border border-white/5 hover:border-[#C5A059]/20 hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3">
                                    <Calendar size={16} className="text-[#C5A059] shrink-0" />
                                    <span className="text-white font-medium text-lg">{property.yearBuilt}</span>
                                </div>
                            </div>
                        </section>

                        {/* Atomic Spacer */}
                        <div className="h-8"></div>

                        {/* Description */}
                        <section className="text-center md:text-left flex flex-col items-center md:items-start">
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">O nieruchomości</h3>

                            {/* Atomic Spacer */}
                            <div className="h-6"></div>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent mb-8"></div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {property.description}
                            </p>
                        </section>

                        {/* Atomic Spacer */}
                        <div className="h-8"></div>

                        {/* Features */}
                        <section className="text-center md:text-left flex flex-col items-center md:items-start">
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Udogodnienia i Cechy</h3>

                            {/* Atomic Spacer */}
                            <div className="h-6"></div>

                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent mb-8"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/5">
                                        <CheckCircle2 size={20} className="text-[#C5A059] shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>

                    {/* Right Sidebar - Contact Form (Sticky) */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="bg-[#0F0F0F]/60 backdrop-blur-2xl border border-[#C5A059]/20 rounded-xl relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(197,160,89,0.2)]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 blur-3xl rounded-full translate-x-16 -translate-y-16" />

                            {/* Top Spacer */}
                            <div className="h-10"></div>

                            {/* Left/Right Spacers with Content */}
                            <div className="flex">
                                <div className="w-10 shrink-0"></div>
                                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className="relative z-10">
                                        <h4 className="text-white font-serif text-2xl mb-2">Zapytaj o Ofertę</h4>
                                        <p className="text-gray-400 text-sm">Skontaktuj się z nami w sprawie tej nieruchomości</p>
                                    </div>

                                    {/* Atomic Spacer */}
                                    <div className="h-8"></div>

                                    <div className="space-y-4 relative z-10">
                                        <input
                                            type="text"
                                            placeholder="Imię i Nazwisko"
                                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors text-sm text-center placeholder:text-center"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors text-sm text-center placeholder:text-center"
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Telefon"
                                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors text-sm text-center placeholder:text-center"
                                        />
                                        <textarea
                                            placeholder="Wiadomość..."
                                            rows={4}
                                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-colors text-sm resize-none text-center placeholder:text-center"
                                        />
                                        <button className="w-full py-4 bg-[#C5A059] text-black font-bold uppercase tracking-widest text-xs hover:bg-white hover:scale-105 transition-all duration-300 rounded-lg shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                            Wyślij Wiadomość
                                        </button>
                                    </div>

                                    {/* Atomic Spacer */}
                                    <div className="h-8"></div>

                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                    {/* Atomic Spacer */}
                                    <div className="h-8"></div>

                                    <div className="space-y-4 relative z-10 w-full flex flex-col items-center md:items-start">
                                        <p className="text-gray-500 text-xs uppercase tracking-widest">Lub zadzwoń</p>
                                        <a href="tel:+48221234567" className="flex flex-col md:flex-row items-center gap-3 text-gray-400 hover:text-[#C5A059] transition-colors text-sm group text-center md:text-left">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/10 transition-colors">
                                                <Phone size={18} className="group-hover:text-[#C5A059]" />
                                            </div>
                                            <span>+48 22 123 45 67</span>
                                        </a>
                                        <a href="mailto:biuro@horizonestates.pl" className="flex flex-col md:flex-row items-center gap-3 text-gray-400 hover:text-[#C5A059] transition-colors text-sm group text-center md:text-left">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C5A059]/10 transition-colors">
                                                <Mail size={18} className="group-hover:text-[#C5A059]" />
                                            </div>
                                            <span>biuro@horizonestates.pl</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-10 shrink-0"></div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-10"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom Spacer */}
                <div className="h-24"></div>
            </div>
        </div>
    );
}
