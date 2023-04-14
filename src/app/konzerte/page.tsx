import Image from 'next/image';

import {CONCERTS} from '@/data/conerts';

import {ContentContainer} from '../../components/contentContainer';
import {LinkButton} from '../../components/link-button';

export default function Orchester() {
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Konzerte
      </h1>

      <section
        id="konzerte"
        className="flex flex-col items-start justify-center gap-8 md:flex-row"
      >
        {CONCERTS.map((c) => (
          <div
            key={c.id}
            id={c.id}
            className="block rounded-lg shadow sm:w-full md:w-1/2 lg:w-1/3"
          >
            <Image
              src={c.image}
              alt="Konzert teaser bild"
              className="aspect-3/2 rounded-t-lg object-cover"
            />
            <div className="p-6">
              <hgroup>
                <h2 className="font-serif text-2xl">{c.name}</h2>
                <p className="text-sm">{c.subtitle ?? '‎'}</p>
              </hgroup>

              {c.program && (
                <>
                  <h3 className="py-4 text-center text-lg">Programm</h3>
                  <ul>
                    {c.program.map((p) => (
                      <li key={p.name} className="flex flex-col pb-2">
                        <span className="text-base">{p.name}</span>
                        <span className="text-sm">{p.composer}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {c.dates && (
                <>
                  <h3 className="py-4 text-center text-lg">Daten</h3>
                  <ul>
                    {c.dates.map((d) => (
                      <li key={d.dateISO} className="flex flex-col pb-2">
                        <span className="text-base">{d.location}</span>
                        <span className="text-sm">{d.dateString}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <LinkButton
                className="mt-4"
                type="secondary"
                href={`/konzerte/${c.id}`}
                text="Details ansehen"
              />
            </div>
          </div>
        ))}
      </section>
    </ContentContainer>
  );
}
