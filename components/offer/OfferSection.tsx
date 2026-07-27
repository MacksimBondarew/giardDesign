import { OfferCard } from './OfferCard';
import { services, offerSection } from '@/lib';
import { SectionHeader } from '@/components';
import { Reveal } from '../ui';

export function OfferSection() {
  return (
    <section className='bg-gray py-16 sm:py-20 lg:pt-[120px] lg:pb-[160px]'>
      <div className='container'>
        <Reveal>
          <SectionHeader
            className='px-0 sm:pl-8 lg:pl-[111px] mb-12 sm:mb-16 lg:mb-24'
            eyebrow={offerSection.eyebrow}
            title={
              <>
                {offerSection.titlePrefix}{' '}
                <em className='italic font-main'>
                  {offerSection.titleEmphasis}
                </em>
              </>
            }
            description={offerSection.description}
          />
        </Reveal>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-16'>
          {services.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <OfferCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
