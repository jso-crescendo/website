import {ImageSection} from '../../components/image-section';

import NoelieImage from '@/images/people/noelie.webp';

export const NoelieSection: React.FC = () => (
  <ImageSection
    image={{
      src: NoelieImage,
      alt: 'Portrait Foto von Noëlie Nyffeler',
      vertical: true,
    }}
    title="Noëlie Nyffeler"
    subtitle="Konzertmeisterin"
  >
    Noëlie Nyffeler begann im Alter von vier Jahren bei Agathe Jerie Geige zu
    spielen. Während ihrer Gymnasialzeit wurde sie von Julia Schwob
    unterrichtet. Seit 2020 ist sie im JSO Crescendo Konzertmeisterin, wobei sie
    bereits seit dem Jahr 2014 Mitglied des Orchesters ist. Des Weiteren spielt
    sie immer wieder in Luzern bei Projekten des Zentralschweizer
    Jugendsinfonieorchester ZJSO mit. Neben ihrer Tätigkeit im Orchester als
    Violinistin singt sie im Vokalensemble CantAmabile im Sopran. Noëlie
    Nyffeler studiert Germanistik und Romanistik an der Universität Zürich.
    Neben ihrem Studium ist sie als Lehrerin für Gymivorbereitungskurse und
    Nachhilfe tätig und wirkt beim Dictionnaire d’Ancien Gascon (DAGél) an der
    Universität mit.
  </ImageSection>
);
