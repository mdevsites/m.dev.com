// ===================================
// CONSTANTS & DATA FOR PORTFOLIO SITE
// ===================================

// Contact Information (Placeholders - to be updated)
export const CONTACT_INFO = {
  email: 'm.devkontakt@gmail.com',
  phone: '+48 691 630 461',
  whatsapp: '48691630461',
  location: 'Polska',
};

// Social Media Links (Placeholders)
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com',
};

// Navigation Menu Items
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Cennik', href: '/pricing' },
  { name: 'Kontakt', href: '/contact' },
];

// USP (Unique Selling Points) Data
export const USP_ITEMS = [
  {
    icon: '⚡',
    title: 'Szybka realizacja',
    description: 'Projekty realizowane w 2-4 tygodnie',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '💻',
    title: 'Nowoczesne technologie',
    description: 'React, Next.js, najnowsze standardy web development',
    color: 'from-blue-400 to-purple-500',
  },
  {
    icon: '📱',
    title: 'Responsywny design',
    description: 'Idealne wyświetlanie na wszystkich urządzeniach',
    color: 'from-green-400 to-cyan-500',
  },
  {
    icon: '🛟',
    title: 'Wsparcie posprzedażowe',
    description: '3 miesiące darmowego wsparcia technicznego',
    color: 'from-pink-400 to-red-500',
  },

  {
    icon: '💰',
    title: 'Konkurencyjne ceny',
    description: 'Najlepsza jakość w przystępnej cenie',
    color: 'from-emerald-400 to-teal-500',
  },
];

// Process Timeline Data
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Bezpłatna konsultacja',
    description: 'Rozmowa o potrzebach, analiza wymagań, wycena i propozycja',
    icon: '💬',
  },
  {
    number: '02',
    title: 'Przygotowanie oferty',
    description: 'Ustalenie zakresu prac i harmonogramu projektu',
    icon: '📄',
  },
  {
    number: '03',
    title: 'Projektowanie',
    description: 'Mockupy, wireframes i akceptacja designu',
    icon: '🎨',
  },
  {
    number: '04',
    title: 'Wdrożenie',
    description: 'Kodowanie strony, testy i poprawki',
    icon: '💻',
  },
  {
    number: '05',
    title: 'Wsparcie',
    description: 'Szkolenie z obsługi i pomoc techniczna',
    icon: '🚀',
  },
];

// Testimonials Data (Placeholder content)
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Profesjonalizm i szybka realizacja projektów! Nasza strona przekroczyła wszystkie oczekiwania.',
    author: 'Jan Kowalski',
    position: 'CEO',
    company: 'TechStartup',
    rating: 5,
    avatar: null, // Can add image path later
  },
  {
    id: 2,
    quote:
      'Świetna współpraca i elastyczne podejście. Marcin zawsze był otwarty na nasze sugestie.',
    author: 'Maria Lewandowska',
    position: 'Właścicielka',
    company: 'Salon Piękności',
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    quote:
      'Konkurencyjne ceny i wysoka jakość. Zdecydowanie polecam!',
    author: 'Piotr Nowak',
    position: 'Właściciel',
    company: 'Restauracja Smaki Świata',
    rating: 5,
    avatar: null,
  },
  {
    id: 4,
    quote:
      'Szybkie wdrożenie i przyjemny kontakt. Strona działa rewelacyjnie!',
    author: 'Anna Wiśniewska',
    position: 'Trenerka',
    company: 'Fitness Club',
    rating: 5,
    avatar: null,
  },
  {
    id: 5,
    quote:
      'Fantastyczne projekty i świetny kontakt. Współpraca była bezproblemowa!',
    author: 'Tomasz Rutkowski',
    position: 'Dyrektor',
    company: 'Firma Budowlana',
    rating: 5,
    avatar: null,
  },
];

// Project Types for Contact Form
export const PROJECT_TYPES = [
  'Landing Page',
  'Strona firmowa',
  'Sklep e-commerce',
  'Portfolio/Blog',
  'Aplikacja webowa',
  'Inne',
];

// Budget Ranges for Contact Form
export const BUDGET_RANGES = [
  '< 2000 PLN',
  '2000-5000 PLN',
  '5000-10000 PLN',
  '> 10000 PLN',
  'Nie jestem pewien',
];

