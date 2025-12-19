"use client";

import Image from "next/image";

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
        <article
            className={`group relative w-full animate-[fadeIn_0.7s_ease-out_both] ${className}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Image Container */}
            <div
                className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-[#0A0A0A] cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
                onClick={onDetailsClick}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onDetailsClick?.();
                    }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Zobacz szczegóły projektu ${title}`}
            >
                {/* Image */}
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain transition-all duration-700 ease-out p-2 group-hover:scale-105"
                />

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                        className="btn-secondary !rounded-none transition-transform duration-200 hover:scale-105 active:scale-95"
                    >
                        Zobacz Demo
                    </button>
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
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg px-2"
                    onClick={onDetailsClick}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            onDetailsClick?.();
                        }
                    }}
                    role="button"
                    tabIndex={0}
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
        </article>
    );
}
