import Image from 'next/image';

export function AboutImage() {
  return (
    <div className='relative  min-h-[320px]'>
      <Image
        src={'/images/about-section.jpg'}
        alt={'about image'}
        fill
        sizes='(min-width: 640px) 48vw, 100vw'
        className='object-cover'
      />
    </div>
  );
}
