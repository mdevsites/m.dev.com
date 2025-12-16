"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, ChevronDown } from "lucide-react";

export default function ContactPage() {
    return (

        <div className="min-h-screen bg-[#F5F1E8] pb-[400px] relative">


            {/* Top Page Gradient (Background for Navbar visibility) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-0" />

            <div className="h-32 md:h-40 w-full relative z-10" />


            {/* Content Section - Vertical Stacked Card */}
            <section className="px-6 md:px-4 w-full flex justify-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-7xl bg-white rounded-3xl shadow-[0_45px_100px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/5 overflow-hidden flex flex-col"
                >
                    {/* Top Section - Contact Info (Gold) - Desktop only */}
                    <div className="hidden md:flex w-full bg-gradient-to-r from-[#D4AF37] to-[#E5C558] text-white py-10 px-12 relative overflow-hidden flex-col justify-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                                <li className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Adres</h3>
                                        <p className="text-white/90 font-light text-sm leading-relaxed">
                                            ul. Piękna 10/12<br />
                                            00-549 Warszawa
                                        </p>
                                    </div>
                                </li>

                                <li className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                                        <p className="text-white/90 font-light text-sm">
                                            <a href="tel:+48500600700" className="hover:text-white transition-colors">+48 500 600 700</a>
                                        </p>
                                    </div>
                                </li>

                                <li className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Email</h3>
                                        <p className="text-white/90 font-light text-sm">
                                            <a href="mailto:kontakt@beautysalon.pl" className="hover:text-white transition-colors">kontakt@beautysalon.pl</a>
                                        </p>
                                    </div>
                                </li>

                                <li className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Godziny</h3>
                                        <p className="text-white/90 font-light text-sm leading-relaxed">
                                            Pn - Pt: 09-20<br />
                                            Sob: 10-18
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Content Split: Form & Map */}
                    <div className="flex flex-col lg:flex-row w-full min-h-[500px] lg:h-[600px]">
                        {/* Form Side */}
                        <div className="w-full lg:w-1/2 p-8 lg:p-10 bg-white flex flex-col justify-center items-center overflow-y-auto lg:border-r border-gray-100 mb-6 lg:mb-0">
                            <div className="w-full text-center">
                                <h2 className="text-3xl lg:text-3xl font-bold font-montserrat text-[#212121] mb-2 text-center">Napisz do nas</h2>
                                <p className="text-gray-500 mb-12 text-center font-light text-sm">
                                    Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe.
                                </p>

                                <div className="h-10 w-full" />

                                <form className="flex flex-col gap-10 w-full text-left" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="group">
                                            <label className="block text-xs font-bold font-montserrat text-gray-400 uppercase tracking-widest mb-2">Imię i nazwisko</label>
                                            <input
                                                type="text"
                                                className="w-full py-3 border-b border-gray-200 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-[#212121] placeholder-gray-300"
                                                placeholder="np. Anna Kowalska"
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-bold font-montserrat text-gray-400 uppercase tracking-widest mb-2">Telefon</label>
                                            <input
                                                type="tel"
                                                className="w-full py-3 border-b border-gray-200 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-[#212121] placeholder-gray-300"
                                                placeholder="np. 500 600 700"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold font-montserrat text-gray-400 uppercase tracking-widest mb-2">Adres Email</label>
                                        <input
                                            type="email"
                                            className="w-full py-3 border-b border-gray-200 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-[#212121] placeholder-gray-300"
                                            placeholder="np. anna@example.com"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold font-montserrat text-gray-400 uppercase tracking-widest mb-2">Temat</label>
                                        <select className="w-full py-3 border-b border-gray-200 focus:border-[#D4AF37] outline-none transition-colors bg-transparent text-[#212121] cursor-pointer">
                                            <option value="" disabled selected>Wybierz temat rozmowy</option>
                                            <option value="rezerwacja">Rezerwacja wizyty</option>
                                            <option value="wspolpraca">Współpraca</option>
                                            <option value="inne">Inne pytanie</option>
                                        </select>
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-bold font-montserrat text-gray-400 uppercase tracking-widest mb-2">Wiadomość</label>
                                        <textarea
                                            rows={3}
                                            className="w-full py-3 border-b border-gray-200 focus:border-[#D4AF37] outline-none transition-all bg-transparent text-[#212121] placeholder-gray-300 resize-none"
                                            placeholder="Treść wiadomości..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-8 flex justify-center w-full">
                                        <button
                                            type="submit"
                                            className="group relative inline-flex items-center justify-center px-16 py-6 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none uppercase tracking-[0.15em] hover:tracking-[0.2em] font-medium text-xl gap-4"
                                        >
                                            <span>Wyślij wiadomość</span>
                                            <Send size={18} />
                                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        </button>
                                    </div>
                                </form>


                            </div>
                        </div>

                        {/* Spacer before map - mobile only */}
                        <div className="md:hidden h-20 w-full bg-[#F5F1E8]"></div>

                        {/* Map Side */}
                        <div className="w-full lg:w-1/2 h-[500px] lg:h-auto lg:min-h-0 relative grayscale hover:grayscale-0 transition-all duration-1000 bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.7667612741!2d21.0189!3d52.2215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eccf1af6f7467%3A0x62955513c3290b2c!2aPi%C4%99kna%2C%20Warszawa!5e0!3m2!1spl!2spl!4v1600000000000!5m2!1spl!2spl"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                        {/* Spacer after map - mobile only */}
                        <div className="md:hidden h-20 w-full bg-[#F5F1E8]"></div>

                        {/* Mobile Contact Info - Below Map */}
                        <div className="md:hidden px-8 pt-8 pb-6">
                            <div className="bg-white rounded-xl p-6 shadow-md w-full">
                                <div className="space-y-5 flex flex-col items-center">
                                    <a href="tel:+48500600700" className="flex items-center gap-4 text-black">
                                        <Phone className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="font-medium text-base">+48 500 600 700</span>
                                    </a>
                                    <a href="mailto:kontakt@beautysalon.pl" className="flex items-center gap-4 text-black">
                                        <Mail className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="font-medium text-base">kontakt@beautysalon.pl</span>
                                    </a>
                                    <div className="flex items-center gap-4 text-black">
                                        <MapPin className="w-5 h-5 text-[#D4AF37]" />
                                        <span className="font-medium text-base">ul. Piękna 10/12, Warszawa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        </div >
    );
}
