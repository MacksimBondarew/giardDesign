import { AboutContent, AboutImage } from '@/components';

export function AboutSection() {
  return (
    <section className='bg-green'>
      <div className='grid sm:grid-cols-[47.8%_52.2%]'>
        <AboutImage />
        <AboutContent />
      </div>
    </section>
  );
}
