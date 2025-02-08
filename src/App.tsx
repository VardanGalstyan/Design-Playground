import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const sections = [
  { id: "hero", title: "Hero" },
  { id: "sectionOne", title: "Section 1" },
  { id: "sectionTwo", title: "Section 2" },
];

function App() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Scroll to the next section on button click
  const handleSeeMoreClick = () => {
    const nextSection = sectionRefs.current[1]; // The next section after Hero
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  useEffect(() => {
    if (!sectionRefs.current.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        sectionRefs.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      {/* Side Navigation */}
      <nav className="absolute right-4 top-0 bottom-0 z-20 flex flex-col gap-4 mix-blend-difference items-center justify-center">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`size-4 rounded-full ${
              activeSection === section.id
                ? "bg-yellow-400 text-black"
                : "bg-neat-900"
            }`}
          ></a>
        ))}
      </nav>

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
