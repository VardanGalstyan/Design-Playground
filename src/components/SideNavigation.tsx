import clsx from "clsx";
import { elementScrollIntoViewPolyfill } from "seamless-scroll-polyfill";

// The Polyfill ensures smooth scroll works on safari.
elementScrollIntoViewPolyfill();

const SideNavigation = ({
  sections,
  activeSection,
}: {
  activeSection: string | null;
  sections: React.MutableRefObject<(HTMLDivElement | null)[]>;
}) => {
  const handleClick = (id: string) => {
    sections.current
      .find((section) => section?.id === id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <nav className="absolute right-4 top-0 transition-all duration-300 ease-linear bottom-0 z-20 flex flex-col gap-4 mix-blend-difference items-center justify-center">
      {sections?.current.map((section) => {
        if (!section) return null;
        return (
          <div
            onClick={() => handleClick(section.id)}
            key={section.id}
            className={clsx(
              "size-3 md:size-4 rounded-full cursor-pointer",
              activeSection === section.id
                ? "bg-yellow-400"
                : "bg-neat-900 hover:bg-neat-700"
            )}
          ></div>
        );
      })}
    </nav>
  );
};

export default SideNavigation;
