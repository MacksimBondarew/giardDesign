import Link from 'next/link';
import { offerItems } from '@/lib/config';

export function OfferDropdown() {
  return (
    <div className='absolute top-[80px] left-1/2 -translate-x-1/2 w-[720px]'>
      <div className='bg-gray-50 rounded-2xl p-6 grid grid-cols-3 gap-4 shadow-lg'>
        {offerItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className='bg-white rounded-2xl p-6 hover:shadow-lg animation'
          >
            <h3 className='font-medium text-sm mb-2'>{item.title}</h3>
            <p className='text-sm text-gray-500 mb-4'>{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
