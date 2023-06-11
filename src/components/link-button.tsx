import {ArrowRight} from '../icons/arrow-right';
import Link from 'next/link';
import classNames from 'classnames';

interface LinkProps {
  type: 'primary' | 'secondary';
  href: string | {pathname: string; hash: string};
  text: string;
}
export const LinkButton: React.FC<
  LinkProps &
    Omit<
      React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >,
      'href'
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
        ' text-primary-main ring-4 ring-primary-lighter hover:text-primary-darker hover:ring-primary-darker focus:ring-secondary-darker':
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
