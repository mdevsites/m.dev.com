"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

// --- Data ---
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop",
        category: "Stylizacja paznokci",
        alt: "Beautiful pink manicure",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop",
        category: "Zabiegi na twarz",
        alt: "Facial treatment",
        className: "md:col-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2073&auto=format&fit=crop",
        category: "Makijaż",
        alt: "Professional makeup",
        className: "md:col-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop",
        category: "Stylizacja paznokci",
        alt: "Nail art detail",
        className: "md:col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        category: "Zabiegi na twarz",
        alt: "Relaxing facial massage",
        className: "md:col-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop",
        category: "Makijaż",
        alt: "Bridal makeup",
        className: "md:col-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop",
        category: "Stylizacja paznokci",
        alt: "Manicure process",
        className: "md:col-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
        category: "Makijaż",
        alt: "Eye makeup close up",
        className: "md:col-span-2"
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [filter, setFilter] = useState("Wszystkie");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const categories = ["Wszystkie", ...Array.from(new Set(galleryImages.map(img => img.category)))];

    const filteredImages = filter === "Wszystkie"
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="min-h-screen pb-20 bg-[#F5F1E8]">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#E3D9C6] to-[#F5F1E8] pb-0 text-center w-full" style={{ paddingTop: "80px" }}>
                <div className="w-full px-4 md:px-8 relative z-10 flex flex-col items-center">
                </div>
            </section>

            {/* Spacer */}
            <div className="h-8 md:h-12 w-full" />

            {/* Filter Menu */}
            <div className="w-full flex justify-center flex-wrap gap-8 md:gap-12 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`relative text-xs md:text-sm uppercase tracking-[0.2em] transition-all duration-300 pb-2 ${filter === cat
                            ? 'text-[#D4AF37] font-bold'
                            : 'text-gray-400 hover:text-[#D4AF37]'
                            }`}
                    >
                        {cat}
                        {filter === cat && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Spacer between Menu and Grid */}
            <div className="h-24 w-full" />

            {/* Gallery Grid - Bento Grid Layout */}
            <section className="w-full px-4 md:px-8 flex justify-center">
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-[300px]"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredImages.map((image, index) => (
                            <motion.div
                                layout
                                key={image.src}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`w-full ${filter === "Wszystkie" ? (image.className || '') : ''}`}
                            >
                                <div
                                    className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border-2 border-[#D4AF37]"
                                    onClick={() => setSelectedImage(image.src)}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                        <div className="transform scale-50 group-hover:scale-100 transition-transform duration-300 delay-100">
                                            <ZoomIn className="text-white w-12 h-12 drop-shadow-md opacity-80" />
                                        </div>
                                    </div>

                                    {/* Caption */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-bold mb-1">{image.category}</p>
                                        <p className="text-white text-sm font-medium">{image.alt}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Spacer before CTA */}
            <div className="h-24 md:h-32 w-full" />

            {/* CTA Section */}
            <section className="w-full py-32 md:py-48 flex flex-col items-center text-center px-4 gap-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-[#212121] font-montserrat"
                >
                    Podoba Ci się nasza praca?
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link
                        href="/demos/salon-beauty/kontakt"
                        className="group relative inline-block px-16 py-6 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none"
                    >
                        <span className="font-medium tracking-[0.15em] uppercase text-2xl group-hover:tracking-[0.2em] transition-all duration-300">
                            Umów wizytę
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                </motion.div>
            </section>

            {/* Spacer after CTA */}
            <div className="h-24 md:h-32 w-full" />

            {/* Lightbox */}
            {/* Lightbox - Corrected Portal Pattern */}
            {mounted && createPortal(
                <AnimatePresence key="lightbox-presence">
                    {selectedImage && (
                        <motion.div
                            key="lightbox-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setSelectedImage(null)}
                            className="fixed inset-0 z-[9999] bg-[#212121]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                        >
                            <button
                                className="absolute top-6 right-6 text-white hover:text-[#D4AF37] transition-colors p-2 z-50"
                                onClick={() => setSelectedImage(null)}
                            >
                                <X size={40} />
                            </button>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative w-full max-w-6xl h-[85vh] rounded-lg overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Preview"
                                    fill
                                    className="object-contain"
                                    sizes="90vw"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    );
}
