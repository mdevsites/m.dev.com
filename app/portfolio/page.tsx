"use client";

import { useState } from "react";
import ProjectModal from "@/components/portfolio/ProjectModal";
import DesktopProjectLayout from "@/components/portfolio/DesktopProjectLayout";
import MobileProjectCarousel from "@/components/portfolio/MobileProjectCarousel";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import dynamic from 'next/dynamic';
import Link from "next/link";

const AuroraBackground = dynamic(() => import('@/components/ui/AuroraBackground'), {
    ssr: false,
});

export default function PortfolioPage() {
    const [selectedProject, setSelectedProject] = useState<{
        title: string;
        link: string;
    } | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 flex justify-center font-sans">
            {/* Background Gradients (from Pricing) */}
            {/* Background Gradients (Dual Tone Spot style) */}
            {/* Geometric Grid Background */}
            {/* Aurora Mesh Background */}
            <AuroraBackground />

            <div className="w-full max-w-[1440px] relative z-10">
                {/* Global Background Effects - Removed */}
                {/* <BackgroundEffects /> */}

                {/* Spacer for Navbar */}
                <div className="h-40 w-full relative z-10" />

                <div className="relative z-10">
                    {/* Header Section */}
                    <header className="px-6 md:px-12 lg:px-16 mb-16 md:mb-20">
                        <div className="flex flex-col items-center text-center w-full">
                            {/* Overline */}
                            <div className="flex items-center gap-3 mb-6 justify-center">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <span className="text-sm tracking-[0.3em] uppercase text-gray-500 font-medium">
                                    Portfolio
                                </span>
                            </div>

                            {/* Main Title */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-center">
                                <span className="text-white">Wybrane </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500">
                                    Realizacje
                                </span>
                            </h1>

                            {/* Description */}
                            <div className="flex justify-center w-full">
                                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl text-center">
                                    Projekty, które łączą nowoczesny design z funkcjonalnością.
                                    Każda realizacja to unikalne połączenie estetyki i technologii.
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Projects Section */}
                    <div className="relative z-10">
                        {/* Desktop Layout (Hidden on Mobile) */}
                        <div className="hidden lg:block">
                            <DesktopProjectLayout
                                onOpenProject={(project) => setSelectedProject({
                                    title: project.title,
                                    link: project.link,
                                })}
                            />
                        </div>

                        {/* Mobile Layout (Hidden on Desktop) */}
                        <div className="block lg:hidden">
                            <MobileProjectCarousel
                                onOpenProject={(project) => setSelectedProject({
                                    title: project.title,
                                    link: project.link,
                                })}
                            />
                        </div>
                    </div>

                    {/* Bottom CTA Section */}
                    <section style={{ paddingTop: '5rem', paddingBottom: '5rem' }} className="px-6 md:px-12 lg:px-16">
                        <div className="pt-20">
                            <div className="flex flex-col items-center text-center w-full gap-10">
                                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                    Masz pomysł na projekt?
                                </h2>
                                <div className="flex justify-center w-full">
                                    <p className="text-xl text-gray-400 leading-relaxed max-w-4xl">
                                        Porozmawiajmy o Twoim następnym projekcie. Jestem gotowy, żeby zamienić Twoją wizję w rzeczywistość.
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all duration-300 hover:bg-white/5"
                                >
                                    <span>Skontaktuj się</span>
                                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Project Modal */}
                <ProjectModal
                    isOpen={selectedProject !== null}
                    onClose={() => setSelectedProject(null)}
                    demoUrl={selectedProject?.link || ""}
                    projectTitle={selectedProject?.title || ""}
                />
            </div>
        </div>
    );
}
