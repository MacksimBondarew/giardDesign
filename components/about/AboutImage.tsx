import Image from 'next/image';

export function AboutImage() {
  return (
    <div className='relative  min-h-[320px]'>
      <Image
        src={'/images/about-section.jpg'}
        alt={'about image'}
        fill
        className='object-cover'
      />
    </div>
  );
}
