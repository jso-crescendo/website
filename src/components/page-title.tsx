export const PageTitle: React.FC<{title: string}> = ({title}) => (
  <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
    {title}
  </h1>
);
