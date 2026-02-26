import { LanguageProvider } from './context/LanguageContext';
import { ThemeLayoutProvider } from './context/ThemeLayoutContext';
import { useThemeLayout } from './hooks/useThemeLayout';
import { useLanguage } from './hooks/useLanguage';
import portfolioData from './data/portfolioData';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeLayoutSwitcher from './components/ThemeLayoutSwitcher';

const AppContent = () => {
  const { layout } = useThemeLayout();
  const { language } = useLanguage();
  const { experience, projects } = portfolioData;

  const sections = {
    about: <About key="about" />,
    experience: <Experience key="experience" />,
    projects: <Projects key="projects" />,
    skills: <Skills key="skills" />,
    contact: <Contact key="contact" />,
  };

  const sectionOrder = {
    'zen-guardian': ['about', 'experience', 'skills', 'contact', 'projects'],
    'terminal-mode': ['experience', 'skills', 'about', 'contact', 'projects'],
    'academic-hybrid': ['experience', 'about', 'skills', 'projects', 'contact'],
    'modular-cards': ['about', 'skills', 'experience', 'projects', 'contact'],
    'narrative-story': ['about', 'experience', 'skills', 'contact', 'projects'],
  }[layout] as Array<keyof typeof sections>;

  const sectionVisibility: Record<keyof typeof sections, boolean> = {
    about: true,
    experience: Boolean(experience?.enabled),
    projects: Boolean(projects?.enabled),
    skills: true,
    contact: true,
  };

  const activeSectionOrder = sectionOrder.filter((sectionKey) => sectionVisibility[sectionKey]);

  const chapterTitles = {
    id: {
      about: 'Siapa Diri Ini',
      experience: 'Perjalanan Pengabdian',
      skills: 'Keahlian & Karya',
      contact: 'Mari Berkolaborasi',
      projects: 'Proyek Pilihan',
    },
    en: {
      about: 'Who I Am',
      experience: 'My Journey',
      skills: 'My Craft',
      contact: "Let's Collaborate",
      projects: 'Featured Projects',
    },
  };

  const chapters = language === 'id' ? chapterTitles.id : chapterTitles.en;

  return (
    <div className={`app layout-${layout}`}>
      <Header />
      <main>
        <Hero />
        {activeSectionOrder.map((sectionKey, index) => {
          const section = sections[sectionKey];

          if (layout === 'narrative-story') {
            const chapterPrefix = language === 'id' ? 'Bab' : 'Chapter';
            return (
              <div key={`narrative-${sectionKey}`} className="layout-section narrative-block">
                <div className="chapter-label">
                  <span>{`${chapterPrefix} ${index + 1} — ${chapters[sectionKey]}`}</span>
                </div>
                {section}
              </div>
            );
          }

          if (layout === 'modular-cards') {
            return (
              <div key={`modular-${sectionKey}`} className="layout-section modular-block">
                {section}
              </div>
            );
          }

          return <div key={`layout-${sectionKey}`}>{section}</div>;
        })}
      </main>
      <Footer />
      <ThemeLayoutSwitcher />
    </div>
  );
};

function App() {
  return (
    <ThemeLayoutProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeLayoutProvider>
  );
}

export default App;
