import clsx from "clsx";
import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SideNavigation from "./components/SideNavigation";
import useObserver from "./hooks/useObserver";

function App() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeSection = useObserver({ sectionRefs });

  const handleSeeMoreClick = () => {
    const nextSection = sectionRefs.current[1];
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Side Navigation */}
      <SideNavigation activeSection={activeSection} />

      {/* Sections */}
      <div
        id="hero"
        ref={(el) => (sectionRefs.current[0] = el)}
        className="snap-center w-full"
      >
        <Hero handleSeeMoreClick={handleSeeMoreClick} />
      </div>
      <Header />
      <div
        id="sectionOne"
        ref={(el) => (sectionRefs.current[1] = el)}
        className={clsx(
          "h-screen w-full flex justify-center items-center  bg-neat-900 snap-center",
          "text-white font-poiret uppercase text-xl md:text-3xl"
        )}
      >
        Welcome to Section 1
      </div>
      <div
        id="sectionTwo"
        ref={(el) => (sectionRefs.current[2] = el)}
        className={clsx(
          "h-screen w-full  bg-neat-900 snap-center  justify-center items-center  flex ",
          "text-xl md:text-3xl uppercase text-white font-poiret"
        )}
      >
        Welcome to Section 2
      </div>
    </div>
  );
}

export default App;
