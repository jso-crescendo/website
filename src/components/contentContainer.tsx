export const ContentContainer: React.FC<
  {children: React.ReactNode} & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({children, ...rest}) => (
  <div className="container mx-auto p-4" {...rest}>
    {children}
  </div>
);
