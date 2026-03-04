import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function Hero() {
  const { language } = useLanguage();

  const translations = {
    en: {
      role: "Web Developer",
      description: "Passionate about building beautiful, functional, and user-centric digital experiences. Recent graduate with 3 years of hands-on experience in modern web development.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    no: {
      role: "Webutvikler",
      description: "Lidenskapelig opptatt av å bygge vakre, funksjonelle og brukersentrerte digitale opplevelser. Nyutdannet med 3 års praktisk erfaring innen moderne webutvikling.",
      viewWork: "Se Mine Prosjekter",
      getInTouch: "Kontakt Meg",
    },
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl">
            VBL
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Viktoria Brodshaug Langaas
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            {t.role}
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="gap-2 cursor-pointer"
          >
            {t.viewWork}
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="gap-2 cursor-pointer"
          >
            {t.getInTouch}
          </Button>
        </div>

        <div className="flex gap-6 justify-center text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/ViktoriaLangaas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <Github className="size-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <Linkedin className="size-6" />
          </a>
          <a
            href="mailto:viktorbl@stud.ntnu.no"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
          >
            <Mail className="size-6" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown className="size-8" />
      </button>
    </section>
  );
}