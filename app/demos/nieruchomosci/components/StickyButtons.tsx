'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function RealEstateStickyButtons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show buttons after 2 seconds
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const buttons = [
        {
            icon: <MessageCircle size={20} />,
            href: 'https://wa.me/48221234567',
            label: 'WhatsApp',
            target: '_blank',
        },
        {
            icon: <Mail size={20} />,
            href: 'mailto:biuro@horizonestates.pl',
            label: 'Email',
        },
        {
            icon: <Phone size={20} />,
            href: 'tel:+48221234567',
            label: 'Telefon',
        },
    ];

    return (
        <div
            className={`fixed bottom-8 right-8 z-40 flex flex-col gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
        >
            {buttons.map((button, index) => (
                <a
                    key={button.label}
                    href={button.href}
                    target={button.target}
                    rel="noopener noreferrer"
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#0F0F0F]/60 backdrop-blur-2xl border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shadow-[0_20px_60px_-15px_rgba(197,160,89,0.2)] transition-all duration-300 hover:scale-110 hover:bg-[#C5A059] hover:text-black hover:border-[#C5A059] hover:shadow-[0_0_30px_rgba(197,160,89,0.4)] group"
                    style={{
                        animationDelay: `${index * 100}ms`,
                    }}
                    aria-label={button.label}
                    title={button.label}
                >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                        {button.icon}
                    </div>
                </a>
            ))}
        </div>
    );
}
