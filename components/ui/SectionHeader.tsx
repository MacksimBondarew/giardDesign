import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <span className='text-green text-xs font-medium mb-3 sm:mb-4 block'>
        {eyebrow}
      </span>
      <h2
        className={`font-medium text-3xl sm:text-4xl lg:text-5xl leading-[115%] tracking-[-0.02em] lg:tracking-[-0.03em] font-heading ${description && 'mb-5 sm:mb-6 lg:mb-8'}`}
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
