import Image from 'next/image'

import {ContentContainer} from '../../../components/contentContainer';
import {CONCERTS} from '../../../data/conerts';

export async function generateStaticParams() {
  return CONCERTS.map((c) => ({id: c.id}));
}

export default function KonzertPage({params}: {params: {id: string}}) {
  const {id} = params;
  const concert = CONCERTS.filter((c) => c.id === id)[0];
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        {concert.name}
      </h1>
      <Image src={concert.image} alt="" aria-hidden="true" className='mx-auto'/>
    </ContentContainer>
  );
}
