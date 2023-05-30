export default async function Layout(props: {
  children: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <>
      {props.children}
      <section className="flex flex-row justify-center">
      {props.form}</section>
    </>
  );
}
