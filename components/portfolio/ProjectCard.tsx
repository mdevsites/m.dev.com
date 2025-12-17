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
    index?: number;
}

export default function ProjectCard({
    title,
    description,
    tags,
    imageSrc,
    link,
    className = "",
    onDetailsClick,
    index = 0,
}: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.45, 0.27, 0.9] }}
            className={`group relative w-full ${className}`}
        >
            {/* Content - Now Above Image */}
            <div style={{ marginBottom: '3rem' }} className="text-center">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium tracking-wide uppercase text-gray-400 border border-gray-800 hover:border-purple-500/30 hover:text-purple-400 transition-colors duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 cursor-pointer outline-none focus:outline-none"
                    onClick={onDetailsClick}
                >
                    {title}
                </h3>

                {/* Description */}
                <div className="flex justify-center w-full">
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl text-center">
                        {description}
                    </p>
                </div>
            </div>

            {/* Image Container */}
            <div
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-[#0A0A0A] cursor-pointer outline-none focus:outline-none"
                onClick={onDetailsClick}
            >
                {/* Image */}
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase rounded-none border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 outline-none focus:outline-none"
                    >
                        Zobacz projekt
                    </motion.button>
                </div>
            </div>

            {/* CTA Link - Mobile - Below Image */}
            <div className="mt-6 flex justify-center">
                <button
                    onClick={onDetailsClick}
                    className="inline-flex items-center gap-2 text-white font-medium text-sm tracking-wide uppercase group/btn"
                >
                    <span className="group-hover/btn:text-purple-400 transition-colors duration-300">
                        Zobacz szczegóły
                    </span>
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </motion.article>
    );
}
