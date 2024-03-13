import {CONCERTS} from '@/data/concerts';
import {ContentContainer} from '../../components/contentContainer';
import Image from 'next/image';
import {LinkButton} from '../../components/link-button';

export const metadata = {
  title: 'Konzerte',
  description:
    'Erleben Sie magische Konzertmomente! Erfahren Sie alles über die kommenden Auftritte vom JSO Crescendo',
};

export default function Orchester() {
  return (
    <ContentContainer>
      <h1 className="mb-8 text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Konzerte
      </h1>

      <section
        id="konzerte"
        className="grid grid-cols-1 items-start justify-center gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {CONCERTS.map((c) => (
          <div key={c.id} id={c.id} className="block rounded-lg shadow">
            <Image
              src={c.image_sm}
              alt="Konzert teaser bild"
              className="aspect-3/2 rounded-t-lg object-cover"
              placeholder="blur"
              priority
            />
            <div className="p-6">
              <hgroup>
                <h2 className="font-serif text-2xl">{c.name}</h2>
                <p className="text-sm">{c.subtitle ?? '‎'}</p>
              </hgroup>
              {c.dates && (
                <>
                  <h3 className="py-4 text-center text-lg">
                    {c.dates.length > 1 ? 'Daten' : 'Datum'}
                  </h3>
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
              {c.program && (
                <>
                  <h3 className="py-4 text-center text-lg">Programm</h3>
                  <ul>
                    {c.program.map((p) => (
                      <li key={p.name} className="flex flex-col pb-2">
                        <p className="text-base flex flex-col">
                          {p.name}
                          {p.subtitle && (
                            <span className="text-sm font-light">
                              {p.subtitle}
                            </span>
                          )}
                        </p>

                        <p className="text-sm font-medium">{p.composer}</p>
                        {p.solist && (
                          <p className="text-sm italic">Solist: {p.solist}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {c.description && (
                <LinkButton
                  className="mt-4"
                  type="secondary"
                  href={`/konzerte/${c.id}`}
                  text="Details ansehen"
                />
              )}
            </div>
          </div>
        ))}
      </section>
    </ContentContainer>
  );
}
