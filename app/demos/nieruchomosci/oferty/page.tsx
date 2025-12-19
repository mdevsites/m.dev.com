"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Search,
    Filter,
    ArrowRight,
    Maximize,
    Bed,
    Bath,
    MapPin,
    ChevronDown
} from "lucide-react";

import { allProperties } from "../data";

export default function ListingsPage() {
    const [filterStatus, setFilterStatus] = useState("Wszystkie");
    const [filterType, setFilterType] = useState("Wszystkie");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProperties = allProperties.filter(prop => {
        const matchesStatus = filterStatus === "Wszystkie" || prop.status === filterStatus;
        const matchesType = filterType === "Wszystkie" || prop.type === filterType;
        const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prop.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesType && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center w-full relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#C5A059] opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10">
                {/* Fixed Spacer for Navbar */}
                <div className="h-40" />

                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="text-[#C5A059] text-sm md:text-xs uppercase tracking-[0.4em] mb-6 font-bold">Nasza Kolekcja</h2>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8">
                        Przeglądaj <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Oferty</span>
                    </h1>
                    <div className="flex justify-center w-full">
                        <p className="text-gray-400 max-w-[600px] text-lg leading-relaxed font-light text-center">
                            Skorzystaj z filtrów, aby znaleźć nieruchomość, która idealnie odpowiada Twoim potrzebom i marzeniom.
                        </p>
                    </div>
                </div>

                {/* Spacer between Description and Filters */}
                <div className="h-20" />

                <div className="flex justify-center w-full">
                    <div className="w-full max-w-4xl bg-[#0F0F0F]/90 backdrop-blur-2xl border border-white/10 rounded-2xl lg:rounded-full shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center p-2">
                        {/* Left Spacer */}
                        <div className="hidden lg:block w-12 shrink-0 h-full"></div>

                        {/* Search Input */}
                        <div className="w-full lg:flex-1 relative border-b lg:border-b-0 border-white/5 group transition-colors hover:bg-white/[0.02] lg:rounded-l-full py-4 lg:py-3 px-6">
                            <label className="block text-center lg:text-left text-[#C5A059] text-[10px] uppercase tracking-widest font-bold mb-2">Lokalizacja</label>
                            <div className="relative flex items-center justify-center lg:justify-start">
                                <Search className="text-gray-500 group-hover:text-white transition-colors mr-3 h-4 w-4" />
                                <input
                                    type="text"
                                    placeholder="Wpisz miasto..."
                                    className="w-full bg-transparent border-none text-white p-0 focus:ring-0 placeholder:text-gray-600 font-light text-base leading-none text-center lg:text-left"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Atomic Spacer */}
                        <div className="hidden lg:block w-6 shrink-0"></div>

                        {/* Status Select */}
                        <div className="w-full lg:flex-1 relative border-b lg:border-b-0 border-white/5 group transition-colors hover:bg-white/[0.02] py-4 lg:py-3 px-6">
                            <label className="block text-center lg:text-left text-[#C5A059] text-[10px] uppercase tracking-widest font-bold mb-2">Status</label>
                            <div className="relative flex items-center justify-center lg:justify-start">
                                <select
                                    className="w-full bg-transparent border-none text-white p-0 pr-8 appearance-none focus:ring-0 cursor-pointer font-light text-base leading-none text-center lg:text-left"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="Wszystkie" className="bg-[#121212]">Dowolny</option>
                                    <option value="Sprzedaż" className="bg-[#121212]">Sprzedaż</option>
                                    <option value="Wynajem" className="bg-[#121212]">Wynajem</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-white pointer-events-none transition-colors" size={14} />
                            </div>
                        </div>

                        {/* Atomic Spacer */}
                        <div className="hidden lg:block w-6 shrink-0"></div>

                        {/* Type Select */}
                        <div className="w-full lg:flex-1 relative group transition-colors hover:bg-white/[0.02] py-4 lg:py-3 px-6">
                            <label className="block text-center lg:text-left text-[#C5A059] text-[10px] uppercase tracking-widest font-bold mb-2">Typ</label>
                            <div className="relative flex items-center justify-center lg:justify-start">
                                <select
                                    className="w-full bg-transparent border-none text-white p-0 pr-8 appearance-none focus:ring-0 cursor-pointer font-light text-base leading-none text-center lg:text-left"
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                >
                                    <option value="Wszystkie" className="bg-[#121212]">Wszystkie</option>
                                    <option value="Apartament" className="bg-[#121212]">Apartament</option>
                                    <option value="Willa" className="bg-[#121212]">Willa</option>
                                    <option value="Loft" className="bg-[#121212]">Loft</option>
                                </select>
                                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 group-hover:text-white pointer-events-none transition-colors" size={14} />
                            </div>
                        </div>

                        {/* Atomic Spacer */}
                        <div className="hidden lg:block w-6 shrink-0"></div>

                        {/* Search Button */}
                        <div className="p-2 shrink-0 flex justify-end w-full lg:w-auto">
                            <button className="w-full lg:w-12 lg:h-12 bg-[#C5A059] rounded-xl lg:rounded-full text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                <Search size={20} />
                                <span className="lg:hidden ml-2 font-bold uppercase tracking-widest text-sm">Szukaj</span>
                            </button>
                        </div>

                        {/* Right Spacer */}
                        <div className="hidden lg:block w-12 shrink-0 h-full"></div>
                    </div>
                </div>

                {/* Atomic Spacer between Filters and Results */}
                <div className="h-24 lg:h-32"></div>

                {/* Results Count */}
                <div className="mb-10 flex items-center justify-between text-gray-400 text-xs uppercase tracking-widest">
                    <span>Znaleziono: <span className="text-white font-bold">{filteredProperties.length}</span> ofert</span>
                    <span className="hidden md:inline">Sortuj według: <span className="text-[#C5A059] cursor-pointer font-bold border-b border-[#C5A059]/30 hover:border-[#C5A059] transition-all">Najnowsze</span></span>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredProperties.map((prop, idx) => (
                        <div
                            key={prop.id}
                            className="group bg-[#0F0F0F]/40 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col hover:border-[#C5A059]/50 hover:shadow-[0_20px_60px_-15px_rgba(197,160,89,0.2)] transition-all duration-700 rounded-xl animate-[fadeIn_0.6s_ease-out_both]"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="relative h-[300px] overflow-hidden">
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-700" />

                                {/* Minimalist Labels */}
                                <div className="absolute top-6 left-6 flex flex-col gap-2 items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[1px] bg-[#C5A059]" />
                                        <span className="text-white text-[10px] uppercase tracking-[0.25em] font-medium drop-shadow-lg">
                                            {prop.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 pl-[44px]">
                                        <span className="text-white/90 text-[10px] uppercase tracking-[0.2em] font-light drop-shadow-lg">
                                            {prop.type}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col">
                                {/* Top Spacer */}
                                <div className="h-8 md:h-10"></div>

                                {/* Left/Right Spacers with Content */}
                                <div className="flex flex-1">
                                    <div className="w-6 md:w-10 shrink-0"></div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 text-[#C5A059] text-[10px] uppercase tracking-[0.2em] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <MapPin size={12} className="group-hover:scale-110 transition-transform" /> {prop.location}
                                        </div>
                                        <h4 className="text-2xl font-serif font-bold text-white mb-8 group-hover:text-[#C5A059] transition-colors duration-500">
                                            {prop.title}
                                        </h4>

                                        {/* Atomic Spacer */}
                                        <div className="h-6"></div>

                                        <div className="grid grid-cols-3 gap-3 mb-10">
                                            <div className="bg-white/5 rounded-lg p-6 border border-white/5 group-hover:border-[#C5A059]/20 group-hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3 px-2 md:px-6 text-center">
                                                <Maximize size={16} className="text-[#C5A059] shrink-0 hidden sm:block" />
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-white font-medium text-lg">{prop.sqm}</span>
                                                    <span className="text-gray-400 text-[10px]">m²</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-6 border border-white/5 group-hover:border-[#C5A059]/20 group-hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3 px-2 md:px-6 text-center">
                                                <Bed size={16} className="text-[#C5A059] shrink-0 hidden sm:block" />
                                                <span className="text-white font-medium text-lg">{prop.beds}</span>
                                            </div>
                                            <div className="bg-white/5 rounded-lg p-6 border border-white/5 group-hover:border-[#C5A059]/20 group-hover:bg-white/[0.07] transition-all duration-500 flex items-center justify-center gap-3 px-2 md:px-6 text-center">
                                                <Bath size={16} className="text-[#C5A059] shrink-0 hidden sm:block" />
                                                <span className="text-white font-medium text-lg">{prop.baths}</span>
                                            </div>
                                        </div>

                                        {/* Atomic Spacer */}
                                        <div className="h-6"></div>

                                        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-white font-serif text-2xl font-bold">{prop.price}</span>
                                            <Link
                                                href={`/demos/nieruchomosci/oferty/${prop.id}`}
                                                className="w-14 h-14 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] hover:bg-[#C5A059] hover:border-[#C5A059] hover:text-black hover:scale-110 hover:shadow-[0_10px_30px_-5px_rgba(197,160,89,0.4)] transition-all duration-500 group/btn"
                                            >
                                                <ArrowRight size={20} className="group-hover/btn:rotate-[-45deg] transition-transform duration-500" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="w-6 md:w-10 shrink-0"></div>
                                </div>

                                {/* Bottom Spacer */}
                                <div className="h-8 md:h-10"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProperties.length === 0 && (
                    <div className="py-24 text-center">
                        <h3 className="text-2xl font-serif text-gray-500 mb-6">Nie znaleźliśmy ofert spełniających Twoje kryteria.</h3>
                        <button
                            onClick={() => {
                                setFilterStatus("Wszystkie");
                                setFilterType("Wszystkie");
                                setSearchQuery("");
                            }}
                            className="text-[#C5A059] border-b border-[#C5A059] uppercase tracking-widest text-xs font-bold pb-1 hover:text-white hover:border-white transition-colors"
                        >
                            Wyczyść filtry
                        </button>
                    </div>
                )}
            </div>
        </div >
    );
}