// Service Packages for Pricing Page (preview data)
export const SERVICE_PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    price: '1999',
    currency: 'PLN',
    description: 'Idealny na start dla małych firm',
    features: [
      'Landing page (1 strona)',
      'Responsywny design',
      'Formularz kontaktowy',
      'Podstawowe SEO',
      '1 miesiąc wsparcia',
    ],
    highlighted: false,
  },
  {
    id: 'business',
    name: 'Business',
    price: '4999',
    currency: 'PLN',
    description: 'Najpopularniejszy wybór przedsiębiorców',
    features: [
      'Do 7 podstron',
      'Zaawansowany design',
      'CMS do zarządzania treścią',
      'Galeria zdjęć',
      'Zaawansowane SEO',
      '3 miesiące wsparcia',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '9999',
    currency: 'PLN',
    description: 'Kompleksowe rozwiązanie dla wymagających',
    features: [
      'Nielimitowane podstrony',
      'Custom funkcjonalności',
      'Sklep e-commerce',
      'Integracje API',
      'Premium SEO + Analytics',
      '6 miesięcy wsparcia',
      'Dedykowany opiekun projektu',
    ],
    highlighted: false,
  },
];
// Portfolio Projects Data
export const PORTFOLIO_PROJECTS = [
  {
    id: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    shortDescription:
      'Kompleksowy dashboard analityczny dla platformy SaaS. Zawiera interaktywne wykresy, zarządzanie użytkownikami i raportowanie w czasie rzeczywistym. Zaprojektowany z myślą o czytelności danych i intuicyjnej nawigacji.',
    fullDescription:
      'Projekt obejmował stworzenie kompleksowego panelu administracyjnego dla klienta z branży SaaS. Głównym wyzwaniem było przedstawienie dużej ilości danych w czytelny sposób. Zastosowaliśmy jasny podział na sekcje, interaktywne wykresy oraz tryb ciemny/jasny dla wygody użytkowników.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Recharts'],
    imageSrc: '/assets/projects/dashboard.png',
    link: '#',
    client: 'TechAnalytics Ltd.',
    timeline: '4 tygodnie',
    role: 'Full Stack Developer',
    challenge: 'Konieczność przetworzenia i wizualizacji milionów rekordów danych w czasie rzeczywistym bez utraty wydajności aplikacji.',
    solution: 'Wykorzystanie renderowania po stronie serwera (SSR) w Next.js oraz biblioteki Recharts do lekkich, ale potężnych wizualizacji.',
    results: [
      'Zwiększenie szybkości ładowania raportów o 60%',
      'Pozytywny feedback od 95% użytkowników beta',
      'Intuicyjny interfejs niewymagający szkolenia'
    ]
  },
  {
    id: 'ecommerce-fashion-store',
    title: 'E-commerce Fashion Store',
    shortDescription:
      'Nowoczesny sklep internetowy dla marki odzieżowej premium. Minimalistyczny design, płynne animacje i zoptymalizowany proces zakupowy. Integracja z systemem płatności i zarządzaniem stanami magazynowymi.',
    fullDescription:
      'Dla marki modowej Premium stworzyliśmy sklep, który jest nie tylko miejscem zakupów, ale wizytówką stylu. Skupiliśmy się na wysokiej jakości zdjęciach, animacjach przy przejściach między stronami oraz bezproblemowym procesie checkoutu.',
    tags: ['Next.js', 'Shopify', 'Framer Motion', 'Stripe'],
    imageSrc: '/assets/projects/ecommerce.png',
    link: '#',
    client: 'ModaVogue',
    timeline: '6 tygodni',
    role: 'Frontend Developer & UI Designer',
    challenge: 'Stworzenie unikalnego doświadczenia zakupowego, które odróżni markę od konkurencji na Shopify.',
    solution: 'Headless Shopify z frontendem w Next.js. Pozwoliło to na pełną swobodę w designie i animacjach przy zachowaniu potężnego backendu e-commerce.',
    results: [
      'Wzrost konwersji o 25% w pierwszym kwartale',
      'Średni czas sesji wydłużony o 40%',
      'Bezproblemowa obsługa ruchu podczas Black Friday'
    ]
  },
  {
    id: 'fintech-mobile-app',
    title: 'FinTech Mobile App',
    shortDescription:
      'Interfejs aplikacji bankowej nowej generacji. Ciemny motyw, bezpieczne logowanie biometryczne i wizualizacja wydatków. Skupienie na UX i bezpieczeństwie transakcji finansowych.',
    fullDescription:
      'Projekt interfejsu i prototypu aplikacji fintechowej pomagającej w zarządzaniu finansami osobistymi. Kluczowe było połączenie najwyższych standardów bezpieczeństwa z przyjaznym i nowoczesnym designem.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'GraphQL'],
    imageSrc: '/assets/projects/mobile-app.png',
    link: '#',
    client: 'FinSmart',
    timeline: '8 tygodni',
    role: 'Lead Developer',
    challenge: 'Zbudowanie zaufania użytkowników poprzez design przy jednoczesnym uproszczeniu skomplikowanych operacji bankowych.',
    solution: 'Zastosowanie biometrii, jasnych komunikatów bezpieczeństwa oraz "grywalizacji" oszczędzania poprzez interaktywne cele.',
    results: [
      'Aplikacja wyróżniona w App Store',
      'Ponad 10,000 pobrań w pierwszym miesiącu',
      'Wysoka ocena 4.8/5 w sklepach z aplikacjami'
    ]
  },
  {
    id: 'corporate-landing-page',
    title: 'Corporate Landing Page',
    shortDescription:
      'Reprezentacyjna strona dla firmy konsultingowej. Elegancki design, sekcje "O nas", "Usługi" i formularz kontaktowy. Pełna responsywność i optymalizacja SEO.',
    fullDescription:
      'Elegancka wizytówka online dla firmy doradczej. Strona musiała budzić zaufanie i profesjonalizm. Postawiliśmy na stonowaną kolorystykę, dużo białej przestrzeni i wysokiej klasy typografię.',
    tags: ['Next.js', 'GSAP', 'Tailwind CSS'],
    imageSrc: '/assets/projects/dashboard.png', // Reusing image
    link: '#',
    client: 'ConsultCorp',
    timeline: '2 tygodnie',
    role: 'Web Developer',
    challenge: 'Przedstawienie dużej ilości tekstu ofertowego w sposób, który nie przytłoczy użytkownika.',
    solution: 'Zastosowanie akordeonów, zakładek i interaktywnych elementów UI, które dawkują wiedzę użytkownikowi.',
    results: [
      'Zwiększenie zapytań ofertowych o 30%',
      'Czas ładowania strony poniżej 1 sekundy',
      'Pełna zgodność z wymogami WCAG 2.1'
    ]
  },
];
