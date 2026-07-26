'use client';

import { useRef, useState } from 'react';
import { Icon } from '@/components/ui';

export function SearchInput() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setSearchOpen((prevState) => !prevState);
    setSearchValue('');
  };

  return (
    <div ref={wrapperRef} className='hidden lg:flex items-center shrink-0'>
      <input
        ref={inputRef}
        type='text'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Szukaj...'
        className={`bg-gray-100 rounded-full text-sm outline-none animation ${
          searchOpen
            ? 'w-56 px-4 py-2 opacity-100 mr-2'
            : 'w-0 px-0 py-2 opacity-0 pointer-events-none'
        }`}
      />
      <button
        onClick={toggleSearch}
        className='rounded-full group cursor-pointer'
        aria-label='Szukaj'
      >
        <Icon
          name={searchOpen ? 'close' : 'search'}
          className='w-6 h-6  group-hover:text-gray-500 animation'
        />
      </button>
    </div>
  );
}
