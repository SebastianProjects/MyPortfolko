import React, { useState, useEffect, useRef } from "react";
import { Carousel, Badge } from 'flowbite-react';

const projects = [
  {
    title: {
      en: "Application for simulation of a joinery company processes",
      sk: "Aplikácia pre simulácia procesov stolárskej firmy"
    },
    description: {
      en: "This application simulates the order processing workflow in a joinery company. The simulation is implemented in Java using the ABAsim library. It produces all necessary statistics and includes an animation that visually represents each process.",
      sk: "Táto aplikácia simuluje spracovanie objednávok v stolárskej firme. Simulácia je implementovaná v jazyku Java s použitím knižnice ABAsim. Vytvára všetky potrebné štatistiky a obsahuje animáciu, ktorá vizuálne zobrazuje jednotlivé procesy."
    },
    image: "/images/projects/simulation.webp",
    badges: {
      sk: ["Java", "Threads", "Simulácia", "Agent"],
      en: ["Java", "Threads", "Simulation", "Agent"]
    }
  },
  {
    title: {
      en: "Application for optimization placement of unmanned monitoring systems",
      sk: "Aplikácia pre optimalizáciu umiestnenia bezpilotných monitorovacích systémov"
    },
    description: {
      en: "As part of my bachelor thesis, I developed an application in Python that uses OpenStreetMap (via TkinterMapView) to define areas and calculate optimal UAV placements. It also generates schedules using discrete simulation.",
      sk: "V rámci bakalárskej práce som vyvinul aplikáciu v Pythone, ktorá využíva OpenStreetMap (cez TkinterMapView) na definovanie oblastí a výpočet optimálneho umiestnenia UAV. Pomocou diskrétnej simulácie generuje rozvrhy."
    },
    image: "/images/projects/uav-picture.webp",
    badges: {
      sk: ["Python", "Tkinter", "TkinterMapView", "OpenStreetMap", "UAV"],
      en: ["Python", "Tkinter", "TkinterMapView", "OpenStreetMap", "UAV"]
    }
  },
  {
    title: {
      en: "Application for managing geographical areas with implementation of KD-tree",
      sk: "Aplikácia pre správu geografických oblastí s implementáciou KD-stromu"
    },
    description: {
      en: "The application enables efficient insertion, searching, and deletion of geographical areas with simple map GUI. A custom KD-tree structure with support for duplicate coordinates was implemented in Python to ensure optimal performance.",
      sk: "Aplikácia umožňuje efektívne vkladanie, vyhľadávanie a mazanie geografických oblastí s jednoduchým GUI s mapou. Aplikácia je implementovaná v jazyku Python a pre optimalizáciu operácií je implementovaný vlastný KD-strom s podporou duplicít."
    },
    image: "/images/projects/geoapp.webp",
    badges: {
      sk: ["Python", "KD-tree", "Tkinter", "TkinterMapView"],
      en: ["Python", "KD-tree", "Tkinter", "TkinterMapView"]
    }
  },
  {
    title: {
      en: "Application for registering vehicles using own implemented database",
      sk: "Aplikácia pre registráciu vozidiel a ich majiteľov s použitím vlastnej databázy"
    },
    description: {
      en: "This application, implemented in Python, enables the registration and management of vehicles and their owners using a custom-built database system and simple GUI.",
      sk: "Táto aplikácia, implementovaná v Pythone, umožňuje registráciu a správu vozidiel a ich majiteľov s využitím vlastného implementovaného databázového systému a jednoduchého GUI."
    },
    image: "/images/projects/hf.webp",
    badges: {
      sk: ["Python", "Heap file", "Extendible Hash file", "Tkinter"],
      en: ["Python", "Heap file", "Extendible Hash file", "Tkinter"]
    }
  },
  {
    title: {
      en: "Web Registration and Login System",
      sk: "Web registračný a logovací systém"
    },
    description: {
      en: "Backend-oriented project where I implemented my own registration and login system using JWT. The system sends the JWT in the form of cookies and verifies the user with refresh token to prevent misuse of the token over an extended period. The project is built with Node.js, React.js, and MongoDB.",
      sk: "Backendovo zameraný projekt, v ktorom implementujem vlastný systém prihlasovania a registrovania pomocou JWT. Systém posiela JWT vo forme cookies a overuje používateľa pomocou refresh tokenu, čo zabráni zneužitiu tokenu na dlhší čas. Projekt je postavený na Node.js, React.js a MongoDB."
    },
    image: null,
    badges: {
      sk: ["NodeJS", "MongoDB", "JWT", "Refresh token"],
      en: ["NodeJS", "MongoDB", "JWT", "Refresh token"]
    }
  },
  {
    title: {
      en: "SHARE web app",
      sk: "SHARE webová aplikácia"
    },
    description: {
      en: "Fullstack web application implemented using React, Express, and an Oracle SQL database that allows users to add, comment on, like, filter posts and show statistics.",
      sk: "Fullstack webová aplikácia vyvíjaná pomocou React, Express a Oracle SQL databázy, ktorá umožňuje používateľom pridávať, komentovať, lajkovať, filtrovať príspevky a zobrazovať štatistiky."
    },
    image: "/images/projects/share.webp",
    badges: {
      sk: ["NodeJS", "Oracle SQL", "React", "JWT", "Refresh token"],
      en: ["NodeJS", "Oracle SQL", "React", "JWT", "Refresh token"]
    }
  },
  {
    title: {
      en: "Weblience",
      sk: "Weblience"
    },
    description: {
      en: "Together with my friends, we developed a simple web in React.js that represents a company for creating interactive websites.",
      sk: "S mojimi kamarátmi sme vyvinuli jednoduchý web v React.js, ktorý reprezentuje firmu pre tvorbu interaktívnych stránok."
    },
    image: "images/projects/weblience.webp",
    badges: {
      sk: ["React", "Animácie"],
      en: ["React", "Animations"]
    }
  },
  {
    title: {
      en: "Application for generating and managing products",
      sk: "Aplikácia pre generovanie a spracovanie produktov"
    },
    description: {
      en: "An application I developed for WooCommerce products in Python using threads. The application can load products along with generating information about the products using AI. The user can generate information about the products, locally modify it, and gradually upload the products back to WooCommerce.",
      sk: "Aplikácia, ktorú som vyvinul pre WooCommerce produkty v prostredí Python s použitím vlákien. Aplikácia dokáže načítať produkty spolu s generovaním informácií o produktoch pomocou AI. Používateľ môže generovať informácie o produktoch, lokálne ich upravovať a postupne nahrávať produkty späť na WooCommerce."
    },
    image: "images/projects/AIGenProduct.webp",
    badges: {
      sk: ["Python", "WooCommerce", "AI", "Threads"],
      en: ["Python", "WooCommerce", "AI", "Threads"]
    }
  },
  {
    title: {
      en: "Spotify widget for Windows",
      sk: "Spotify widget pre Windows"
    },
    description: {
      en: "A Spotify widget built in Python using Tkinter interacts with the Spotify API to control playback from a compact interface. Users can skip to the next or previous track and navigate through the current track using keyboard shortcuts, even while working in other applications. Additionally, when a track is skipped, the widget displays the name of the current track in a small window.",
      sk: "Spotify widget postavený v Pythone pomocou Tkinter interaguje so Spotify API na ovládanie prehrávania z kompaktného rozhrania. Používatelia môžu preskočiť na ďalšiu alebo predchádzajúcu skladbu pomocou klávesových skratiek, aj keď pracujú v iných aplikáciách. Ak je skladba preskočená, widget zobrazuje názov aktuálnej skladby v malom okne."
    },
    image: null,
    badges: {
      sk: ["Python", "Spotify", "Threads"],
      en: ["Python", "Spotify", "Threads"]
    }
  },
  {
    title: {
      en: "Basic metronome for guitar playing",
      sk: "Jednoduchý metronóm pre hranie na gitare"
    },
    description: {
      en: "Simple metronome application implemented using the Tkinter library for intuiive GUI and threading in Python. This tool helps me maintain tempo and play with a consistent rhythm while practicing guitar.",
      sk: "Jednoduchá aplikácia metronómu implementovaná pomocou knižnice Tkinter pre intuitívne GUI a vlákien v Pythone. Implementoval som ju pretože hrávam na gitaru. Aplikácia mi pomáha udržiavať tempo a hrať s konzistentným rytmom pri cvičení na gitare."
    },
    image: "images/projects/metronome-picture.webp",
    badges: {
      sk: ["Python", "Gitara", "Threads"],
      en: ["Python", "Guitar", "Threads"]
    }
  }
];

