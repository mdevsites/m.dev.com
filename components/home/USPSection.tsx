'use client';

import { motion } from 'framer-motion';
import { USP_ITEMS } from '@/lib/constants';
import { LuZap, LuCode, LuSmartphone, LuLifeBuoy, LuBadgeDollarSign } from 'react-icons/lu';

// Map icon names to actual icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    LuZap,
    LuCode,
    LuSmartphone,
    LuLifeBuoy,
    LuBadgeDollarSign,
};

export default function USPSection() {
    // Different rotation angles for each card
    const rotations = [2, -1.5, 1, -2, 1.5];

    // 3D perspective container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="section-spacing !pt-12 overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Dlaczego warto ze mną współpracować?
                    </h2>
                    <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed text-center">
                        Połączenie nowoczesnych technologii, doświadczenia i pasji do tworzenia.
                    </p>
                </motion.div>

                {/* Diagonal 3D Cards Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-6 perspective-container"
                    style={{ perspective: '1500px' }}
                >
                    {USP_ITEMS.map((item, index) => {
                        const IconComponent = iconMap[item.iconName];
                        const rotation = rotations[index % rotations.length];

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotateY: 5,
                                    rotateX: -5,
                                    z: 50,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }
                                }}
                                className="relative group cursor-pointer"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: `rotate(${rotation}deg)`,
                                }}
                            >
                                <div
                                    className={`
                                        relative
                                        w-[280px] md:w-[320px] h-[280px] md:h-[300px]
                                        rounded-3xl
                                        bg-gradient-to-br ${item.color}
                                        p-8
                                        flex flex-col items-center justify-center
                                        text-center
                                        transition-all duration-300
                                        group-hover:shadow-2xl
                                    `}
                                    style={{
                                        boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3), 0 10px 20px -5px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {/* Glossy overlay */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-40"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)',
                                        }}
                                    />

                                    {/* Glow effect on hover */}
                                    <div
                                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                        style={{
                                            background: `linear-gradient(135deg, 
                                                rgba(255, 255, 255, 0.4) 0%, 
                                                rgba(255, 255, 255, 0.1) 100%)`,
                                            transform: 'translateZ(-20px)',
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col items-center h-full">
                                        {/* Icon section - fixed at top */}
                                        <div className="flex-shrink-0" style={{ marginTop: '60px' }}>
                                            <motion.div
                                                whileHover={{
                                                    rotateZ: 360,
                                                    scale: 1.2,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeInOut"
                                                }}
                                                className="p-5 rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl"
                                                style={{
                                                    transform: 'translateZ(30px)',
                                                }}
                                            >
                                                {IconComponent && (
                                                    <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                                                )}
                                            </motion.div>
                                        </div>

                                        {/* Text section - centered in remaining space */}
                                        <div className="flex-grow flex flex-col items-center justify-center text-center px-4 pb-8">
                                            {/* Title */}
                                            <h3
                                                className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg"
                                                style={{
                                                    transform: 'translateZ(20px)',
                                                }}
                                            >
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p
                                                className="text-white/90 leading-relaxed drop-shadow-md text-base"
                                                style={{
                                                    transform: 'translateZ(10px)',
                                                }}
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom reflection */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-3xl opacity-30"
                                        style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
