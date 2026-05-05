export const PageTitle: React.FC<{children: React.ReactNode}> = ({
  children,
}) => (
  <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
    {children}
  </h1>
);
