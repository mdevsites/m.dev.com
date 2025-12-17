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
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary !rounded-none"
                    >
                        Zobacz Demo
                    </motion.button>
                </div>
            </div>

            {/* Content - Now Below Image */}
            <div style={{ marginTop: '3rem' }} className="text-center">
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
        </motion.article>
    );
}
