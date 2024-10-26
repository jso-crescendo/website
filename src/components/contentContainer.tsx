import {PageTitle} from './page-title';

export const ContentContainer: React.FC<
  {
    children: React.ReactNode;
    title?: string;
  } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({children, title, ...rest}) => (
  <div className="container mx-auto p-4" {...rest}>
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
