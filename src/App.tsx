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
        className="h-screen w-full text-white font-poiret uppercase flex justify-center items-center text-3xl bg-neat-900 snap-center border-b"
      >
        Welcome to Section 1
      </div>
      <div
        id="sectionTwo"
        ref={(el) => (sectionRefs.current[2] = el)}
        className="h-screen w-full uppercase bg-neat-900 snap-center text-white justify-center items-center font-poiret flex text-3xl"
      >
        Welcome to Section 2
      </div>
    </div>
  );
}

export default App;
