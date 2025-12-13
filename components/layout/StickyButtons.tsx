'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { CONTACT_INFO } from '@/lib/constants';

export default function StickyButtons() {
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
            icon: <FaWhatsapp size={24} />,
            href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s+/g, '')}`,
            label: 'WhatsApp',
            bgColor: 'bg-green-500 hover:bg-green-600',
            shadowColor: 'hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]',
        },
        {
            icon: <FaEnvelope size={20} />,
            href: `mailto:${CONTACT_INFO.email}`,
            label: 'Email',
            bgColor: 'bg-gradient-to-br from-purple-600 to-pink-500',
            shadowColor: 'hover:shadow-glow-pink',
        },
        {
            icon: <FaPhone size={20} />,
            href: `tel:${CONTACT_INFO.phone}`,
            label: 'Telefon',
            bgColor: 'bg-purple-medium hover:bg-purple-light',
            shadowColor: 'hover:shadow-glow',
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
                    target={button.label === 'WhatsApp' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`${button.bgColor} ${button.shadowColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white shadow-large transition-all duration-300 hover:scale-110`}
                    style={{
                        animationDelay: `${index * 100}ms`,
                    }}
                    aria-label={button.label}
                    title={button.label}
                >
                    {button.icon}
                </a>
            ))}
        </div>
    );
}
