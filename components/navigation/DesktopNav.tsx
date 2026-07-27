'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/lib/config';
import { Icon } from '@/components/ui';
import { OfferDropdown } from '@/components';

export function DesktopNav() {
  const [offerOpen, setOfferOpen] = useState(false);

  const openOffer = () => setOfferOpen(true);
  const closeOffer = () => setOfferOpen(false);

  return (
    <nav className='hidden lg:flex items-center gap-8'>
      {navigation.map((link) =>
        link.hasDropdown ? (
          <div
            key={link.label}
            className='relative'
            onMouseEnter={openOffer}
            onMouseLeave={closeOffer}
          >
            <button
              className='flex items-center text-sm gap-1  cursor-pointer nav-item-padding hover:text-green animation'
              aria-expanded={offerOpen}
            >
              {link.label}
              <Icon
                name='chevronDown'
                className={`size-3 animation ${offerOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {offerOpen && <OfferDropdown />}
          </div>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className='text-sm hover:text-green animation nav-item-padding nav-underline'
          >
            {link.label}
          </Link>
        ),
      )}
    </nav>
  );
}
