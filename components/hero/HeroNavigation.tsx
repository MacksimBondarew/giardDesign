import { NavButton } from '@/components';

type HeroNavigationProps = {
  onPrev: () => void;
  onNext: () => void;
};

export function HeroNavigation({ onPrev, onNext }: HeroNavigationProps) {
  return (
    <div className='absolute bottom-0 right-0 flex bg-gray'>
      <NavButton
        onClick={onPrev}
        ariaLabel='Poprzedni slajd'
        icon='arrowLeft'
      />
      <NavButton
        onClick={onNext}
        ariaLabel='Następny slajd'
        icon='arrowRight'
      />
    </div>
  );
}
