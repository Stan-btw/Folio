import Landing from "../components/pages/landing";
import Intro from "@/components/pages/intro";
import Experiences from "@/components/pages/experiences";
import TechStack from "@/components/pages/techstack";
import Folio from "@/components/pages/folio";
import HorizontalScrollAnimated from "@/components/HorizontalScroll";

export default function Home() {
  return (
    <HorizontalScrollAnimated>
      <section className="snap-start w-screen h-screen inline-block">
        <Landing />
      </section>
      <section className="snap-start w-screen h-screen inline-block">
        <Intro />
      </section>
      <section className="snap-start w-screen h-screen inline-block">
        <Experiences />
      </section>
      <section className="snap-start w-screen h-screen inline-block">
        <TechStack />
      </section>
      <section className="snap-start w-screen h-screen inline-block">
        <Folio />
      </section>
    </HorizontalScrollAnimated>
  );
}
