import { icons, type IconName } from './icons-data';
import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, className = '', ...props }: IconProps) {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={icon.viewBox}
      fill={icon.fill ?? 'none'}
      className={className}
      {...props}
    >
      {icon.paths.map((path, i) => (
        <path key={i} {...path} />
      ))}
    </svg>
  );
}
