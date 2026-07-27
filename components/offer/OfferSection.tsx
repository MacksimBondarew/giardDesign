import { OfferCard } from './OfferCard';
import { services, offerSection } from '@/lib';
import { SectionHeader } from '@/components';

export function OfferSection() {
  return (
    <section className='bg-gray py-16 sm:py-20 lg:pt-[120px] lg:pb-[160px]'>
      <div className='container'>
        <SectionHeader
          className='px-0 sm:pl-8 lg:pl-[111px] mb-12 sm:mb-16 lg:mb-24'
          eyebrow={offerSection.eyebrow}
          title={
            <>
              {offerSection.titlePrefix}{' '}
              <em className='italic font-main'>{offerSection.titleEmphasis}</em>
            </>
          }
          description={offerSection.description}
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
