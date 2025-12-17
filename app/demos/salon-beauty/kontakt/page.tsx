"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                service: '',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#F5F1E8] pb-[400px] relative">
            {/* Top Page Gradient (Background for Navbar visibility) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-0" />

            <div className="h-32 md:h-40 w-full relative z-10" />

            {/* Main Content Section - Two Column Layout */}
            <section className="px-6 md:px-4 w-full flex justify-center relative z-10">
                <div className="container-custom w-full max-w-7xl relative z-10 px-4 pb-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                        {/* LEFT COLUMN - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4 space-y-8 flex flex-col"
                        >
                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 leading-tight text-[#212121]">
                                    Napisz do{' '}
                                    <span className="text-[#D4AF37]">nas</span>
                                </h1>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
                                </p>
                            </div>

                            <div className="flex flex-col w-full" style={{ marginTop: '4rem' }}>
                                <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                                    <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#212121] font-medium font-montserrat">Email</h3>
                                        <p className="text-gray-600">kontakt@beautysalon.pl</p>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-[#D4AF37]/10 my-6" />

                                <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                                    <div className="p-3 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 text-[#E91E63]">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#212121] font-medium font-montserrat">Telefon</h3>
                                        <p className="text-gray-600">+48 500 600 700</p>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-[#D4AF37]/10 my-6" />

                                <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                                    <div className="p-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#212121] font-medium font-montserrat">Adres</h3>
                                        <p className="text-gray-600">ul. Piękna 10/12<br />00-549 Warszawa</p>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-[#D4AF37]/10 my-6" />

                                <div className="grid grid-cols-[auto_1fr] gap-x-4 items-start">
                                    <div className="p-3 rounded-full bg-[#E91E63]/10 border border-[#E91E63]/20 text-[#E91E63]">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#212121] font-medium font-montserrat">Godziny</h3>
                                        <p className="text-gray-600">Pn - Pt: 09-20<br />Sob: 10-18</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN - Form */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-8 flex flex-col"
                        >
                            {status === 'success' ? (
                                <div className="bg-white rounded-3xl shadow-lg w-full text-center py-16 px-8 flex-1 flex flex-col justify-center">
                                    <div className="inline-flex w-20 h-20 bg-[#D4AF37]/10 rounded-full items-center justify-center border border-[#D4AF37]/20 mb-6">
                                        <svg className="w-10 h-10 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl font-bold font-montserrat text-[#212121] mb-4">Dziękujemy!</h3>

                                    <p className="text-gray-600 text-lg leading-relaxed w-full block mb-6">
                                        Twoja wiadomość została wysłana.<br />
                                        Skontaktujemy się z Tobą najszybciej jak to możliwe.
                                    </p>

                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="group relative inline-block px-12 py-4 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none uppercase tracking-[0.15em] font-medium"
                                    >
                                        <span>Wyślij kolejną wiadomość</span>
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                    </button>
                                </div>
                            ) : (
                                <div className="bg-white rounded-3xl shadow-lg flex-1 flex flex-col justify-between" style={{ padding: '2rem' }}>
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%', justifyContent: 'space-between' }}>
                                        {/* Name and Email Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                            <div className="space-y-3">
                                                <label htmlFor="name" className="text-sm font-medium text-gray-600 ml-1">Imię i nazwisko</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Anna Kowalska"
                                                    className="w-full rounded-xl py-4 px-4 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#D4AF37] focus:bg-white transition-colors outline-none text-[#212121]"
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="email" className="text-sm font-medium text-gray-600 ml-1">Adres e-mail</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="anna@example.com"
                                                    className="w-full rounded-xl py-4 px-4 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#D4AF37] focus:bg-white transition-colors outline-none text-[#212121]"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone and Service Row */}
                                        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: '1.25rem' }}>
                                            <div className="space-y-3">
                                                <label htmlFor="phone" className="text-sm font-medium text-gray-600 ml-1">Telefon</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="500 600 700"
                                                    className="w-full rounded-xl py-4 px-4 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#D4AF37] focus:bg-white transition-colors outline-none text-[#212121]"
                                                />
                                            </div>

                                            <div className="space-y-3">
                                                <label htmlFor="service" className="text-sm font-medium text-gray-600 ml-1">Wybierz usługę</label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl py-4 px-4 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#D4AF37] focus:bg-white transition-colors appearance-none cursor-pointer outline-none text-[#212121]"
                                                >
                                                    <option value="" disabled className="bg-white">Wybierz usługę...</option>
                                                    <option value="manicure" className="bg-white">Manicure</option>
                                                    <option value="pedicure" className="bg-white">Pedicure</option>
                                                    <option value="makijaz" className="bg-white">Makijaż</option>
                                                    <option value="zabiegi" className="bg-white">Zabiegi na twarz</option>
                                                    <option value="inne" className="bg-white">Inne</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-3">
                                            <label htmlFor="message" className="text-sm font-medium text-gray-600 ml-1">Opowiedz nam o swoim pomyśle</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={6}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Jaki rodzaj zabiegu Cię interesuje? Czy masz jakieś szczególne oczekiwania?"
                                                className="w-full rounded-xl py-4 px-4 bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#D4AF37] focus:bg-white transition-colors resize-none leading-relaxed outline-none text-[#212121]"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-8 flex justify-center w-full">
                                            <button
                                                type="submit"
                                                disabled={status === 'loading'}
                                                className="group relative inline-flex items-center justify-center px-16 py-6 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none uppercase tracking-[0.15em] hover:tracking-[0.2em] font-medium text-xl gap-4"
                                            >
                                                {status === 'loading' ? (
                                                    <span className="flex items-center justify-center space-x-2">
                                                        <svg className="animate-spin h-5 w-5 text-[#D4AF37]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        <span>Wysyłanie...</span>
                                                    </span>
                                                ) : (
                                                    <>
                                                        <span>Wyślij wiadomość</span>
                                                        <Send size={18} />
                                                    </>
                                                )}
                                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="h-40 w-full" />

            {/* Map Section */}
            <section className="px-6 md:px-4 w-full flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-7xl bg-white rounded-3xl shadow-lg overflow-hidden"
                >
                    <div className="w-full h-[400px] lg:h-[500px] relative grayscale hover:grayscale-0 transition-all duration-1000">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.766761274157!2d21.016714476813877!3d52.22153257198279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd57e1bd066d%3A0x8f84a8eb3ca6d8dc!2zUGnEmWtuYSAxMC8xMiwgMDAtNTQ5IFdhcnN6YXdh!5e0!3m2!1spl!2spl!4v1734461000000!5m2!1spl!2spl"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </motion.div>
            </section>

            <div className="h-40 w-full" />

            {/* FAQ Section */}
            <section className="mt-32 pt-20 pb-20 px-4 w-full flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-4xl"
                >
                    <h2 className="text-3xl lg:text-4xl font-bold font-montserrat text-[#212121] mb-16 text-center">Częste pytania</h2>

                    <div className="space-y-6 w-full">
                        <details className="group [&_summary::-webkit-details-marker]:hidden w-full block">
                            <summary className="w-full py-6 cursor-pointer list-none text-lg font-medium text-[#212121] text-center border-b border-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                                Czy przed salonem jest dostępny parking?
                            </summary>
                            <div className="py-6 text-gray-600 leading-relaxed font-light text-center">
                                <p>Tak, dla naszych klientek dostępny jest bezpłatny parking bezpośrednio przed wejściem do salonu. Wjazd od ulicy Pięknej.</p>
                            </div>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden w-full block">
                            <summary className="w-full py-6 cursor-pointer list-none text-lg font-medium text-[#212121] text-center border-b border-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                                Jakie formy płatności akceptujecie?
                            </summary>
                            <div className="py-6 text-gray-600 leading-relaxed font-light text-center">
                                <p>Akceptujemy płatności gotówką, kartami płatniczymi (Visa, Mastercard) oraz BLIKiem. Możliwy jest również zakup voucherów prezentowych online.</p>
                            </div>
                        </details>

                        <details className="group [&_summary::-webkit-details-marker]:hidden w-full block">
                            <summary className="w-full py-6 cursor-pointer list-none text-lg font-medium text-[#212121] text-center border-b border-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                                Czy muszę rezerwować wizytę wcześniej?
                            </summary>
                            <div className="py-6 text-gray-600 leading-relaxed font-light text-center">
                                <p>Zdecydowanie zalecamy wcześniejszą rezerwację, aby zagwarantować dogodny termin. Możesz to zrobić telefonicznie lub przez formularz na tej stronie.</p>
                            </div>
                        </details>
                    </div>
                </motion.div>
            </section>

            <div className="h-40 w-full" />
        </div>
    );
}
