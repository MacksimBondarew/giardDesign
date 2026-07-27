export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const navigation: NavLink[] = [
  { label: 'Oferta', href: '/oferta', hasDropdown: true },
  { label: 'O firmie', href: '/o-firmie' },
  { label: 'Realizacje', href: '#realizations' },
  { label: 'Kontakt', href: '/kontakt' },
];

export interface OfferItem {
  title: string;
  description: string;
  href: string;
}

export const offerItems: OfferItem[] = [
  {
    title: 'Projekty',
    description:
      'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
    href: '/oferta/projekty',
  },
  {
    title: 'Wizualizacje',
    description:
      'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.',
    href: '/oferta/wizualizacje',
  },
  {
    title: 'Realizacje',
    description:
      'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
    href: '#realizations',
  },
];

export const siteConfig = {
  name: 'GiardDesign',
  description:
    'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
};

export type Slide = {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: string;
};

export const slides = [
  {
    title: 'Nowoczesna aranżacja Twojego ogrodu',
    description:
      'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
    primaryCta: { label: 'Skontaktuj się z nami', href: '/contact' },
    secondaryCta: { label: 'Zobacz nasze realizacje', href: '#realizations' },
    image: '/images/garden-hero.jpg',
  },
  {
    title: 'Przestrzeń, która żyje przez cały rok',
    description:
      'Projektujemy ogrody z myślą o każdej porze roku – od wiosennych nasadzeń po zimowe akcenty. Łączymy estetykę z funkcjonalnością, tworząc przestrzeń dopasowaną do Twojego stylu życia.',
    primaryCta: { label: 'Skontaktuj się z nami', href: '/contact' },
    secondaryCta: { label: 'Zobacz nasze realizacje', href: '#realizations' },
    image: '/images/about-section.jpg',
  },
];

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export const services: ServiceItem[] = [
  {
    icon: '/icons/pencil.png',
    title: 'Projekty',
    description:
      'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
    cta: { label: 'Dowiedz się więcej', href: '/projekty' },
  },
  {
    icon: '/icons/eye.png',
    title: 'Wizualizacje',
    description:
      'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.',
    cta: { label: 'Dowiedz się więcej', href: '/wizualizacje' },
  },
  {
    icon: '/icons/stars.png',
    title: 'Realizacje',
    description:
      'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
    cta: { label: 'Zobacz nasze realizacje', href: '#realizations' },
  },
];

export const offerSection = {
  eyebrow: 'Oferta',
  titlePrefix: 'Działamy',
  titleEmphasis: 'kompleksowo',
  description:
    'Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.',
};

export type RealizationImage = {
  src: string;
  alt: string;
};

export const realizations: RealizationImage[] = [
  { src: '/images/projects/garden-terrace.jpg', alt: 'Ogród na tarasach' },
  { src: '/images/projects/indoor-pool.jpg', alt: 'Basen przy domu' },
  { src: '/images/projects/rose-arch.jpg', alt: 'Aleja pnączy' },
  { src: '/images/projects/koi-pond.jpg', alt: 'Staw z karpiami koi' },
  { src: '/images/projects/garden-path.jpg', alt: 'Ścieżka ogrodowa' },
  {
    src: '/images/projects/pergola-wood.jpg',
    alt: 'Drewniana pergola ogrodowa',
  },
  {
    src: '/images/projects/wooden-pergola-terrace.jpg',
    alt: 'Zadaszenie tarasowe',
  },
  {
    src: '/images/projects/courtyard-tree.jpg',
    alt: 'Wewnętrzny dziedziniec z drzewem',
  },
  {
    src: '/images/projects/pergola-rattan-cover.jpg',
    alt: 'Zadaszona pergola',
  },
];

export const INITIAL_REALIZATIONS_COUNT = 9;

export const instagramCta = {
  titleLine1: 'Zostańmy w kontakcie!',
  titleLine2Prefix: 'Znajdziesz nas na',
  titleLine2Emphasis: 'Instagramie',
  followText: 'Śledź nasze najnowsze realizacje!',
  cta: { label: 'Instagram', href: '/instagram' },
};

export const aboutSection = {
  eyebrow: 'O firmie',
  titlePrefix: 'Tworzymy z',
  titleEmphasis: 'pasją',
  description:
    'Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.',
  cta: { label: 'Poznaj nas bliżej', href: '/about' },
};

export const footerData = {
  logo: 'logo',
  ctaText: 'Daj znać, co możemy dla Ciebie zrobić!',
  cta: { label: 'Skontaktuj się z nami', href: '/contact' },
  navLinks: [
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Instagram', href: 'https://instagram.com/giarddesign' },
    { label: 'Facebook', href: 'https://facebook.com/giarddesign' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/giarddesign' },
  ],
  phone: '000-000-000',
  email: 'giarddesign@kontakt.pl',
  copyright: 'Prawa zastrzeżone © 2022',
  madeBy: 'adRespect',
};
