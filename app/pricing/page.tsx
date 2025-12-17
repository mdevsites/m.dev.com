'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    CheckIcon,
    CurrencyDollarIcon,
    GlobeAltIcon,
    RocketLaunchIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import CTASection from '@/components/home/CTASection';
import BackgroundEffects from "@/components/ui/BackgroundEffects";

// --- DATA FROM USER REQUEST ---

const PRICING_PACKAGES = [
    {
        id: 'start',
        name: 'PAKIET START',
        price: '1 199',
        description: 'Idealny, jeśli potrzebujesz estetycznej strony wizytówki, która dobrze wygląda i działa na każdym urządzeniu.',
        features: [
            'Projekt od zera',
            '1 strona (scroll)',
            'Do 4 sekcji',
            'Wersja mobilna',
            'Formularz',
            '1 runda poprawek'
        ],
        excluded: [
            'Brak animacji',
            'Brak SEO rozbudowanego'
        ],
        icon: RocketLaunchIcon,
        popular: false,
        gradient: 'from-blue-500 to-cyan-400',
    },
    {
        id: 'business',
        name: 'PAKIET BIZNES',
        price: '2 299',
        description: 'Dla firm, które chcą profesjonalnej strony firmowej, budującej zaufanie i wspierającej sprzedaż.',
        features: [
            'Do 4 podstron',
            'Indywidualny layout',
            'Lekkie animacje',
            'SEO on-page',
            'Google Analytics',
            '2 rundy poprawek'
        ],
        icon: GlobeAltIcon,
        popular: true,
        gradient: 'from-purple-600 to-pink-500',
    },
    {
        id: 'pro',
        name: 'PAKIET PRO',
        price: '3 999',
        description: 'Dla marek, które chcą wyróżnić się wizerunkowo i wyglądać jak duża firma.',
        features: [
            'Do 6 podstron',
            'Dopracowany UX',
            'Animacje premium',
            'Optymalizacja szybkości',
            'CTA i konwersja',
            '3 rundy poprawek'
        ],
        icon: CurrencyDollarIcon,
        popular: false,
        gradient: 'from-emerald-500 to-teal-400',
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 font-sans">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            {/* Spacer for Navbar */}
            <div className="h-24 w-full relative z-10" />

            <div className="relative z-10 pb-24 flex flex-col items-center" style={{ margin: '0 40px' }}>
                {/* Particles Effect - Moved here for visibility */}
                <BackgroundEffects />

                {/* HEADLINE */}
                <div className="text-center w-full mb-32 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-center leading-tight flex flex-col md:block" // Stack on mobile, inline on desktop if fits
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Inwestycja w Twój&nbsp;
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            Wizerunek Online
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl text-center max-w-5xl px-4"
                    >
                        Przejrzyste pakiety dopasowane do Twoich potrzeb. Brak ukrytych kosztów.
                    </motion.p>
                </div>

                {/* Rigid Spacer as requested */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />

                {/* PRICING CARDS */}
                <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 justify-items-center">
                    {PRICING_PACKAGES.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`
                                relative group rounded-3xl p-1
                                bg-gradient-to-b from-white/10 to-transparent
                                hover:from-white/20 transition-all duration-300
                                flex flex-col h-full max-w-[450px] mx-auto w-full min-h-[600px] md:min-h-[650px]
                            `}
                        >
                            {/* Card Inner */}
                            <div className="h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[22px] p-8 flex flex-col items-center relative overflow-hidden flex-grow border border-white/5">

                                {/* Glow Effect */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${pkg.gradient} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />



                                {/* Rigid Spacer at Top */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Header - Centered Content */}
                                <div className="flex flex-col items-center justify-center w-full">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center shadow-lg shadow-purple-900/20`}>
                                        <pkg.icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Rigid Spacer */}
                                    <div style={{ height: '40px' }} className="w-full shrink-0" />

                                    <h3 className="text-2xl font-bold mb-4 text-center w-full bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{pkg.name}</h3>
                                    {/* Description: Full width, no extra padding */}
                                    <p className="text-gray-400 text-sm leading-relaxed text-center max-w-[85%] mx-auto">{pkg.description}</p>
                                </div>

                                {/* Rigid Spacer */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Price - Centered */}
                                <div className="w-full flex flex-col items-center justify-center">
                                    <div className="flex items-baseline gap-1 justify-center">
                                        <span className="text-5xl font-bold text-white tracking-tight">{pkg.price}</span>
                                        <span className="text-xl text-purple-400 font-bold">PLN</span>
                                    </div>
                                    <p className="text-gray-500 text-sm mt-2 font-medium text-center">netto / jednorazowo</p>
                                </div>

                                {/* Rigid Spacer */}
                                <div style={{ height: '40px' }} className="w-full shrink-0" />

                                {/* Features List - Full width */}
                                <div className="w-full flex flex-col items-center flex-grow">
                                    <ul className="space-y-4 w-fit mx-auto px-4">
                                        {pkg.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-3 text-left">
                                                <CheckIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-300 leading-relaxed">{feat}</span>
                                            </li>
                                        ))}
                                        {/* Excluded items */}
                                        {/* @ts-ignore - dynamic property check */}
                                        {pkg.excluded && pkg.excluded.map((feat, i) => (
                                            <li key={`ex-${i}`} className="flex items-start gap-3 text-left opacity-50">
                                                <XMarkIcon className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-400 leading-relaxed">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>


                                {/* Button */}
                                <div className="w-full mt-auto">
                                    <Link
                                        href={`/contact?package=${pkg.id}`}
                                        className={`
                                            block w-full py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-[1.02]
                                            ${pkg.popular
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                                                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                                            }
                                        `}
                                    >
                                        Wybierz Pakiet
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Rigid Spacer */}
                <div style={{ height: '100px' }} className="w-full shrink-0" />

                <CTASection
                    title="Nie znalazłeś idealnego pakietu?"
                    description="Każdy biznes jest inny. Skontaktuj się ze mną, a przygotuję dla Ciebie indywidualną wycenę."
                    buttonText="Zapytaj o wycenę"
                />


            </div>
        </div >
    );
}
