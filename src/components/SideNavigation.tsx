import clsx from "clsx";

const sections = [
  { id: "hero", title: "Hero" },
  { id: "sectionOne", title: "Section 1" },
  { id: "sectionTwo", title: "Section 2" },
];

const SideNavigation = ({ activeSection }: { activeSection: string }) => {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="absolute right-4 top-0 transition-all duration-300 ease-linear bottom-0 z-20 flex flex-col gap-4 mix-blend-difference items-center justify-center">
      {sections.map((section) => (
        <div
          onClick={() => handleClick(section.id)}
          key={section.id}
          className={clsx(
            "size-4 rounded-full cursor-pointer",
            activeSection === section.id
              ? "bg-yellow-400"
              : "bg-neat-900 hover:bg-neat-700"
          )}
        ></div>
      ))}
    </nav>
  );
};

export default SideNavigation;
