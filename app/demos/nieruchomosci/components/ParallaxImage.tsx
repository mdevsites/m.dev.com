"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { ImageProps } from "next/image";

interface ParallaxImageProps extends ImageProps {
    containerClassName?: string;
    offset?: number;
    children?: React.ReactNode;
}

export default function ParallaxImage({
    containerClassName = "",
    offset = 15, // Percentage of movement
    className = "",
    children,
    ...props
}: ParallaxImageProps) {
    const ref = useRef(null);

    // Track scroll progress of the container relative to the viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Map scroll progress to Y translation (negative to positive for parallax)
    const y = useTransform(scrollYProgress, [0, 1], [`-${offset}%`, `${offset}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
            <motion.div
                style={{ y, scale: 1.2 }} // Scale up to avoid empty edges during movement
                className="relative w-full h-full will-change-transform"
            >
                <Image
                    className={className}
                    {...props}
                />
            </motion.div>
            {children}
        </div>
    );
}
