'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'true');
        window.dispatchEvent(new Event('cookieConsentUpdated'));
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'false');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 md:bottom-8 left-0 right-0 z-50 p-4 animate-slide-up">
            <div className="container-custom max-w-7xl mx-auto">
                <div className="glass-card bg-[#0a0a0ab3] backdrop-blur-xl border border-white/10 rounded-2xl py-8 px-8 md:px-12 shadow-2xl">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="text-center md:text-left">
                            <h3 className="text-white font-semibold text-xl mb-2">
                                🍪 Ciasteczka?
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Używamy plików cookies, aby analizować ruch na stronie i poprawiać Twoje doświadczenia.
                                Więcej informacji znajdziesz w{' '}
                                <Link href="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
                                    Polityce Prywatności
                                </Link>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
                            <button
                                onClick={declineCookies}
                                className="px-10 py-4 min-w-[140px] rounded-2xl border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-all text-base font-medium whitespace-nowrap"
                            >
                                Odrzucam
                            </button>
                            <button
                                onClick={acceptCookies}
                                className="px-10 py-4 min-w-[140px] rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-transform shadow-lg text-base whitespace-nowrap"
                            >
                                Akceptuję
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
