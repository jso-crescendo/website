import {ContentContainer} from '../../../components/contentContainer';
import {CONCERTS} from '../../../data/conerts';

export async function generateStaticParams(){
  return CONCERTS.map(c => c.id);
}

export default function KonzertPage({params}: {params: {id: string}}) {
  const concert = CONCERTS.filter((c) => c.id === params.id)[0];
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        {concert.name}
      </h1>
    </ContentContainer>
  );
}
