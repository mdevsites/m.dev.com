import { Metadata } from 'next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyButtons from './components/StickyButtons';

export const metadata: Metadata = {
    title: 'Horizon Estates - Luksusowe Nieruchomości | Demo',
    description: 'Ekskluzywne domy i apartamenty w najbardziej prestiżowych lokalizacjach. Odkryj demo platformy dla agencji nieruchomości premium.',
};

import NoiseOverlay from './components/NoiseOverlay';

export default function RealEstateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NoiseOverlay />
            <StickyButtons />
            <div className="bg-[#121212] text-white min-h-screen selection:bg-[#C5A059] selection:text-[#121212]">
                <Navbar />
                <main className="flex flex-col items-center w-full overflow-x-hidden">{children}</main>
                <Footer />
            </div>
        </>
    );
}
