'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        deadline: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Mockup: Formularz wysłany! (Dane w konsoli)');
        console.log('Form Data:', formData);
    };

    return (
        <main className="min-h-screen selection:bg-purple-500/30 font-sans relative">
            {/* Background Decor */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[100px]" />
            </div>

            {/* Spacer for Navbar */}
            <div className="h-24 md:h-32 w-full relative z-10" />

            <div className="container-custom w-full max-w-7xl relative z-10 px-4 pb-12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* LEWA KOLUMNA - TEXT & INFO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 space-y-8 pt-8"
                    >
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Stwórzmy razem <br />
                                <span className="gradient-text">coś wielkiego</span>
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Opowiedz nam o swoim pomyśle. Pomożemy Ci przekształcić go w nowoczesną stronę internetową, która przyciągnie klientów.
                            </p>
                        </div>

                        <div className="space-y-6" style={{ marginTop: '4rem' }}>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-purple-400">
                                    <FiMail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">Napisz do nas</h3>
                                    <p className="text-gray-400">m.devkontakt@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-pink-400">
                                    <FiPhone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">Zadzwoń</h3>
                                    <p className="text-gray-400">+48 691 630 461</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* PRAWA KOLUMNA - FORMULARZ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-8"
                    >
                        <div className="glass-card" style={{ padding: '2rem' }}>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                                {/* SEKCJA 1: DANE */}
                                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                    <div className="space-y-3">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Imię i nazwisko</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Jan Kowalski"
                                            className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Adres e-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="jan@example.com"
                                            className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* SEKCJA 2: PROJEKT */}
                                <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                    <div className="space-y-3">
                                        <label htmlFor="projectType" className="text-sm font-medium text-gray-300 ml-1">Typ projektu</label>
                                        <select
                                            id="projectType"
                                            name="projectType"
                                            required
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled className="bg-slate-900">Wybierz typ...</option>
                                            <option value="landing_page" className="bg-slate-900">Landing Page</option>
                                            <option value="corporate_site" className="bg-slate-900">Strona Firmowa / Wizytówka</option>
                                            <option value="ecommerce" className="bg-slate-900">Sklep E-commerce</option>
                                            <option value="web_app" className="bg-slate-900">Aplikacja Dedykowana</option>
                                            <option value="other" className="bg-slate-900">Inny projekt</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label htmlFor="budget" className="text-sm font-medium text-gray-300 ml-1">Budżet</label>
                                        <input
                                            type="text"
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            placeholder="np. 2000 PLN"
                                            className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Opowiedz nam o swoim pomyśle</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={8}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Jaki jest cel strony? Kto jest Twoim klientem? Masz już jakieś inspiracje?"
                                        className="input w-full rounded-xl py-4 bg-white/5 border-white/10 hover:border-white/20 focus:border-purple-500/50 focus:bg-white/10 transition-colors resize-none leading-relaxed"
                                    />
                                </div>

                                <div className="flex items-center justify-end" style={{ paddingTop: '1rem' }}>
                                    <button
                                        type="submit"
                                        className="btn-glass w-full md:w-auto"
                                    >
                                        Wyślij zapytanie
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
