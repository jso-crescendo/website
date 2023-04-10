import classNames from 'classnames';
import Link from 'next/link';

import {ArrowRight} from '../icons/arrow-right';

interface LinkProps {
  type: 'primary' | 'secondary';
  href: string;
  text: string;
}
export const LinkButton: React.FC<
  LinkProps &
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
> = ({href, text, type, className}) => (
  <Link
    type="button"
    className={classNames(
      'inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium',
      'focus:outline-none focus:ring-4',
      {
        'bg-primary-main text-on-primary hover:bg-primary-darker focus:ring-primary-lighter':
          type === 'primary',
        'bg-secondary-main text-on-secondary hover:bg-secondary-darker focus:ring-secondary-lighter':
          type === 'secondary',
      },
      className,
    )}
    href={href}
  >
    {text}
    <ArrowRight className="ml-2 h-5" />
  </Link>
);
