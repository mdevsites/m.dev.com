"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
}

export default function TextReveal({ children, className = "", delay = 0, duration = 0.5 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
    const [isFinished, setIsFinished] = useState(false);

    return (
        <span ref={ref} className={`inline-block relative ${isFinished ? "" : "overflow-hidden"} ${className}`}>
            <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{ duration, delay, ease: [0.33, 1, 0.68, 1] }} // Cubic bezier for "heavy" feel
                className="inline-block"
                onAnimationComplete={() => setIsFinished(true)}
            >
                {children}
            </motion.span>
        </span>
    );
}

export function MultiLineReveal({ children, className = "", delay = 0 }: { children: string; className?: string; delay?: number }) {
    // Splits by lines if passed as a template literal with newlines, or just creates one wrapper
    const lines = children.split('\n');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={className}>
            {lines.map((line, i) => (
                <div key={i} className="overflow-hidden relative">
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: "0%" } : {}}
                        transition={{ duration: 0.8, delay: delay + (i * 0.1), ease: [0.33, 1, 0.68, 1] }}
                    >
                        {line}
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
