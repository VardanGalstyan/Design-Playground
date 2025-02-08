import clsx from "clsx";
import { useState } from "react";

const Header = () => {
  const [open, toOpen] = useState(false);

  const navigation = [
    { title: "About", delay: "1000" },
    { title: "Gallery", delay: "1000" },
    { title: "Design Week", delay: "1200" },
    { title: "Events", delay: "1400" },
  ];

  return (
    <div className="fixed top-5 md:top-10 h-10 px-4 md:px-10 left-0 right-0 flex-row-reverse mix-blend-difference flex justify-between items-center">
      <div
        onClick={() => toOpen(!open)}
        className="flex flex-col cursor-pointer items-end w-24 group gap-1 z-40"
      >
        <span className="h-1 w-12 group-hover:w-16 group-hover:to-yellow-300 rounded-full  bg-linear-to-r to-neat-400 mix-blend-difference from-5% animation-all duration-600"></span>
        <span className="h-1 w-12 group-hover:w-16 group-hover:to-yellow-300 rounded-full  bg-linear-to-r to-neat-400 mix-blend-difference from-35% animation-all duration-200"></span>
        <span className="h-1 w-12 group-hover:w-16 group-hover:to-yellow-300 rounded-full  bg-linear-to-r to-neat-400 mix-blend-difference from-20% animation-all duration-300"></span>
      </div>
      <nav className="uppercase ease-linear animation-all p-4 text-xl md:text-4xl absolute w-fit top-0 left-0 right-0 md:static">
        <ul className="flex flex-col md:flex-row gap-8 font-poiret w-full md:w-fit hover:backdrop-blur-md justify-center items-start">
          {navigation.map(({ title, delay }, index) => (
            <li
              style={{ transitionDuration: `${delay}ms` }}
              key={`${title}-${index}`}
              className={clsx(
                open
                  ? "cursor-pointer hover:text-sky-400 text-yellow-400 hover:"
                  : "backdrop-blur-none opacity-0 pointer-events-none"
              )}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
