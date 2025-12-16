"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    link: string;
    className?: string;
    onDetailsClick?: () => void;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageSrc,
    link,
    className = "",
    onDetailsClick,
}: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`
                relative group overflow-hidden
                w-full ${className}
                flex flex-col md:block md:h-[500px]
                bg-[#0A0A0A]
            `}
        >
            {/* Image Container */}
            <div className={`
                relative w-full shrink-0
                h-[250px] md:absolute md:inset-0 md:h-full
                transition-transform duration-700 md:group-hover:scale-105
            `}>
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>



            {/* Content Container - Mobile Only */}
            <div className={`
                relative flex flex-col justify-end
                p-4 sm:p-6
                text-center
                h-auto
                z-10 bg-[#0A0A0A]
                md:hidden
            `}>

                <div className="flex flex-wrap gap-2 mb-3 justify-center">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/10 backdrop-blur-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:drop-shadow-lg leading-tight">
                    {title}
                </h3>

                <div className="overflow-hidden w-full flex flex-col items-center">
                    <p className="text-gray-400 md:text-gray-200 text-sm leading-relaxed mb-6 opacity-90 w-full max-w-[95%] mx-auto">
                        {description}
                    </p>
                    <button
                        onClick={onDetailsClick}
                        className="inline-flex items-center text-white font-medium hover:text-purple-300 transition-colors bg-transparent border-none cursor-pointer p-0"
                    >
                        Zobacz szczegóły
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Desktop Button - Shows on Hover */}
            <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                <button
                    onClick={onDetailsClick}
                    className="relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-purple-500/50 overflow-hidden group/btn"
                >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>

                    {/* Glass effect */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                    {/* Button text */}
                    <span className="relative z-10 flex items-center gap-2">
                        Zobacz projekt
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </span>
                </button>
            </div>

        </motion.div >
    );
}
