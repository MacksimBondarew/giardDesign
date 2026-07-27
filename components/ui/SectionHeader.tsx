import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  about?: boolean;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  about,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <span
        className={`text-xs font-medium block ${eyebrow && 'mb-3 sm:mb-4'} ${about ? 'text-gray' : 'text-green'}`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-medium text-3xl sm:text-4xl lg:text-5xl leading-[36px] sm:leading-[42px] lg:leading-[55px] tracking-[-0.02em] font-heading ${description && 'mb-5 sm:mb-6 lg:mb-8'} ${about && 'max-w-[250px] lg:mb-10'} ${!eyebrow && 'lg:text-[40px] font-normal'}`}
      >
        {title}
      </h2>
      {description && (
        <p className='max-w-full sm:max-w-[600px] lg:max-w-[700px]'>
          {description}
        </p>
      )}
    </div>
  );
}
