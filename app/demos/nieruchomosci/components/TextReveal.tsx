"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function TextReveal({ children, className = "", delay = 0, duration = 0.8, priority = false }: { children: React.ReactNode; className?: string; delay?: number; duration?: number; priority?: boolean }) {
    // Switched to Blur Reveal - no overflow needed, no vertical shift artifacts

    return (
        <span className={`inline-block ${className}`}>
            <motion.span
                variants={{
                    hidden: { opacity: 0, filter: "blur(12px)" },
                    visible: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: {
                            duration,
                            delay,
                            ease: "easeOut"
                        }
                    }
                }}
                // If not controlled by parent (no variants passed implicitly), these defaults won't hurt 
                // but usually we rely on parent 'initial' and 'animate' props.
                // However, to be safe for standalone usage, we keep the original behavior if not orchestrated?
                // For this specific optimization, we assume parent control in the Hero section.
                // Removed will-change-transform to prevent GPU layer artifacts (vertical line glitch)
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
}

export function MultiLineReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
    const lines = children.split('\n');

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    const childVariant = {
        hidden: { opacity: 0, filter: "blur(12px)" },
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {lines.map((line, i) => (
                <div key={i} className="relative">
                    <motion.div variants={childVariant}>
                        {line}
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
}
