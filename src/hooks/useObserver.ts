import { useEffect, useState } from "react";

interface Props {
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

function useObserver({ sectionRefs }: Props) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(
    () => {
      if (!sectionRefs.current.length) return;

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const sections = sectionRefs.current;

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        if (observer) {
          sections.forEach((section) => {
            if (section) observer.unobserve(section);
          });
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return activeSection;
}

export default useObserver;
