'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation, offerItems } from '@/lib/config';
import { Icon } from '@/components/ui';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div
      id='mobile-menu'
      className={`fixed inset-0 bg-white z-40 overflow-y-auto animation pt-14 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className='container flex flex-col'>
        {navigation.map((link) =>
          link.hasDropdown ? (
            <div key={link.label} className='border-b border-gray-100 py-4'>
              <button
                onClick={() => setMobileOfferOpen((prev) => !prev)}
                className='flex items-center justify-between w-full text-sm  hover:text-green animation cursor-pointer'
              >
                {link.label}
                <Icon
                  name='chevronDown'
                  className={`size-3 ${mobileOfferOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileOfferOpen && (
                <div className='flex flex-col gap-3 mt-4'>
                  {offerItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className='bg-gray-50 rounded-xl p-4 hover:shadow-lg animation'
                    >
                      <h3 className='font-heading text-sm mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-sm text-gray-500'>
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              onClick={onClose}
              className='text-sm  border-b border-gray-100 py-4 hover:text-green animation'
            >
              {link.label}
            </Link>
          ),
        )}

        <div className={'mt-4'}>
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Szukaj...'
            className='w-full bg-gray-100 rounded-full px-4 py-3 outline-none'
          />
        </div>
      </div>
    </div>
  );
}
