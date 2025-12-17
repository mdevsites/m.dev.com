import Image from 'next/image';
import { Metadata } from 'next';
import {
    Wrench,
    Gauge,
    Droplet,
    Settings,
    Snowflake,
    ClipboardCheck,
    Phone,
    Mail,
    MapPin,
    Clock,
    CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'Profesjonalny Serwis Samochodowy - Warsztat Auto',
    description:
        'Warsztat samochodowy z 20-letnim doświadczeniem. Diagnostyka, serwis olejowy, wymiana opon, naprawy mechaniczne. Certyfikowany serwis z gwarancją.',
};

export default function MechanikPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* HERO SECTION - Banner style (70vh) */}
            {/* HERO SECTION - Improved Mobile Layout */}
            <section className="relative min-h-[50vh] md:min-h-[70vh] flex flex-col md:flex-row md:items-center md:justify-center py-12 md:py-0">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/demos/mechanik/hero-bg-unsplash.jpg"
                        alt="Warsztat samochodowy"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>

                {/* Logo - Top Left (Mobile: Center, Desktop: Absolute Left) */}
                <div
                    className="relative w-full md:w-auto flex justify-center md:block mb-6 md:mb-0"
                    style={{
                        zIndex: 20
                    }}
                >
                    <div className="md:absolute md:top-6 md:left-6">
                        <Image
                            src="/assets/demos/mechanik/logo-vector.svg"
                            alt="Warsztat Auto Logo"
                            width={200}
                            height={80}
                            style={{ objectFit: 'contain', display: 'block' }}
                        />
                    </div>
                </div>


                {/* Content - Vertical Center on Desktop/Mobile */}
                <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                    <h2 className="text-lg md:text-[48px] font-bold mb-4 md:mb-6 leading-tight">
                        Profesjonalny Serwis Samochodowy
                    </h2>
                    <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-12">
                        Doświadczenie, jakość i rzetelność od 1995 roku
                    </p>
                    {/* Button with exact blue color #1E40AF */}
                    <a
                        href="#kontakt"
                        style={{
                            backgroundColor: '#1E40AF',
                            paddingLeft: '40px',
                            paddingRight: '40px',
                            paddingTop: '16px',
                            paddingBottom: '16px',
                            fontSize: '20px',
                            marginTop: '48px',
                            display: 'inline-block',
                            textDecoration: 'none'
                        }}
                        className="hidden md:inline-block hover:opacity-90 text-white font-semibold rounded-lg transition-opacity duration-200"
                    >
                        Umów wizytę
                    </a>

                    {/* Trust Badges with orange #F59E0B */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm" style={{ marginTop: '32px' }}>
                        <div className="flex flex-col items-center">
                            <CheckCircle2
                                className="w-8 h-8 mb-2"
                                style={{ color: '#F59E0B' }}
                            />
                            <p className="font-semibold">20+ lat doświadczenia</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2
                                className="w-8 h-8 mb-2"
                                style={{ color: '#F59E0B' }}
                            />
                            <p className="font-semibold">Certyfikowany serwis</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle2
                                className="w-8 h-8 mb-2"
                                style={{ color: '#F59E0B' }}
                            />
                            <p className="font-semibold">Gwarancja na usługi</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            {/* Padding: 80px top/bottom = py-20 */}
            <section className="flex justify-center" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
                <div className="px-8 w-full max-w-6xl">
                    <div>
                        {/* H2: 36px */}
                        <h2
                            className="text-2xl md:text-[36px] font-bold text-center"
                            style={{ color: '#111827', marginBottom: '48px' }}
                        >
                            Nasze Usługi
                        </h2>

                        {/* Grid: 3 columns desktop, 2 tablet, 1 mobile - centered */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {/* Service 1 */}
                            {/* Service 1 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <Gauge className="w-10 h-10 text-white" />
                                </div>
                                {/* H3: 24px */}
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Diagnostyka komputerowa
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Kompleksowa diagnostyka elektroniki
                                </p>
                            </div>

                            {/* Service 2 */}
                            {/* Service 2 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <Settings className="w-10 h-10 text-white" />
                                </div>
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Wymiana opon i wulkanizacja
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Sezonowa wymiana i naprawa opon
                                </p>
                            </div>

                            {/* Service 3 */}
                            {/* Service 3 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <Droplet className="w-10 h-10 text-white" />
                                </div>
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Serwis olejowy
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Wymiana oleju i filtrów
                                </p>
                            </div>

                            {/* Service 4 */}
                            {/* Service 4 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <Wrench className="w-10 h-10 text-white" />
                                </div>
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Naprawy mechaniczne
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Naprawa silnika, skrzyni biegów, zawieszenia
                                </p>
                            </div>

                            {/* Service 5 */}
                            {/* Service 5 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <Snowflake className="w-10 h-10 text-white" />
                                </div>
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Klimatyzacja
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Serwis i naprawa klimatyzacji
                                </p>
                            </div>

                            {/* Service 6 */}
                            {/* Service 6 */}
                            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 aspect-square w-full shadow-xl p-8 flex flex-col items-center justify-center text-center group rounded-xl">
                                <div
                                    className="w-20 h-20 flex items-center justify-center mb-6"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    <ClipboardCheck className="w-10 h-10 text-white" />
                                </div>
                                <h3
                                    className="text-[20px] font-bold mb-3"
                                    style={{ color: '#111827' }}
                                >
                                    Przeglądy okresowe
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#6B7280' }}
                                >
                                    Przeglądy techniczne i rejestracyjne
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            {/* Padding: 80px, bg-gray-50 */}
            <section className="bg-gray-100 flex justify-center" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
                <div className="w-full max-w-6xl" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
                    <div>
                        {/* Split: 50/50 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Text Content - 50% */}
                            <div>
                                <h2
                                    className="text-2xl md:text-[36px] font-bold"
                                    style={{ color: '#111827', marginBottom: '40px' }}
                                >
                                    Twój zaufany partner w dbałości o auto
                                </h2>
                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: '#111827', marginBottom: '32px' }}
                                >
                                    Nasz warsztat działa nieprzerwanie od 1995 roku. Przez te lata
                                    obsłużyliśmy tysiące zadowolonych klientów, zarabiając na ich
                                    zaufanie dzięki rzetelności i profesjonalizmowi.
                                </p>
                                <p
                                    className="text-base leading-relaxed"
                                    style={{ color: '#111827', marginBottom: '40px' }}
                                >
                                    Dysponujemy nowoczesnym sprzętem diagnostycznym oraz
                                    doświadczonym zespołem mechaników. Każde auto traktujemy z
                                    należytą starannością.
                                </p>

                                {/* Benefits List with blue checkmarks */}
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-5">
                                        <CheckCircle2
                                            className="w-6 h-6 mt-0.5 flex-shrink-0"
                                            style={{ color: '#1E40AF' }}
                                        />
                                        <span style={{ color: '#111827' }} className="text-base">
                                            Certyfikowani mechanicy
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <CheckCircle2
                                            className="w-6 h-6 mt-0.5 flex-shrink-0"
                                            style={{ color: '#1E40AF' }}
                                        />
                                        <span style={{ color: '#111827' }} className="text-base">
                                            Oryginalne części zamienne
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <CheckCircle2
                                            className="w-6 h-6 mt-0.5 flex-shrink-0"
                                            style={{ color: '#1E40AF' }}
                                        />
                                        <span style={{ color: '#111827' }} className="text-base">
                                            Konkurencyjne ceny
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-5">
                                        <CheckCircle2
                                            className="w-6 h-6 mt-0.5 flex-shrink-0"
                                            style={{ color: '#1E40AF' }}
                                        />
                                        <span style={{ color: '#111827' }} className="text-base">
                                            Gwarancja na usługi
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Image - 50% */}
                            <div className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/demos/mechanik/team.png"
                                    alt="Zespół warsztatu mechanicznego"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            {/* Padding: 80px */}
            <section id="kontakt" className="flex justify-center" style={{ paddingTop: '128px', paddingBottom: '128px' }}>
                <div className="w-full max-w-6xl" style={{ paddingLeft: '24px', paddingRight: '24px' }}>


                    {/* Split: 40% info, 60% form */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info - 40% (2 of 5 columns) */}
                        <div className="lg:col-span-2 flex flex-col justify-between h-full py-2 gap-8">
                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                                <MapPin
                                    className="w-6 h-6 mt-1 flex-shrink-0"
                                    style={{ color: '#1E40AF' }}
                                />
                                <div>
                                    <h3
                                        className="font-semibold mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Adres
                                    </h3>
                                    <p style={{ color: '#111827' }}>
                                        ul. Mechaniczna 15
                                        <br />
                                        00-001 Warszawa
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                                <Phone
                                    className="w-6 h-6 mt-1 flex-shrink-0"
                                    style={{ color: '#1E40AF' }}
                                />
                                <div>
                                    <h3
                                        className="font-semibold mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Telefon
                                    </h3>
                                    <p style={{ color: '#111827' }}>+48 123 456 789</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                                <Mail
                                    className="w-6 h-6 mt-1 flex-shrink-0"
                                    style={{ color: '#1E40AF' }}
                                />
                                <div>
                                    <h3
                                        className="font-semibold mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Email
                                    </h3>
                                    <p style={{ color: '#111827' }}>kontakt@warsztat-auto.pl</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-4">
                                <Clock
                                    className="w-6 h-6 mt-1 flex-shrink-0"
                                    style={{ color: '#1E40AF' }}
                                />
                                <div>
                                    <h3
                                        className="font-semibold mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Godziny otwarcia
                                    </h3>
                                    <p style={{ color: '#111827' }}>
                                        Pn-Pt: 8:00 - 18:00
                                        <br />
                                        Sobota: 9:00 - 14:00
                                        <br />
                                        Niedziela: Nieczynne
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form - 60% (3 of 5 columns) */}
                        <div className="lg:col-span-3">
                            <h2
                                className="text-2xl md:text-[36px] font-bold mb-8"
                                style={{ color: '#111827' }}
                            >
                                Skontaktuj się z nami
                            </h2>
                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Imię i nazwisko *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-[#1E40AF] focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Telefon *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="car"
                                        className="block text-sm font-medium mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Marka i model auta
                                    </label>
                                    <input
                                        type="text"
                                        id="car"
                                        name="car"
                                        placeholder="np. Toyota Corolla"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-1"
                                        style={{ color: '#111827' }}
                                    >
                                        Wiadomość *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition resize-none"
                                    />
                                </div>

                                {/* Full width blue button */}
                                <button
                                    type="submit"
                                    className="w-full text-white font-semibold px-6 py-4 rounded-lg transition-opacity duration-200 text-lg hover:opacity-90"
                                    style={{ backgroundColor: '#1E40AF' }}
                                >
                                    Wyślij zapytanie
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            {/* Background: #1F2937 (gray-800) */}
            {/* FOOTER */}
            {/* Background: #1F2937 (gray-800) */}
            <footer style={{ backgroundColor: '#1F2937', paddingTop: '32px', paddingBottom: '32px', paddingLeft: '24px', paddingRight: '24px' }}>
                <div style={{ maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
                    <p style={{ color: '#D1D5DB' }}>
                        Copyright © 2024 Warsztat Auto. Wszystkie prawa zastrzeżone.
                    </p>
                </div>
            </footer>
        </div >
    );
}
