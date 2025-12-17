'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function GoogleAnalytics({ ga_id }: { ga_id: string }) {
    const [consentGranted, setConsentGranted] = useState(false);

    useEffect(() => {
        // Check initial consent status
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'true') {
            setConsentGranted(true);
        }

        // Listen for consent updates
        const handleConsentUpdate = () => {
            const newConsent = localStorage.getItem('cookieConsent');
            if (newConsent === 'true') {
                setConsentGranted(true);
            }
        };

        window.addEventListener('cookieConsentUpdated', handleConsentUpdate);
        return () => window.removeEventListener('cookieConsentUpdated', handleConsentUpdate);
    }, []);

    if (!consentGranted) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga_id}', {
                    page_path: window.location.pathname,
                });
                `}
            </Script>
        </>
    );
}
