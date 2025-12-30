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
    const [activeDropdown, setActiveDropdown] = useState<"status" | "type" | null>(null);

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
                {/* Click Overlay - Moved here to share stacking context */}
                {activeDropdown && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setActiveDropdown(null)}
                    />
                )}

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

                {/* Inline Filter Tags - Modern Tag System (Balanced Medium) */}
                <div className="flex flex-wrap items-center gap-4 justify-center">
                    {/* Location Tag */}
                    <div className="relative group">
                        <div className="bg-[#0F0F0F]/60 backdrop-blur-md border border-white/10 rounded-full hover:border-[#C5A059]/50 transition-all duration-300 cursor-pointer overflow-hidden">
                            <div className="h-12 min-w-[200px] flex items-center justify-center px-4">
                                {/* Edge Spacer */}
                                <div className="w-6 shrink-0" />
                                <Search className="text-gray-500 group-hover:text-[#C5A059] transition-colors" size={14} />
                                <input
                                    type="text"
                                    placeholder="Lokalizacja"
                                    className="bg-transparent border-none outline-none focus:outline-none text-white text-[11px] uppercase tracking-[0.15em] p-0 focus:ring-0 placeholder:text-gray-500 w-full font-semibold text-center font-sans placeholder:uppercase"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoComplete="off"
                                />
                                {/* Balance Spacer */}
                                <div className="w-2 shrink-0" />
                            </div>
                        </div>
                    </div>

                    {/* Status Tag */}
                    <div className={`relative group ${activeDropdown === 'status' ? 'z-50' : 'z-30'}`}>
                        <div
                            onClick={() => setActiveDropdown(activeDropdown === 'status' ? null : 'status')}
                            className={`bg-[#0F0F0F]/60 backdrop-blur-md border ${activeDropdown === 'status' ? 'border-white/10 border-b-transparent rounded-t-[24px] rounded-b-none bg-[#0F0F0F]/95' : 'border-white/10 group-hover:border-[#C5A059]/50 rounded-full'} transition-all duration-300 cursor-pointer overflow-hidden relative z-10`}
                        >
                            <div className="h-12 min-w-[180px] flex items-center justify-between px-4">
                                <div className="flex-1 flex items-center justify-center pl-4">
                                    <span className="text-white text-[11px] uppercase tracking-[0.15em] font-semibold text-center font-sans select-none">
                                        {filterStatus === 'Wszystkie' ? 'Status' : filterStatus}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`text-gray-500 ${activeDropdown === 'status' ? 'text-[#C5A059] rotate-180' : 'group-hover:text-[#C5A059]'} transition-all duration-300 pointer-events-none shrink-0 ml-2`}
                                    size={14}
                                />
                                {/* Edge Spacer */}
                                <div className="w-6 shrink-0" />
                            </div>
                        </div>

                        {/* Custom Dropdown Menu - Merged Shape */}
                        <div className={`absolute top-full left-0 w-full -mt-[1px] bg-[#0F0F0F]/95 backdrop-blur-xl border border-white/10 border-t-full border-t-transparent rounded-b-[24px] rounded-t-none overflow-hidden transition-all duration-300 origin-top shadow-2xl ${activeDropdown === 'status' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                            {['Wszystkie', 'Sprzedaż', 'Wynajem'].map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        setFilterStatus(option);
                                        setActiveDropdown(null);
                                    }}
                                    className={`px-6 py-5 text-sm uppercase tracking-[0.15em] font-medium text-center cursor-pointer transition-colors border-b border-white/5 last:border-none ${filterStatus === option ? 'text-[#C5A059] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {option === 'Wszystkie' ? 'Wszystkie' : option}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Type Tag */}
                    <div className={`relative group ${activeDropdown === 'type' ? 'z-50' : 'z-30'}`}>
                        <div
                            onClick={() => setActiveDropdown(activeDropdown === 'type' ? null : 'type')}
                            className={`bg-[#0F0F0F]/60 backdrop-blur-md border ${activeDropdown === 'type' ? 'border-white/10 border-b-transparent rounded-t-[24px] rounded-b-none bg-[#0F0F0F]/95' : 'border-white/10 group-hover:border-[#C5A059]/50 rounded-full'} transition-all duration-300 cursor-pointer overflow-hidden relative z-10`}
                        >
                            <div className="h-12 min-w-[180px] flex items-center justify-between px-4">
                                <div className="flex-1 flex items-center justify-center pl-4">
                                    <span className="text-white text-[11px] uppercase tracking-[0.15em] font-semibold text-center font-sans select-none">
                                        {filterType === 'Wszystkie' ? 'Typ: Wszystkie' : filterType}
                                    </span>
                                </div>
                                <ChevronDown
                                    className={`text-gray-500 ${activeDropdown === 'type' ? 'text-[#C5A059] rotate-180' : 'group-hover:text-[#C5A059]'} transition-all duration-300 pointer-events-none shrink-0 ml-2`}
                                    size={14}
                                />
                                {/* Edge Spacer */}
                                <div className="w-6 shrink-0" />
                            </div>
                        </div>

                        {/* Custom Dropdown Menu - Merged Shape */}
                        <div className={`absolute top-full left-0 w-full -mt-[1px] bg-[#0F0F0F]/95 backdrop-blur-xl border border-white/10 border-t-full border-t-transparent rounded-b-[24px] rounded-t-none overflow-hidden transition-all duration-300 origin-top shadow-2xl ${activeDropdown === 'type' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                            {['Wszystkie', 'Apartament', 'Willa', 'Loft'].map((option) => (
                                <div
                                    key={option}
                                    onClick={() => {
                                        setFilterType(option);
                                        setActiveDropdown(null);
                                    }}
                                    className={`px-6 py-5 text-sm uppercase tracking-[0.15em] font-medium text-center cursor-pointer transition-colors border-b border-white/5 last:border-none ${filterType === option ? 'text-[#C5A059] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {option === 'Wszystkie' ? 'Wszystkie' : option}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Search Action Tag */}
                    <button className="group bg-[#C5A059] rounded-full hover:bg-white transition-all duration-300">
                        <div className="h-12 min-w-[140px] flex items-center justify-center px-4">
                            {/* Edge Spacer */}
                            <div className="w-4 shrink-0" />
                            <Search className="text-black" size={14} />
                            <div className="w-2 shrink-0" />
                            <span className="text-black text-[11px] font-bold uppercase tracking-[0.2em] font-sans">Szukaj</span>
                            {/* Edge Spacer */}
                            <div className="w-4 shrink-0" />
                        </div>
                    </button>
                </div>


                {/* Atomic Spacer between Filters and Results */}
                <div className="h-24 lg:h-32"></div>

                {/* Results Count */}
                <div className="flex items-center justify-between text-gray-400 text-xs uppercase tracking-widest">
                    <span>Znaleziono: <span className="text-white font-bold">{filteredProperties.length}</span> ofert</span>
                    <span className="hidden md:inline">Sortuj według: <span className="text-[#C5A059] cursor-pointer font-bold border-b border-[#C5A059]/30 hover:border-[#C5A059] transition-all">Najnowsze</span></span>
                </div>

                {/* Spacer */}
                <div className="h-8" />

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
                                        <h4 className="text-2xl font-serif font-bold text-white mb-8 group-hover:text-[#C5A059] transition-colors duration-500 min-h-[64px] flex items-end">
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

                                        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                        {/* Spacer */}
                                        <div className="h-8" />

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

                {/* Spacer */}
                <div className="h-32" />

                {/* Premium CTA Section */}
                <div className="relative rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-[#C5A059] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

                    <div className="relative px-8 py-20 md:px-12 md:py-32 flex flex-col items-center text-center border border-white/5 rounded-3xl">
                        {/* Top Edge Spacer */}
                        <div className="h-10" />

                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">
                            Nie znalazłeś <span className="text-[#C5A059]">wymarzonej</span> oferty?
                        </h3>

                        {/* Spacer */}
                        <div className="h-10" />

                        <p className="text-gray-400 max-w-4xl text-lg font-light leading-relaxed">
                            Wiele naszych najbardziej ekskluzywnych nieruchomości znajduje się w sprzedaży "off-market".
                            Skontaktuj się z nami, aby uzyskać dostęp do prywatnej kolekcji.
                        </p>

                        {/* Spacer */}
                        <div className="h-12" />

                        <button className="bg-[#C5A059] rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(197,160,89,0.3)] group/btn">
                            <div className="flex items-center justify-center h-16">
                                <div className="w-12 shrink-0" />
                                <span className="text-black font-bold uppercase tracking-widest text-xs whitespace-nowrap">Skontaktuj się z nami</span>
                                <div className="w-12 shrink-0" />
                            </div>
                        </button>

                        {/* Bottom Edge Spacer */}
                        <div className="h-10" />
                    </div>
                </div>

                {/* Spacer between CTA and Footer */}
                <div className="h-24" />
            </div>
        </div >
    );
}
