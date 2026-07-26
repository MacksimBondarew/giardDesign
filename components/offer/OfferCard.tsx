import Link from 'next/link';
import { Icon } from '@/components/ui';
import type { ServiceItem } from '@/lib';
import Image from 'next/image';

type OfferCardProps = {
  item: ServiceItem;
};

export function OfferCard({ item }: OfferCardProps) {
  return (
    <Link
      href={item.cta.href}
      className='group bg-white rounded-2xl lg:rounded-[28px] py-8 px-6 sm:py-10 sm:px-8 lg:py-12 lg:px-10 animation hover:-translate-y-2 hover:shadow-xl block'
    >
      <Image
        src={item.icon}
        alt={item.icon}
        width={44}
        height={44}
        className='w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 animation group-hover:text-white mb-6 lg:mb-8'
      />

      <h3 className='font-medium font-heading text-xl sm:text-2xl lg:text-[28px] leading-[115%] tracking-[-0.03em] lg:tracking-[-0.05em] mb-3'>
        {item.title}
      </h3>
      <p className='text-sm mb-8 lg:mb-[63px]'>{item.description}</p>

      <span className='inline-flex items-center gap-x-2.5 text-green border-b border-green pb-1 group-hover:font-bold animation'>
        {item.cta.label}
        <Icon name='arrowRight' className='w-5 h-5 lg:w-6 lg:h-6' />
      </span>
    </Link>
  );
}
