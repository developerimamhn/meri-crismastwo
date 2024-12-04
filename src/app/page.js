import Image from "next/image";
import Header from './component/header/Header';
import Body from "./component/body/Body";
import Footer from "./component/footer/Footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}
