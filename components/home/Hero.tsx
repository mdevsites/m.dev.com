'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Logo } from '../ui/Logo';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Gradient Overlay - Smooth transition to next section */}
            <div className="absolute inset-x-0 bottom-0 h-[512px] bg-gradient-to-b from-transparent from-0% via-black/40 via-30% via-black/70 via-60% to-black to-100% pointer-events-none z-[5]" />

            {/* LOGO - Fixed Top Left */}
            <div className="fixed top-8 left-8 z-50">
                <Logo />
            </div>

            {/* MAIN GLASSMORPHIC CARD */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 max-w-4xl mx-auto px-6 will-change-transform"
            >
                <div className="relative">
                    {/* Background Blobs - Heavy blur hidden on mobile */}
                    <div className="absolute inset-0 z-[-1] hidden md:block md:blur-[80px]"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 35%, transparent 75%)',
                            transform: 'scale(1.5)',
                        }}
                    />
                    {/* Secondary Purple Spot - Hidden on mobile */}
                    <div className="absolute inset-0 z-[-2] translate-x-[20%] translate-y-[20%] hidden md:block blur-[100px]"
                        style={{
                            background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%)',
                            transform: 'scale(1.4)',
                        }}
                    />

                    {/* Internal wrapper - Responsive spacing */}
                    <div className="py-12 md:p-20 relative">
                        <div className="relative z-10 flex flex-col items-center text-center">

                            {/* HEADLINE WITH TYPING ANIMATION */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.2] mb-4 will-change-transform"
                            >
                                Tworzę strony internetowe,<br />
                                które są{' '}
                                {/* Mobile: New line + Solid Color. Desktop: Inline + Gradient */}
                                <span className="block md:inline text-mesh-1 md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-mesh-1 md:via-purple-400 md:to-mesh-2 mt-2 md:mt-0">
                                    <TypeAnimation
                                        sequence={[
                                            'szybkie',
                                            2000,
                                            'piękne',
                                            2000,
                                            'skuteczne',
                                            2000,
                                            'nowoczesne',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        deletionSpeed={60}
                                    />
                                </span>
                            </motion.h1>

                            {/* DESCRIPTION */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="text-lg md:text-xl text-gray-300 max-w-4xl font-light leading-relaxed"
                            >
                                Nowoczesny design, czysty kod i skuteczność. <br className="hidden md:block" />
                                Bez zbędnych komplikacji.
                            </motion.p>

                            {/* Spacer before USP */}
                            <div style={{ height: '40px' }} />

                            {/* USP Bullets */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                className="flex flex-col gap-3"
                            >
                                <div className="flex items-center gap-3 text-white/80">
                                    <svg className="w-5 h-5 text-mesh-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm md:text-base">Indywidualny projekt i strategia</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/80">
                                    <svg className="w-5 h-5 text-mesh-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm md:text-base">Nowoczesne technologie (Next.js)</span>
                                </div>
                                <div className="flex items-center gap-3 text-white/80">
                                    <svg className="w-5 h-5 text-mesh-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm md:text-base">Wsparcie i rozwój po wdrożeniu</span>
                                </div>
                            </motion.div>

                            {/* Fixed Spacer */}
                            <div style={{ height: '60px' }} />

                            {/* CTA BUTTON - Minimalist */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.3, type: "spring", bounce: 0.4 }}
                                className="relative z-20"
                            >
                                <Link
                                    href="/portfolio"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/5 relative z-20"
                                >

                                    <span>Zobacz Projekty</span>
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>

            {/* SCROLL INDICATOR */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
            >
                <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-xs font-medium">Przewiń w dół</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>

        </section>
    );
}
