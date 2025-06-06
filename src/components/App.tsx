import React, { useRef, useState, useEffect } from 'react';
import './App.scss';
import Header from '@/components/header/header';
import Greeting from "@/components/greeting/greeting";
import About from "@/components/about/about";
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';

const sections = [
  { id: 'greeting', title: 'ГЛАВНАЯ' },
  { id: 'about', title: 'ОБО МНЕ' },
  { id: 'skills', title: 'НАВЫКИ' },
  { id: 'projects', title: 'ПРОЕКТЫ' },
];

const App: React.FC = () => {
  const greetingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null); 
  const projectsRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    greeting: greetingRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
  };

  const scrollToSection = (id: string) => {
    sectionRefs[id]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80;

      let current = sections[0].id;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i].id;
        const ref = sectionRefs[id];
        if (ref.current && ref.current.offsetTop <= scrollPosition) {
          current = id;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sectionRefs]);

  return (
    <div className='wrapper'>
      <Header
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <div ref={greetingRef}><Greeting /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><Projects /></div>
    </div>
  );
};

export default App;