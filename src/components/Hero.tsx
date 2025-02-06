import { useEffect, useRef, useState } from "react";

const Hero = () => {
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
      className="h-screen overflow-hidden bg-neat-900 contrast-80 bg-[image:radial-gradient(var(--pattern-fg)_1px,_transparent_0)]  bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10"
    >
      <h1 className="font-anton inline-flex items-center justify-center w-full h-full drop-shadow-[0.5px_0.5px_1px_red] mix-blend-difference z-20 text-neat-900/90 text-[12rem] uppercase">
        Fashion
      </h1>
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
