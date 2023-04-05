import CanturicumImage from "../images/2019_canturicum.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Image src={CanturicumImage} alt="some text" />
    </main>
  );
}
