import {ContentContainer} from '@/components/contentContainer';
import {Suspense} from 'react';

// TODO: nice suspense loading spinner
export default async function Layout(props: {
  children: React.ReactNode;
  form: React.ReactNode;
}) {
  return (
    <ContentContainer title="Wollen auch Sie uns unterstützen?">
      {props.children}
      <section className="mt-8 flex flex-row justify-center">
        <Suspense fallback={<div />}>{props.form}</Suspense>
      </section>
    </ContentContainer>
  );
}
