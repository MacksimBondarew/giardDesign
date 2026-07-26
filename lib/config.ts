export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export const navigation: NavLink[] = [
  { label: 'Oferta', href: '/oferta', hasDropdown: true },
  { label: 'O firmie', href: '/o-firmie' },
  { label: 'Realizacje', href: '/realizacje' },
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
    href: '/oferta/realizacje',
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
    secondaryCta: { label: 'Zobacz nasze realizacje', href: '/projects' },
    image: '/images/garden-hero.jpg',
  },
  {
    title: 'Przestrzeń, która żyje przez cały rok',
    description:
      'Projektujemy ogrody z myślą o każdej porze roku – od wiosennych nasadzeń po zimowe akcenty. Łączymy estetykę z funkcjonalnością, tworząc przestrzeń dopasowaną do Twojego stylu życia.',
    primaryCta: { label: 'Skontaktuj się z nami', href: '/contact' },
    secondaryCta: { label: 'Zobacz nasze realizacje', href: '/projects' },
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
    cta: { label: 'Zobacz nasze realizacje', href: '/projects' },
  },
];
