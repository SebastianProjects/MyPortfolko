import React, { useState } from "react";

const projects = [
  {
    title: {
      en: "Application for simulation of a joinery company",
      sk: "Simulácia pre stolársku firmu"
    },
    description: {
      en: "This application simulates the order processing workflow in a joinery company, where various technological steps are performed by different types of workers. The simulation is implemented in Java using the ABAsim library. It produces all necessary statistics and includes an animation that visually represents each process.",
      sk: "Táto aplikácia simuluje spracovanie objednávok v stolárskej firme, kde jednotlivé technologické kroky vykonávajú rôzne typy pracovníkov. Simulácia je implementovaná v jazyku Java s použitím knižnice ABAsim. Vytvára všetky potrebné štatistiky a obsahuje animáciu, ktorá vizuálne zobrazuje jednotlivé procesy."
    },
    image: "/images/simulation.png"
  },
  {
    title: {
      en: "Application for optimalization placement of unmanned monitoring systems",
      sk: "Aplikácia na optimalizáciu umiestnenia bezpilotných monitorovacích systémov"
    },
    description: {
      en: "As part of my bachelor thesis project, I developed an application that allows users to define an area on a map using OpenStreetMap, enabling exploration of different regions. Users can perform calculations for the placement of UAV devices and create schedules based on these placement calculations. The application is programmed in Python, utilizing the Tkinter library for the graphical interface, along with the TkinterMapView library and the Geocoder library. Within the implementation I employed programming techniques such as inheritance, polymorphism, threading and I used discrete simulation for generating schedules.",
      sk: "V rámci mojej bakalárskej práce som vyvinul aplikáciu, ktorá umožňuje používateľom definovať oblasť na mape pomocou OpenStreetMap. Používatelia môžu vykonávať výpočty pre umiestnenie UAV zariadení a vytvárať časové rozvrhy na základe týchto výpočtov. Aplikácia je implementovaná v Pythone, s použitím knižnice Tkinter pre grafické rozhranie spolu s knižnicou TkinterMapView a knižnicou Geocoder. Pri implementácií som používal programovacie techniky ako dedičnosť, polymorfizmus a multithreading a využíval diskrétnu simuláciu na generovanie rozvrhov."
    },
    image: "/images/uav-picture.png"
  },
  {
    title: {
      en: "Application for managing geographical areas with implementation of KD-tree",
      sk: "Aplikácia pre správu geografických oblastí s implementáciou KD-stromu"
    },
    description: {
      en: "The application enables efficient insertion, searching, and deletion of geographical areas. A custom KD-tree structure with support for duplicate coordinates was implemented in Python to ensure optimal performance. The application also includes map-based visualization of searched areas.",
      sk: "Aplikácia umožňuje efektívne vkladanie, vyhľadávanie a mazanie geografických oblastí. Aplikácia je implementovaná v jazyku Python a pre optimalizáciu operácií je implementovaný vlastný KD-strom s podporou duplicít. Súčasťou aplikácie je aj zobrazovanie vyhľadávaných oblastí prostredníctvom mapy."
    },
    image: "/images/geoapp.png"
  },
  {
    title: {
      en: "Application for registering vehicles and their owners using own implemented database",
      sk: "Aplikácia pre registráciu vozidiel a ich majiteľov s použitím vlastnej databázy"
    },
    description: {
      en: "This application, implemented in Python, enables the registration and management of vehicles and their owners using a custom-built database system. It implements a heap file and an extendible hash file structure for efficient data storage and retrieval. A graphical user interface (GUI) is also included, allowing users to perform operations such as inserting, updating, deleting, and searching records in an intuitive and user-friendly manner.",
      sk: "Táto aplikácia, implementovaná v Pythone, umožňuje registráciu a správu vozidiel a ich majiteľov s využitím vlastného implementovaného databázového systému. Využíva dátové štruktúry heap file a extendible hash file na efektívne ukladanie a vyhľadávanie údajov. Súčasťou je aj grafické používateľské rozhranie (GUI), ktoré umožňuje používateľom vykonávať operácie ako vkladanie, úpravu, mazanie či vyhľadávanie záznamov pohodlným a intuitívnym spôsobom."
    },
    image: "/images/hf.png"
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
    image: null
  },
  {
    title: {
      en: "SHARE web app",
      sk: "SHARE webová aplikácia"
    },
    description: {
      en: "Fullstack web application implemented using React, Express, and an Oracle SQL database that allows users to add, comment on, like, filter posts and show statistics. The application features a registration and login system with JWT-based authentication. Sequelize is used for database interaction, and bcrypt is implemented for secure password hashing.",
      sk: "Fullstack webová aplikácia vyvíjaná pomocou React, Express a Oracle SQL databázy, ktorá umožňuje používateľom pridávať, komentovať, lajkovať, filtrovať príspevky a zobrazovať štatistiky. Aplikácia obsahuje systém registrácie a prihlasovania s autentifikáciou založenou na JWT. Na interakciu s databázou som použil Sequelize a bcrypt, ktorý zabezpečuje hashovanie hesiel."
    },
    image: "/images/share.png"
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
    image: "images/weblience.png"
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
    image: "images/AIGenProduct.png"
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
    image: null
  },
  {
    title: {
      en: "Basic metronome for guitar playing",
      sk: "Jednoduchý metronóm pre hranie na gitare"
    },
    description: {
      en: "Simple metronome application implemented using the Tkinter library in Python. This tool helps me maintain tempo and play with a consistent rhythm while practicing guitar. The application features an intuitive interface that allows interaction via keyboard keys for easy control. Additionally, I used threading techniques to ensure smooth and precise timing.",
      sk: "Jednoduchá aplikácia metronómu implementovaná pomocou knižnice Tkinter v Pythone. Implementoval som ju pretože hrávam na gitaru. Aplikácia mi pomáha udržiavať tempo a hrať s konzistentným rytmom pri cvičení na gitare. Aplikácia obsahuje intuitívne rozhranie, ktoré umožňuje interakciu pomocoou klávesových skratiek pre jednoduché ovládanie. Okrem toho som použil techniky vláken, aby som zabezpečil plynulé a presné načasovanie."
    },
    image: "images/metronome-picture.png"
  }
];

