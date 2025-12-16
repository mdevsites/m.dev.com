"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// --- Data ---
const serviceCategories = [
    {
        id: "nails",
        title: "Stylizacja paznokci",
        subtitle: "Dłonie są Twoją wizytówką",
        description: "Zadbamy o perfekcyjny wygląd Twoich dłoni i stóp, używając produktów najwyższej jakości.",
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1974&auto=format&fit=crop",
        items: [
            { name: "Manicure klasyczny", price: "od 60 PLN" },
            { name: "Manicure hybrydowy", price: "od 100 PLN" },
            { name: "Pedicure", price: "od 80 PLN" },
            { name: "Przedłużanie paznokci", price: "od 150 PLN" },
            { name: "Zdjęcie hybrydy", price: "30 PLN" },
            { name: "Naprawa paznokcia", price: "od 20 PLN" },
        ],
    },
    {
        id: "face",
        title: "Zabiegi na twarz",
        subtitle: "Odkryj naturalny blask",
        description: "Indywidualnie dobrane terapie dla Twojej skóry. Łączymy nowoczesną technologię z relaksującymi technikami manualnymi.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
        items: [
            { name: "Oczyszczanie wodorowe", price: "150 PLN" },
            { name: "Peeling kawitacyjny", price: "120 PLN" },
            { name: "Mezoterapia mikroigłowa", price: "200 PLN" },
            { name: "Masaż Kobido", price: "180 PLN" },
            { name: "Rytuał nawilżający", price: "220 PLN" },
        ],
    },
    {
        id: "makeup",
        title: "Makijaż",
        subtitle: "Podkreśl swoje piękno",
        description: "Niezależnie od okazji, sprawimy, że poczujesz się wyjątkowo. Makijaże wykonujemy trwałymi, profesjonalnymi kosmetykami.",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
        items: [
            { name: "Makijaż dzienny", price: "100 PLN" },
            { name: "Makijaż wieczorowy", price: "150 PLN" },
            { name: "Makijaż ślubny", price: "od 300 PLN" },
            { name: "Makijaż ślubny (próbny)", price: "200 PLN" },
            { name: "Lekcja makijażu (3h)", price: "400 PLN" },
        ],
    },
    {
        id: "other",
        title: "Oprawa oka i Depilacja",
        subtitle: "Detale mają znaczenie",
        description: "Perfekcyjne brwi i gładka skóra to podstawa dobrego samopoczucia. Zaufaj naszym specjalistkom.",
        image: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1974&auto=format&fit=crop",
        items: [
            { name: "Regulacja brwi", price: "30 PLN" },
            { name: "Henna pudrowa z geometrią", price: "90 PLN" },
            { name: "Laminacja brwi", price: "120 PLN" },
            { name: "Laminacja rzęs", price: "140 PLN" },
            { name: "Depilacja wąsik", price: "30 PLN" },
            { name: "Depilacja pachy", price: "50 PLN" },
        ],
    },
];

function ServiceSection({ category, index }: { category: typeof serviceCategories[0], index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Image moves slower than scroll
    const y = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);

    // Staggered Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id={category.id} ref={ref} className="w-full bg-white shadow-xl rounded-2xl overflow-hidden mb-24 last:mb-0 scroll-mt-32">
            <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                {/* Image Side - with Parallax */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto relative min-h-[500px] overflow-hidden group">
                    <motion.div
                        style={{ y, scale: 1.3 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/10 md:bg-transparent pointer-events-none" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 bg-[#F5F1E8] p-6 md:p-12 lg:p-16 xl:p-24 flex flex-col justify-center items-center text-center relative z-10">
                    {/* Decorative Number/ID */}
                    <span className="absolute top-6 right-6 md:top-10 md:right-10 text-8xl md:text-9xl font-montserrat font-bold text-white opacity-40 select-none pointer-events-none">
                        0{index + 1}
                    </span>

                    <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#D4AF37] text-sm uppercase tracking-[0.2em] font-bold block mb-3">
                                {category.subtitle}
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#212121]">
                                {category.title}
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-600 font-light leading-relaxed w-full"
                        >
                            {category.description}
                        </motion.p>

                        {/* Price List - Staggered */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full text-left flex flex-col gap-2"
                        >
                            {category.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="flex justify-between items-center py-5 border-b border-gray-200 last:border-0 group hover:bg-white/40 transition-colors px-4 -mx-4 rounded-lg"
                                >
                                    <span className="font-semibold text-[#212121] text-lg group-hover:text-[#D4AF37] transition-colors">
                                        {item.name}
                                    </span>
                                    <span className="font-bold text-[#D4AF37] text-lg whitespace-nowrap ml-4 group-hover:scale-105 transition-transform">
                                        {item.price}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    return (
        <div className="bg-white relative">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-[#E3D9C6] to-[#F5F1E8] pb-16 text-center w-full" style={{ paddingTop: "80px" }}>
                <div className="px-4">
                </div>
            </section>

            {/* Menu Sections */}
            <div className="w-full px-6 md:px-8 lg:px-12 pb-24">
                {serviceCategories.map((category, index) => (
                    <ServiceSection key={category.id} category={category} index={index} />
                ))}
            </div>

            {/* Spacer before CTA */}
            <div className="h-[80px] md:h-[120px] w-full bg-[#F5F1E8]" />

            {/* CTA Section */}
            <section className="py-24 bg-[#F5F1E8] w-full">
                <div className="px-4 text-center flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold font-montserrat text-[#212121]">
                        Nie znalazłaś tego, czego szukasz?
                    </h2>
                    <p className="text-gray-600 text-lg font-light w-full max-w-5xl mx-auto text-center">
                        Skontaktuj się z nami. Nasi specjaliści chętnie doradzą i przygotują pakiet zabiegów skrojony idealnie pod Twoje potrzeby.
                    </p>
                    <Link
                        href="/demos/salon-beauty/kontakt"
                        className="group relative inline-block px-16 py-6 text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 rounded-none"
                    >
                        <span className="font-medium tracking-[0.15em] uppercase text-2xl group-hover:tracking-[0.2em] transition-all duration-300">
                            Umów konsultację
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                </div>
            </section>

            {/* Spacer after CTA */}
            <div className="h-[60px] md:h-[80px] w-full bg-[#F5F1E8]" />
        </div>
    );
}
