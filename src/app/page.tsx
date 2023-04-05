import CanturicumImage from "../images/2019_canturicum.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hello du da blub</h1>
      <Image src={CanturicumImage} alt="some text"/>
    </main>
  );
}
