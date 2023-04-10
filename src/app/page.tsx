import Image from "next/image";

import CanturicumImage from "../images/2019_canturicum.jpg";

export default function Home() {
  return (
      <Image src={CanturicumImage} alt="some text" />
   
  );
}
