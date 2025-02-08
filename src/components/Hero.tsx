import { useEffect, useRef, useState } from "react";

const Hero = ({ handleSeeMoreClick }: { handleSeeMoreClick: () => void }) => {
  const [position, setPosition] = useState({ x: -1, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-neat-900 contrast-80 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)]  bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
    >
      <h1 className="font-anton inline-flex items-center justify-center w-full h-full drop-shadow-[0.5px_0.5px_1px_red] mix-blend-difference z-20 text-neat-900/90 text-[12rem] uppercase">
        Fashion
      </h1>
      <div className="items-center cursor-pointer group mix-blend-difference flex-col top-[80%] left-0 w-full text-center absolute z-10 inline-flex justify-center">
        <span
          onClick={handleSeeMoreClick}
          className="text-neat-700/90 group-hover:text-yellow-400/80 font-poiret text-3xl transition-colors duration-700"
        >
          SEE MORE
        </span>
        <svg
          className="size-4 fill-yellow-400 group-hover:fill-yellow-400/80 transition-colors duration-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 266.77"
        >
          <path
            fillRule="nonzero"
            d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z"
          />
        </svg>
      </div>
      <div className="inline-flex h-full w-full items-center justify-center">
        <img
          className="absolute object-cover inset-0 w-full h-full mix-blend-difference"
          src="https://tailwindcss.com/_next/static/media/filters.debd0951.png"
          alt="cover-image"
        />
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="absolute size-32 -left-[100vw] -top-[100vh] w-[200vw] h-[200vh] backdrop-grayscale-100 transition-all duration-300 ease-linear [mask-image:radial-gradient(circle_100px,transparent_40%,#000_100%)]"
        ></div>
      </div>
    </section>
  );
};
export default Hero;
