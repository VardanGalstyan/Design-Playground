import { useState } from "react";
import Hero from "./components/Hero";
import clsx from "clsx";

function App() {
  const [open, toOpen] = useState(false);

  return (
    <>
      <Hero />
      <div
        onClick={() => toOpen(!open)}
        className="flex flex-col cursor-pointer items-end w-24 group gap-1 absolute top-10 right-10"
      >
        <span className="h-1.5 w-12 group-hover:w-16 rounded-full  bg-linear-to-r to-violet-200 mix-blend-difference from-5% animation-all duration-600"></span>
        <span className="h-1.5 w-12 group-hover:w-16 rounded-full  bg-linear-to-r to-violet-200 mix-blend-difference from-35% animation-all duration-200"></span>
        <span className="h-1.5 w-12 group-hover:w-16 rounded-full  bg-linear-to-r to-violet-200 mix-blend-difference from-20% animation-all duration-300"></span>
      </div>
      <div
        className={clsx(
          open
            ? "right-[15%] text-violet-200 backdrop-blur-[2px]"
            : "right-[15%] text-transparent backdrop-blur-none",
          "absolute left-2 top-5 uppercase hover:text-blue-300 ease-in-out animation-all duration-300 pl-6 p-4 text-4xl mix-blend-difference"
        )}
      >
        <nav>
          <ul className="flex gap-8 font-poiret w-fit hover:backdrop-blur-md">
            <li className="cursor-pointer hover:text-sky-400 animation-all duration-300">
              About
            </li>
            <li className="cursor-pointer hover:text-sky-400 animation-all duration-300">
              Gallery
            </li>
            <li className="cursor-pointer hover:text-sky-400 animation-all duration-300">
              Design Week
            </li>
            <li className="cursor-pointer hover:text-sky-400 animation-all duration-300">
              Events
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-screen">
        <div className="relative h-full w-full bg-neat-900">
          <div className="absolute h-full w-full inset-0 [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)] bg-[size:10px_10px]"></div>
        </div>
      </div>
    </>
  );
}

export default App;
