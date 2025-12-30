"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

interface DesktopProjectLayoutProps {
    onOpenProject: (project: typeof PORTFOLIO_PROJECTS[0]) => void;
}

export default function DesktopProjectLayout({ onOpenProject }: DesktopProjectLayoutProps) {
    return (
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-32">
            {/* Top Spacer */}
            <div className="w-full h-[200px]" aria-hidden="true" />

            {PORTFOLIO_PROJECTS.map((project, index) => (
                <div key={project.id}>
                    <ProjectSection
                        project={project}
                        index={index}
                        onOpen={() => onOpenProject(project)}
                    />
                    {index < PORTFOLIO_PROJECTS.length - 1 && (
                        <div className="w-full h-[250px]" aria-hidden="true" />
                    )}
                </div>
            ))}
        </div>
    );
}

function ProjectSection({
    project,
    index,
    onOpen
}: {
    project: typeof PORTFOLIO_PROJECTS[0];
    index: number;
    onOpen: () => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const isEven = index % 2 === 0;

    return (
        <section ref={containerRef} className="relative flex items-center py-20">
            <div className={`flex w-full gap-12 items-stretch ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>

                {/* Text Content - Sticky Side */}
                <div className="w-[40%] flex flex-col gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        animate={index === 0 ? { opacity: 1, x: 0 } : undefined}
                        whileInView={index !== 0 ? { opacity: 1, x: 0 } : undefined}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="h-full flex flex-col justify-between"
                    >
                        <div>
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider text-purple-300 bg-purple-900/20 border border-purple-500/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <h2 className="text-5xl lg:text-7xl font-bold text-white mb-0 leading-tight">
                                {project.title}
                            </h2>

                            {/* Spacer */}
                            <div className="h-4 w-full" />

                            {/* Description */}
                            <p className="text-xl text-gray-400 leading-relaxed">
                                {project.fullDescription || project.shortDescription}
                            </p>
                        </div>

                        <div>
                            <div className="h-8" />
                            <div className="w-full h-px bg-white/10" />
                            <div className="h-8" />

                            {/* Stats / Metadata Grid if available */}
                            {project.results && (
                                <div className="grid grid-cols-2 gap-6 mb-10">
                                    {project.results.slice(0, 2).map((result, idx) => (
                                        <div key={idx}>
                                            <div className="flex items-center gap-2 text-purple-400 mb-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                <span className="text-sm font-medium uppercase tracking-wider">Feature</span>
                                            </div>
                                            <p className="text-gray-300 text-sm">{result}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Image Content - Scroll/Parallax Side */}
                <div className="w-[55%] flex flex-col items-center justify-between gap-8">
                    <motion.div
                        className="relative w-full rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                        onClick={onOpen}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                        <img
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 block"
                        />

                        {/* Overlay Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                            <div className="w-20 h-20 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                <ArrowUpRight className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Button - Moved here */}
                    <button
                        onClick={onOpen}
                        className="group relative inline-flex items-center justify-center bg-transparent border border-white/30 text-white rounded-full text-lg font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-transparent hover:scale-105 overflow-hidden"
                    >
                        {/* Horizontal Spacer Left */}
                        <div className="w-4 h-full" />

                        <div className="flex flex-col items-center justify-center">
                            {/* Vertical Spacer Top */}
                            <div className="h-2 w-full" />

                            {/* Content */}
                            <div className="flex items-center gap-4">
                                <span>Zobacz Live Demo</span>
                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/10">
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                </div>
                            </div>

                            {/* Vertical Spacer Bottom */}
                            <div className="h-2 w-full" />
                        </div>

                        {/* Horizontal Spacer Right */}
                        <div className="w-4 h-full" />
                    </button>
                </div>

            </div>
        </section>
    );
}
