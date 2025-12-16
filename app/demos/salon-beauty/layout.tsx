import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: "Beauty Salon - Salon kosmetyczny w Warszawie",
    description: "Profesjonalny salon beauty w Warszawie. Stylizacja paznokci, zabiegi na twarz, makijaż.",
};

export default function SalonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${montserrat.variable} ${openSans.variable} font-sans text-[#212121] bg-white selection:bg-[#D4AF37] selection:text-white [&_*]:text-center w-full`}>
            <Navbar />
            <main className="w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
}
