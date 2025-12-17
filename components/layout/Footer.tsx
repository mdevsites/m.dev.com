import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/10">
            <div className="container-custom py-6">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Copyright & Links */}
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-medium">
                        <p>© {currentYear} M.DEV Wszystkie prawa zastrzeżone.</p>
                        <span className="hidden md:block">•</span>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Polityka Prywatności
                        </Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4">
                        <a
                            href={SOCIAL_LINKS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-light hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-light hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href={SOCIAL_LINKS.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-light hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
