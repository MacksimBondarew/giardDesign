import {
  AboutSection,
  HeroSection,
  InstagramCtaSection,
  NavigationSection,
  OfferSection,
  RealizationsSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <RealizationsSection />
      <InstagramCtaSection />
    </main>
  );
}
