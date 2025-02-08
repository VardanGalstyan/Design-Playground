import { useEffect, useState } from 'react';

type Props = { sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]> }

const sections = [
    { id: "hero", title: "Hero" },
    { id: "sectionOne", title: "Section 1" },
    { id: "sectionTwo", title: "Section 2" },
];

function useObserver({ sectionRefs }: Props) {
    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        if (!sectionRefs.current.length) return;

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
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
        []);

    return activeSection
}

export default useObserver