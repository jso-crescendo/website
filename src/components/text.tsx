import classNames from 'classnames';

export const Text: React.FC<
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
> = ({className, ...rest}) => (
  <p className={classNames('text-pretty text-justify text-base', className)} {...rest} />
);
