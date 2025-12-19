"use client";

import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageSquare,
    User,
    Calendar
} from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-[#050505] w-full flex flex-col items-center relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#C5A059] opacity-[0.03] blur-[120px] pointer-events-none" />

            {/* Navbar Clearance Spacer */}
            <div className="h-40"></div>

            <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-[#C5A059] text-sm uppercase tracking-[0.3em] mb-4 font-bold">Kontakt</h2>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Rozpocznijmy współpracę</h1>

                    {/* Atomic Spacer */}
                    <div className="h-6"></div>

                    <p className="text-gray-400 max-w-[800px] mx-auto text-lg">
                        Nasz zespół ekspertów jest gotowy, aby pomóc Ci znaleźć Twoje wymarzone miejsce na ziemi lub zrealizować zyskowną inwestycję.
                    </p>
                </div>

                {/* Section Spacer */}
                <div className="h-20"></div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="flex flex-col justify-between h-full">
                        {/* Phone Card */}
                        <div className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl group hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden">
                            {/* Top Spacer */}
                            <div className="h-10"></div>

                            <div className="flex">
                                {/* Left Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>

                                <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="text-[#C5A059]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-2">Zadzwoń do nas</h4>
                                        <p className="text-gray-400 text-sm mb-1">+48 22 123 45 67</p>
                                        <p className="text-gray-400 text-sm">Pon - Pt, 9:00 - 18:00</p>
                                    </div>
                                </div>

                                {/* Right Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-10"></div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl group hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden">
                            {/* Top Spacer */}
                            <div className="h-10"></div>

                            <div className="flex">
                                {/* Left Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>

                                <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="text-[#C5A059]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-2">Napisz wiadomość</h4>
                                        <p className="text-gray-400 text-sm mb-1">biuro@horizonestates.pl</p>
                                        <p className="text-gray-400 text-sm">rezerwacje@horizonestates.pl</p>
                                    </div>
                                </div>

                                {/* Right Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-10"></div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl group hover:border-[#C5A059]/30 transition-all duration-500 overflow-hidden">
                            {/* Top Spacer */}
                            <div className="h-10"></div>

                            <div className="flex">
                                {/* Left Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>

                                <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                                    <div className="w-12 h-12 bg-[#C5A059]/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="text-[#C5A059]" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-2">Odwiedź nasze biuro</h4>
                                        <p className="text-gray-400 text-sm mb-1">ul. Złota 44</p>
                                        <p className="text-gray-400 text-sm">00-120 Warszawa, Polska</p>
                                    </div>
                                </div>

                                {/* Right Spacer */}
                                <div className="w-6 md:w-10 shrink-0"></div>
                            </div>

                            {/* Bottom Spacer */}
                            <div className="h-10"></div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-[#0F0F0F]/60 backdrop-blur-2xl border border-[#C5A059]/20 rounded-xl relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(197,160,89,0.2)]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 blur-3xl rounded-full translate-x-32 -translate-y-32" />

                        {/* Top Spacer */}
                        <div className="h-10"></div>

                        <div className="flex">
                            {/* Left Spacer */}
                            <div className="w-10 shrink-0"></div>

                            <div className="flex-1 flex flex-col">
                                <h3 className="text-2xl font-serif font-bold text-white relative z-10 text-center md:text-left">Formularz Zgłoszeniowy</h3>

                                {/* Atomic Spacer */}
                                <div className="h-8"></div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Imię i Nazwisko</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                            <input
                                                type="text"
                                                placeholder="Jan Kowalski"
                                                className="w-full bg-[#050505] border border-white/10 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-all text-center placeholder:text-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Adres Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                            <input
                                                type="email"
                                                placeholder="jan@przyklad.pl"
                                                className="w-full bg-[#050505] border border-white/10 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-all text-center placeholder:text-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Telefon</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                            <input
                                                type="tel"
                                                placeholder="+48 000 000 000"
                                                className="w-full bg-[#050505] border border-white/10 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-all text-center placeholder:text-center"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Temat Zapytania</label>
                                        <div className="relative">
                                            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                            <select className="w-full bg-[#050505] border border-white/10 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-all appearance-none cursor-pointer text-center">
                                                <option>Kupno nieruchomości</option>
                                                <option>Sprzedaż nieruchomości</option>
                                                <option>Wynajem prestiżowy</option>
                                                <option>Współpraca biznesowa</option>
                                                <option>Inne</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Twoja Wiadomość</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Opisz jak możemy Ci pomóc..."
                                            className="w-full bg-[#050505] border border-white/10 text-white px-4 py-4 rounded-lg focus:outline-none focus:border-[#C5A059] transition-all resize-none text-center placeholder:text-center"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <button className="w-full py-5 bg-[#C5A059] text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.3)] rounded-lg">
                                            Wyślij Wiadomość <Send size={18} />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Spacer */}
                            <div className="w-10 shrink-0"></div>
                        </div>

                        {/* Bottom Spacer */}
                        <div className="h-10"></div>
                    </div>
                </div>

                {/* Section Spacer */}
                <div className="h-24"></div>

                {/* Map Section */}
                <div className="h-[400px] w-full bg-[#0F0F0F]/60 backdrop-blur-xl border border-white/5 rounded-xl relative overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.268988394614!2d21.00292431570437!3d52.22968097976098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8ad7a0d2a9%3A0x8f1e3f3e6c364d1e!2sZ%C5%82ota%2044%2C%2000-120%20Warszawa!5e0!3m2!1spl!2spl!4v1649000000000!5m2!1spl!2spl"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Page Spacer */}
                <div className="h-24"></div>
            </div>
        </div>
    );
}
