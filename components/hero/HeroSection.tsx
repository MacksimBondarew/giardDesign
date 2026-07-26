import { slides } from '@/lib';
import { HeroSlider } from './HeroSlider';

export function HeroSection() {
  return (
    <section className='relative w-full overflow-hidden bg-beige'>
      <HeroSlider slides={slides} />
    </section>
  );
}
