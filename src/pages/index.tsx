import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/header";
import Middle from "@/components/middle";

export default function Home() {
  useEffect(() => {
    // const scroll = new LocomotiveScroll();
    AOS.init();
  }, []);
  return (
    <main>
      <Header />
      <Middle />
    </main>
  );
}
