import { OfferCard } from './OfferCard';
import { services } from '@/lib';
import { SectionHeader } from '@/components';

export function OfferSection() {
  return (
    <section className='bg-gray py-16 sm:py-20 lg:pt-[120px] lg:pb-[160px]'>
      <div className='container'>
        <SectionHeader
          className='px-0 sm:pl-8 lg:pl-[111px] mb-12 sm:mb-16 lg:mb-24'
          eyebrow='Oferta'
          title={
            <>
              Działamy <em className='italic font-main'>kompleksowo</em>
            </>
          }
          description='Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem.'
        />

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-16'>
          {services.map((item) => (
            <OfferCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