const techStack = [
  {
    title: {
      en: "Python",
      sk: "Python"
    },
    image: "images/tech/python-logo.webp"
  },
  {
    title: {
      en: "Java",
      sk: "Java"
    },
    image: "images/tech/java-logo.webp"
  },
  {
    title: {
      en: "C++",
      sk: "C++"
    },
    image: "images/tech/c-logo.webp"
  },
  {
    title: {
      en: "Data structures and algorithms",
      sk: "Algoritmy a údajové štruktúry"
    },
    image: "images/tech/dsa-logo.svg"
  },
  {
    title: {
      en: "Design patterns",
      sk: "Návrhové vzory"
    },
    image: "images/tech/dp-logo.webp"
  },
  {
    title: {
      en: "UML and software design",
      sk: "UML a návrh softvéru"
    },
    image: "images/tech/uml-logo.webp"
  },
  {
    title: {
      en: "SQL",
      sk: "SQL"
    },
    image: "images/tech/sql-logo.webp"
  },
  {
    title: {
      en: "HTML",
      sk: "HTML"
    },
    image: "images/tech/html-logo.webp"
  },
  {
    title: {
      en: "CSS",
      sk: "CSS"
    },
    image: "images/tech/css-logo.webp"
  },
  {
    title: {
      en: "Tailwind CSS",
      sk: "Tailwind CSS"
    },
    image: "images/tech/tailwind-logo.webp"
  },
  {
    title: {
      en: "PHP",
      sk: "PHP"
    },
    image: "images/tech/php-logo.webp"
  },
  {
    title: {
      en: "Javascript",
      sk: "Javascript"
    },
    image: "images/tech/javascript-logo.webp"
  },
  {
    title: {
      en: "Typescript",
      sk: "Typescript"
    },
    image: "images/tech/typescript-logo.webp"
  },
  {
    title: {
      en: "ReactJS",
      sk: "ReactJS"
    },
    image: "images/tech/react-logo.svg"
  },
  {
    title: {
      en: "NodeJS",
      sk: "NodeJS"
    },
    image: "images/tech/node-logo.webp"
  },
  {
    title: {
      en: "Angular",
      sk: "Angular"
    },
    image: "images/tech/angular-logo.webp"
  },
  {
    title: {
      en: "Git",
      sk: "Git"
    },
    image: "images/tech/git-logo.webp"
  },
  {
    title: {
      en: "Linux",
      sk: "Linux"
    },
    image: "images/tech/linux-logo.webp"
  },
  {
    title: {
      en: "Routing and switching in network",
      sk: "Smerovanie a prepínanie v sieti"
    },
    image: "images/tech/network-logo.webp"
  },
  {
    title: {
      en: "Network security",
      sk: "Bezpečnosť v sieti"
    },
    image: "images/tech/network-security-logo.webp"
  },
  {
    title: {
      en: "Microsoft office",
      sk: "Microsoft office"
    },
    image: "images/tech/microsoft-logo.webp"
  },
];

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'sk'>('en');

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const autoScrolling = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleLang = () => setLang(lang === 'en' ? 'sk' : 'en');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!e.currentTarget.hash) return;
    autoScrolling.current = true;
    setIsNavbarVisible(false);

    timeoutRef.current = setTimeout(() => {
      autoScrolling.current = false;
    }, 1000);
  };

  useEffect(() => {
    const onScroll = () => {
      if (!autoScrolling.current) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-secondary text-text-primary font-medium scroll-smooth">
      <header className={`fixed top-0 md:top-8 right-0 left-0 md:right-4 md:left-auto z-50 flex items-center gap-6 bg-button py-3 px-4 md:rounded shadow-lg opacity-50 hover:opacity-100 transition-opacity duration-500 justify-between ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"} md:-translate-y-0 transition-transform duration-500`}>
        <nav className="flex gap-4 text-base font-semibold">
          <a
            href="#intro"
            className="font-bold hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Intro' : 'Úvod'}
          </a>
          <a
            href="#about"
            onClick={handleNavClick}
            className="font-bold hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'About' : 'O mne'}
          </a>
          <a
            href="#projects"
            onClick={handleNavClick}
            className="font-bold hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Projects' : 'Projekty'}
          </a>
          <a
            href="#tech"
            onClick={handleNavClick}
            className="font-bold hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Technologies' : 'Technológie'}
          </a>
        </nav>
        <button onClick={toggleLang} className="px-1 py-1 rounded flex items-center self-end">
          <img
            src={lang === 'en' ? "/images/flags/flag_sk.webp" : "/images/flags/flag_uk.webp"}
            alt={lang === 'en' ? 'Slovak Flag' : 'US Flag'}
            className="w-[20px] min-w-[20px] min-h-[20px] jhover:scale-105 transition-transform"
            loading="lazy"
          />
        </button>
      </header>


      <section id="intro" className="p-6 mt-8px min-h-screen text-center bg-gradient-to-b from-secondary to-primary flex items-center justify-center flex-col">
        <img
          src="/images/profile.webp"
          alt="My profile"
          className="mx-auto rounded-3xl w-48 h-48"
          loading="lazy"
        />
        <h2 className="text-3xl md:text-5xl mt-6 mb-2 font-semibold text-text-primary">{lang === 'en' ? 'Hi, I\'m Sebastián' : 'Ahoj, som Sebastián'}</h2>
        <p className="max-w-xl text-xl mx-auto mt-2 text-text-secondary">
          {lang === 'en'
            ? 'passionate web and desktop developer focused on building efficient and scalable solutions.'
            : 'developer webových a desktopových aplikácií zameraný na efektívne a škálovateľné riešenia.'}
        </p>
        <div className="absolute bottom-[-128px] left-0 w-full h-32 bg-gradient-to-b from-primary to-secondary pointer-events-none z-10" />
      </section>

      <section id="about" className="p-6 min-h-screen mx-auto flex items-center justify-center flex-col">
        <h3 className="text-3xl md:text-5xl font-bold mb-4 text-text-primary">{lang === 'en' ? 'About Me' : 'O mne'}</h3>
        <p className="max-w-4xl text-base leading-relaxed text-justify text-text-secondary">
          {lang === 'en'
            ? 'I am a graduate of a bachelor\'s degree in IT and I am currently continuing my studies at the master\'s level in the same field. I focus on developing web and desktop applications. I excel at problem-solving, have excellent time management skills, and I am always eager to learn new things. I enjoy exploring new technologies to continually improve myself.'
            : 'Som absolventom bakalárskeho štúdia v IT. Momentálne pokračujem v inžinierskom štúdiu v rovnakej oblasti. Venujem sa vývoju webových a desktopových aplikácií. Vynikám v riešení problémov, mám výborný time management a vždy sa snažím učiť nové veci, rád sa zoznamujem s novými technológiami, aby som sa mohol neustále zlepšovať.'}
        </p>
      </section>



      <section
        id="projects"
        className="p-6 min-h-screen flex flex-col bg-gradient-to-b from-primary to-secondary relative"
      >
        <div className="absolute top-[-128px] left-0 w-full h-32 bg-gradient-to-b from-secondary to-primary pointer-events-none z-10" />
        <h3 className="text-3xl mb-12 md:text-5xl font-bold text-center text-text-primary">
          {lang === 'en' ? 'My projects' : 'Moje projekty'}
        </h3>

        <div className="h-[78vh] w-[80vw] mx-auto">
          <Carousel slide={false} indicators={false} className="custom-carousel">
            {projects.map((project, i) => (
              <div
                key={i}
                className="flex flex-col h-full p-5 md:p-20 items-center justify-center bg-secondary text-text-primary"
                data-carousel-item>
                <div className="flex flex-col xl:flex-row gap-5">
                  <div className="flex flex-col">
                    <h4 className="text-xl md:text-2xl font-semibold text-center mb-5">{project.title[lang]}</h4>
                    {project.badges[lang] && (
                      <div className="flex flex-row flex-wrap gap-1 pb-5 justify-center">
                        {project.badges[lang]?.map((badge, i) => (
                          <Badge key={i} color="info" size="sm">{badge}</Badge>
                        ))}
                      </div>
                    )}
                    <p className="text-base leading-relaxed text-justify text-text-secondary">
                      {project.description[lang]}
                    </p>
                  </div>
                  {project.image && (
                    <img
                      src={project.image ?? undefined}
                      alt={project.title[lang]}
                      className="xl:max-h-[300px] md:max-h-[280px] rounded object-contain xl:object-contain shadow-md shadow-black "
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      <section id="tech" className="p-6 min-h-screen mx-auto flex items-center justify-center flex-col relative">
        <h3 className="text-3xl md:text-5xl font-bold mb-8 text-center">{lang === 'en' ? 'Technologies' : 'Technológie'}</h3>
        <ul className="flex flex-col gap-5 md:grid md:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <li className="flex flex-row items-center gap-2 bg-secondary px-4 py-3 rounded shadow-xl">
              <img
                src={tech.image ?? undefined}
                alt={tech.title[lang]}
                className="w-6 h-6 object-contain"
                loading="lazy"
              />
              <span className="text-center leading-relaxed font-bold text-text-secondary">{tech.title[lang]}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-gradient-to-b from-secondary to-primary w-full">
        <div className="flex justify-center gap-6 mb-2 p-5">
          <a
            href="https://www.facebook.com/profile.php?id=100008568406391"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:scale-110 transition-transform"
          >
            <img src="/images/tech/facebook-logo.webp" alt="GitHub" className="w-6 h-6" loading="lazy" />
          </a>
          <a
            href="https://github.com/SebastianProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:scale-110 transition-transform"
          >
            <img src="/images/tech/github-logo.webp" alt="GitHub" className="w-6 h-6" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-babni%C4%8D-b16aa9322"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/tech/linkedin-logo.webp" alt="LinkedIn" className="w-6 h-6" loading="lazy" />
          </a>
          <a
            href="mailto:sebastian.babnic@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/tech/mail-logo.webp" alt="Email" className="w-6 h-6" loading="lazy" />
          </a>
        </div>
        <p className="text-text-secondary">© {new Date().getFullYear()} Sebastián Babnič</p>
      </footer>
    </div >
  );
}
