import Image from 'next/image';

import {ImageSection} from '@/components/image-section';
import {Text} from '@/components/text';
import {CONCERTS} from '@/data/conerts';
import OrchesterWideImage from '@/images/2019_jubliaeumskonzert_tonhalle_wide.jpg';
import KonzertreiseImage from '@/images/2019_konzertreise_bulgarien.jpg';
import ChorImage from '@/images/2021_herbstkonzert_chor.jpg';
import SponsorenImage from '@/images/2022_fruehling_bass.jpg';
import GoennerImage from '@/images/2022_fruehling_blech.jpg';
import MitgliedWerdenImage from '@/images/backgrounds/scores_1.jpg';
import KaethiImage from '@/images/people/kaethi.jpg';
import NoeliImage from '@/images/people/noelie.jpg';

import {LinkButton} from '../../components/link-button';
import {Burger} from '../../icons/burger';

export default function Orchester() {
  return (
    <>
      <h1 className="text-center font-serif text-3xl leading-normal md:text-4xl lg:text-5xl">
        Konzerte
      </h1>

      <section
        id="konzerte"
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {CONCERTS.map((c) => (
          <div key={c.id} id={c.id} className="block rounded-lg shadow">
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
                      <li className="flex flex-col pb-2">
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
                      <li className="flex flex-col pb-2">
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
    </>
  );
}
