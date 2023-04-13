import {ArrowRight} from '../icons/arrow-right';
import Link from 'next/link';
import classNames from 'classnames';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  text: string;
}
export const Button: React.FC<
  ButtonProps &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({text, variant, className, disabled, ...rest}) => (
  <button
    className={classNames(
      'inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium',
      'focus:outline-none focus:ring-4',
      {
        'bg-primary-main text-on-primary hover:bg-primary-darker focus:ring-primary-lighter':
          variant === 'primary' && !disabled,
        ' text-primary-main ring-4 ring-primary-lighter hover:text-primary-darker hover:ring-primary-darker focus:ring-secondary-darker':
          variant === 'secondary' && !disabled,
        'bg-neutral-300 text-on-background cursor-not-allowed': disabled,
      },
      className,
    )}
    disabled={disabled}
    {...rest}
  >
    {text}
  </button>
);
