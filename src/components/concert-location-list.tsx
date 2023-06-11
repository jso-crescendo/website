import {ConcertLocation} from '../data/concerts';

interface ConcertLocationListProps {
  locations: ConcertLocation[];
}

export const ConcertLocationList: React.FC<ConcertLocationListProps> = ({
  locations,
}) => {
  return (
    <ol className="list-disc pl-4">
      {locations.map((d) => (
        <li key={d.dateISO}>
          {d.googleMapsLink ? (
            <a
              href={d.googleMapsLink}
              className="hover:text-primary-main"
              title="Karte öffnen"
            >
              <span className="font-serif text-lg">{d.location}</span>
              <span className="text-sm"> - {d.dateString}</span>
            </a>
          ) : (
            <span>
              <span className="font-serif text-lg">{d.location}</span>
              <span className="text-sm"> - {d.dateString}</span>
            </span>
          )}
        </li>
      ))}
    </ol>
  );
};
