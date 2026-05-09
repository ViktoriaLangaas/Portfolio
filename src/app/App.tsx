import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguageProvider } from "./components/LanguageContext";
import { LanguageToggle } from "./components/LanguageToggle";
import ProjectDetail from "./components/ProjectDetail";
import ConnectFourAI from "./components/ConnectFour";
import ScrollToTop  from "./components/ui/scroll-to-top";

export default function App() {
  const homePage = (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );

  return (
    <LanguageProvider>
      <ThemeProvider>
        <LanguageToggle />
        <ThemeToggle />
        <div className="bg-slate-50 dark:bg-gray-950">
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={homePage} />
              <Route path="/connect-four" element={<ConnectFourAI />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}