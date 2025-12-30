"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/lib/constants";

interface MobileProjectCarouselProps {
    onOpenProject: (project: typeof PORTFOLIO_PROJECTS[0]) => void;
}

export default function MobileProjectCarousel({ onOpenProject }: MobileProjectCarouselProps) {
    return (
        <div className="w-full min-h-[80vh] flex flex-col justify-center py-10 pb-24">

            {/* Header for Mobile context */}
            {/* Header for Mobile context */}
            <div className="px-6 mb-8">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    Przesuń, aby odkryć więcej
                </p>
            </div>

            {/* Carousel Container */}
            <div className="w-full overflow-x-auto snap-x snap-mandatory flex items-stretch gap-6 px-6 pb-12 no-scrollbar">
                {PORTFOLIO_PROJECTS.map((project, index) => (
                    <div
                        key={project.id}
                        className="snap-center shrink-0 w-[85vw] sm:w-[600px] min-h-[60vh] relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] flex flex-col"
                    >
                        {/* Image Section - Natural Height */}
                        <div className="relative w-full">
                            <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-auto object-cover block"
                            />
                            {/* Gradient Overlay at bottom of image for seamless transition */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                        </div>

                        {/* Content Section - Below Image */}
                        <div className="p-6 pt-2 pb-28 flex flex-col gap-4 flex-1 relative">

                            {/* Header */}
                            <div>
                                <h3 className="text-2xl font-bold text-white leading-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-gray-400 text-sm line-clamp-3">
                                {project.shortDescription}
                            </p>

                            {/* Minimal Button */}
                            <button
                                onClick={() => onOpenProject(project)}
                                className="absolute bottom-6 left-6 right-6 rounded-xl bg-black/40 border border-white/30 backdrop-blur-md text-white font-bold text-sm tracking-wide flex flex-col items-center justify-center transition-all active:scale-95 active:bg-white active:text-black overflow-hidden"
                            >
                                {/* Top Spacer */}
                                <div className="h-1.5 w-full" />

                                <div className="flex items-center gap-2">
                                    <Play className="w-3.5 h-3.5 fill-current" />
                                    <span>Zobacz Live Demo</span>
                                </div>

                                {/* Bottom Spacer */}
                                <div className="h-1.5 w-full" />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Spacer for end of list padding */}
                <div className="w-2 shrink-0" />
            </div>
        </div>
    );
}
