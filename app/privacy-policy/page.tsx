import React from 'react';
import BackgroundEffects from '@/components/ui/BackgroundEffects';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen relative pb-20">
            <BackgroundEffects />

            <div className="h-32 w-full" />

            <div className="container-custom w-full max-w-4xl relative z-10 px-4 mx-auto flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">
                    Polityka Prywatności
                </h1>

                <div className="space-y-8 text-gray-300 leading-relaxed bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Postanowienia Ogólne</h2>
                        <p>
                            Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z serwisu internetowego.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Administrator Danych</h2>
                        <p>
                            Administratorem danych osobowych zawartych w serwisie jest M.DEV - Tworzenie Stron Internetowych.
                            Kontakt z Administratorem możliwy jest drogą elektroniczną pod adresem e-mail: m.devkontakt@gmail.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Zakres i cel zbierania danych</h2>
                        <p>
                            Dane osobowe przetwarzane są w celu:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy.</li>
                            <li>Przygotowania oferty współpracy.</li>
                            <li>Realizacji zamówionych usług.</li>
                        </ul>
                        <p className="mt-4">
                            Podanie danych jest dobrowolne, jednak niezbędne do przetworzenia zapytania lub realizacji usługi.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Pliki Cookies</h2>
                        <p>
                            Serwis korzysta z plików cookies w celu zapewnienia poprawnego działania strony oraz analizy ruchu (Google Analytics).
                            Użytkownik ma możliwość określenia warunków przechowywania lub uzyskiwania dostępu do plików cookies za pomocą ustawień przeglądarki internetowej.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Prawa Użytkownika</h2>
                        <p>
                            Użytkownikowi przysługują następujące prawa związane z przetwarzaniem danych osobowych:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-2">
                            <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
                            <li>Prawo do sprostowania (poprawiania) swoich danych.</li>
                            <li>Prawo do usunięcia danych (prawo do bycia zapomnianym).</li>
                            <li>Prawo do ograniczenia przetwarzania danych.</li>
                            <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
                        </ul>
                    </section>

                    <section className="pt-8 border-t border-white/10">
                        <p className="text-sm text-gray-200">
                            Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