const techStack = [
  {
    title: {
      en: "Python",
      sk: "Python"
    },
    image: "images/python-logo.png"
  },
  {
    title: {
      en: "Java",
      sk: "Java"
    },
    image: "images/java-logo.png"
  },
  {
    title: {
      en: "C++",
      sk: "C++"
    },
    image: "images/c-logo.png"
  },
  {
    title: {
      en: "Data structures and algorithms",
      sk: "Algoritmy a údajové štruktúry"
    },
    image: "images/dsa-logo.svg"
  },
  {
    title: {
      en: "Design patterns",
      sk: "Návrhové vzory"
    },
    image: "images/dp-logo.png"
  },
  {
    title: {
      en: "UML and software design",
      sk: "UML a návrh softvéru"
    },
    image: "images/uml-logo.png"
  },
  {
    title: {
      en: "SQL",
      sk: "SQL"
    },
    image: "images/sql-logo.png"
  },
  {
    title: {
      en: "HTML",
      sk: "HTML"
    },
    image: "images/html-logo.png"
  },
  {
    title: {
      en: "CSS",
      sk: "CSS"
    },
    image: "images/css-logo.png"
  },
  {
    title: {
      en: "Tailwind CSS",
      sk: "Tailwind CSS"
    },
    image: "images/tailwind-logo.png"
  },
  {
    title: {
      en: "PHP",
      sk: "PHP"
    },
    image: "images/php-logo.png"
  },
  {
    title: {
      en: "Javascript",
      sk: "Javascript"
    },
    image: "images/javascript-logo.png"
  },
  {
    title: {
      en: "Typescript",
      sk: "Typescript"
    },
    image: "images/typescript-logo.webp"
  },
  {
    title: {
      en: "ReactJS",
      sk: "ReactJS"
    },
    image: "images/react-logo.svg"
  },
  {
    title: {
      en: "NodeJS",
      sk: "NodeJS"
    },
    image: "images/node-logo.png"
  },
  {
    title: {
      en: "Angular",
      sk: "Angular"
    },
    image: "images/angular-logo.png"
  },
  {
    title: {
      en: "Git",
      sk: "Git"
    },
    image: "images/git-logo.png"
  },
  {
    title: {
      en: "Linux",
      sk: "Linux"
    },
    image: "images/linux-logo.png"
  },
  {
    title: {
      en: "Routing and switching in network",
      sk: "Smerovanie a prepínanie v sieti"
    },
    image: "images/network-logo.png"
  },
  {
    title: {
      en: "Network security",
      sk: "Bezpečnosť v sieti"
    },
    image: "images/network-security-logo.png"
  },
  {
    title: {
      en: "Microsoft office",
      sk: "Microsoft office"
    },
    image: "images/microsoft-logo.png"
  },
];

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'sk'>('en');
  const [projectIndex, setProjectIndex] = useState(0);

  const toggleLang = () => setLang(lang === 'en' ? 'sk' : 'en');

  return (
    <div className="min-h-screen bg-gradient-to-b bg-gray-300 text-gray-900 font-sans scroll-smooth">
      <header className="fixed top-0 md:top-8 right-0 left-0 md:right-4 md:left-auto z-50 flex items-center gap-6 bg-blue-500 text-white py-3 px-4 md:rounded shadow-lg opacity-50 hover:opacity-100 transition-opacity duration-300 justify-between">
        <nav className="flex gap-4 text-base font-semibold">
          <a
            href="#intro"
            className="hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Intro' : 'Úvod'}
          </a>
          <a
            href="#about"
            className="hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'About' : 'O mne'}
          </a>
          <a
            href="#projects"
            className="hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Projects' : 'Projekty'}
          </a>
          <a
            href="#tech"
            className="hover:scale-105 transition-transform"
          >
            {lang === 'en' ? 'Technologies' : 'Technológie'}
          </a>
        </nav>
        <button onClick={toggleLang} className="px-1 py-1 rounded flex items-center self-end">
          <img
            src={lang === 'en' ? "/images/flag_sk.png" : "/images/flag_uk.png"}
            alt={lang === 'en' ? 'Slovak Flag' : 'US Flag'}
            className="w-[20px] min-w-[20px] min-h-[20px] jhover:scale-105 transition-transform"
          />
        </button>
      </header>


      <section id="intro" className="p-6 mt-8px min-h-screen text-center bg-gradient-to-b from-blue-200 to-blue-300 flex items-center justify-center flex-col">
        <img src="/images/profile.png" alt="My profile" className="mx-auto rounded-3xl w-48 h-48" />
        <h2 className="text-5xl mt-6 mb-2 font-semibold">{lang === 'en' ? 'Hi, I\'m Sebastián' : 'Ahoj, som Sebastián'}</h2>
        <p className="max-w-xl text-xl mx-auto mt-2">
          {lang === 'en'
            ? 'passionate web developer focused on building efficient and scalable solutions.'
            : 'developer webových a desktopových aplikácií zameraný na efektívne a škálovateľné riešenia.'}
        </p>
        <div className="absolute bottom-[-128px] left-0 w-full h-32 bg-gradient-to-b from-blue-300 to-gray-300 pointer-events-none z-10" />
      </section>

      <section id="about" className="p-6 min-h-screen mx-auto flex items-center justify-center flex-col">
        <h3 className="text-5xl font-bold mb-4">{lang === 'en' ? 'About Me' : 'O mne'}</h3>
        <p className="max-w-4xl text-xl text-base leading-relaxed text-justify">
          {lang === 'en'
            ? 'I am a graduate of a bachelor\'s degree in IT and I am currently continuing my studies at the master\'s level in the same field. I focus on developing web and desktop applications. I excel at problem-solving, have excellent time management skills, and I am always eager to learn new things. I enjoy exploring new technologies to continually improve myself.'
            : 'Som absolventom bakalárskeho štúdia v IT. Momentálne pokračujem v inžinierskom štúdiu v rovnakej oblasti. Venujem sa vývoju webových a desktopových aplikácií. Vynikám v riešení problémov, mám výborný time management a vždy sa snažím učiť nové veci, rád sa zoznamujem s novými technológiami, aby som sa mohol neustále zlepšovať.'}
        </p>
      </section>

      <section
        id="projects"
        className="p-6 min-h-screen flex flex-col bg-gradient-to-b from-blue-300 to-gray-300 relative"
      >
        <div className="absolute top-[-128px] left-0 w-full h-32 bg-gradient-to-b from-gray-300 to-blue-300 pointer-events-none z-10" />
        <h3 className="text-5xl font-bold mb-8 text-center">{lang === 'en' ? 'My projects' : 'Moje projekty'}</h3>
        <div className="bg-gray-300 rounded-xl shadow p-8 w-full flex-1 flex flex-col shadow">
          <div className="flex-grow">
            {projects[projectIndex].image ? (
              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[24px]">
                <div className="flex flex-col">
                  <h4 className="text-2xl font-semibold text-center mb-4">{projects[projectIndex].title[lang]}</h4>
                  <p className="w-full text-base leading-relaxed text-justify">{projects[projectIndex].description[lang]}</p>
                </div>
                <img
                  src={projects[projectIndex].image ?? undefined}
                  alt={projects[projectIndex].title[lang]}
                  className="rounded w-full max-h-[430px] object-contain mx-auto shadow-xl shadow-black"
                />
              </div>
            ) : (
              <>
                <h4 className="text-2xl font-semibold text-center mb-4">{projects[projectIndex].title[lang]}</h4>
                <p className="mt-1 text-base leading-relaxed text-justify">{projects[projectIndex].description[lang]}</p>
              </>
            )}
          </div>
          <div className="flex justify-between mt-4 items-center">
            <button
              onClick={() => setProjectIndex((projectIndex - 1 + projects.length) % projects.length)}
              className="text-blue-600 hover:scale-105 transition-transform"
            >
              {lang === 'en' ? 'Previous' : 'Predošlý'}
            </button>

            <span className="text-lg font-medium text-gray-700">
              {lang === 'en' ? `${projectIndex + 1} / ${projects.length}` : `${projectIndex + 1} / ${projects.length}`}
            </span>

            <button
              onClick={() => setProjectIndex((projectIndex + 1) % projects.length)}
              className="text-blue-600 hover:scale-105 transition-transform"
            >
              {lang === 'en' ? 'Next' : 'Ďalší'}
            </button>
          </div>
        </div>
      </section>


      <section id="tech" className="p-6 min-h-screen mx-auto flex items-center justify-center flex-col relative">
        <h3 className="text-5xl font-bold mb-8 text-center">{lang === 'en' ? 'Technologies' : 'Technológie'}</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <li className="flex flex-col md:flex-row items-center gap-2 bg-blue-300 text-black-900 px-3 py-2 rounded shadow-xl">
              <img
                src={tech.image ?? undefined}
                alt={tech.title[lang]}
                className="w-6 h-6 object-contain"
              />
              <span className="text-center leading-relaxed">{tech.title[lang]}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-center py-6 text-sm text-gray-600 bg-gradient-to-b from-gray-300 to-blue-300 w-full">
        <div className="flex justify-center gap-6 mb-2 p-5">
          <a
            href="https://www.facebook.com/profile.php?id=100008568406391"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/facebook-logo.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/SebastianProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/github-logo.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebasti%C3%A1n-babni%C4%8D-b16aa9322"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/linkedin-logo.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="mailto:sebastian.babnic@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img src="/images/mail-logo.png" alt="Email" className="w-6 h-6" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Sebastián Babnič</p>
      </footer>
    </div>
  );
}
