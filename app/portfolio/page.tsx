"use client";

import { useState } from "react";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectModal from "@/components/portfolio/ProjectModal";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";
import dynamic from 'next/dynamic';

const BackgroundEffects = dynamic(() => import('@/components/ui/BackgroundEffects'), {
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
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full mix-blend-screen" />
            </div>

            <div className="w-full max-w-[1440px] relative z-10">
                {/* Global Background Effects */}
                <BackgroundEffects />

                {/* Spacer for Navbar */}
                <div className="h-24 w-full relative z-10" />

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
                    <section style={{ paddingTop: '7rem' }} className="px-6 md:px-12 lg:px-16 pb-32">
                        <div className="space-y-0">
                            {PORTFOLIO_PROJECTS.map((project, index) => (
                                <div key={project.id}>
                                    <ProjectCard
                                        title={project.title}
                                        description={project.shortDescription}
                                        tags={project.tags}
                                        imageSrc={project.imageSrc}
                                        link={project.link}
                                        index={index}
                                        onDetailsClick={() => setSelectedProject({
                                            title: project.title,
                                            link: project.link,
                                        })}
                                    />

                                    {/* Separator - Not After Last Project */}
                                    {index < PORTFOLIO_PROJECTS.length - 1 && (
                                        <div style={{
                                            marginTop: '10rem',
                                            marginBottom: '10rem',
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center'
                                        }}>
                                            <div style={{
                                                width: '700px',
                                                maxWidth: '90%',
                                                height: '1px',
                                                backgroundColor: 'rgba(147, 51, 234, 0.3)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)'
                                            }}></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

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
                                <a
                                    href="/contact"
                                    className="btn-glass inline-block"
                                >
                                    Skontaktuj się
                                </a>
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
