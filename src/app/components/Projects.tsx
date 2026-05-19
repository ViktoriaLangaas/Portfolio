import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";
import { projects } from "./projectsData";

export function Projects() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "My projects",
      subtitle:
        "A selection of projects I've built during my bachelor's degree, showcasing my growth and technical abilities over the past three years.",
      code: "Code",
      liveDemo: "Live demo",
      comingSoon: "",
      details: "View project details",
    },

    no: {
      title: "Mine prosjekter",
      subtitle:
        "Et utvalg prosjekter jeg har bygget under bachelorgraden, som viser min vekst og tekniske ferdigheter de siste tre årene.",
      code: "Kode",
      liveDemo: "Live demo",
      comingSoon: "",
      details: "Se prosjektet",
    },
  };

  const t = translations[language];
  const projectData = projects;

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-6xl mx-auto w-full overflow-visible">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-full">
          {projectData.map((project) => {
            const localized = project.languages[language];

            return (
              <Card
                key={project.id}
                className="
                  w-full
                  max-w-full
                  min-w-0
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition-all
                  dark:bg-gray-900
                  dark:border-gray-800
                "
              >
                <img
                  src={project.image}
                  alt={localized.title}
                  className="w-full aspect-[16/9] object-contain bg-gray-100 dark:bg-gray-800 rounded-t-lg"
                />

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl dark:text-white">
                      {localized.title}
                    </CardTitle>

                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                    {localized.course}
                  </p>

                  <CardDescription className="text-base dark:text-gray-300">
                    {localized.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}

                    {localized.status && (
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-600 dark:border-green-400 dark:text-green-400"
                      >
                        {localized.status}
                      </Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                    asChild
                  >
                    <Link to={`/project/${project.id}`}>
                      {t.details}
                    </Link>
                  </Button>

                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="size-4" />
                        {t.code}
                      </a>
                    </Button>
                  )}

                  {project.demo && (
                    <Button
                      size="sm"
                      className="gap-2 cursor-pointer"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="size-4" />
                        {t.liveDemo}
                      </a>
                    </Button>
                  )}

                  {!project.github &&
                    !project.demo &&
                    localized.status && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {t.comingSoon}
                      </p>
                    )}
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-blue-200 dark:border-blue-900
            bg-gradient-to-br
            from-blue-50
            via-white
            to-purple-50
            dark:from-slate-900
            dark:via-gray-900
            dark:to-blue-950
            shadow-xl
            p-8 md:p-10
            mt-16
          "
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-5">
                🎮{" "}
                {language === "en"
                  ? "Bonus Experience"
                  : "Bonusopplevelse"}
              </div>

              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
                Connect Four vs AI
              </h3>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-6">
                {language === "en"
                  ? "A fun little side project built with React, where you can challenge an AI in Connect Four, track your match history, and see how many games you can win."
                  : "Et lite sideprosjekt laget med React, hvor du kan utfordre en AI i Fire på rad, følge med på kamphistorikken din og se hvor mange spill du klarer å vinne."}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "React",
                  "Minimax AI",
                  language === "en" ? "Game Logic" : "Spilllogikk",
                  language === "en"
                    ? "Local Storage"
                    : "Lokal lagring",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <Link
                to="/connect-four"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3
                  rounded-xl
                  bg-blue-600 hover:bg-blue-700
                  text-white
                  font-medium
                  shadow-lg shadow-blue-500/20
                  transition-all
                  hover:scale-[1.02]
                "
              >
                {language === "en"
                  ? "Play the game"
                  : "Spill spillet"}{" "}
                →
              </Link>
            </div>

            {/* Decorative board preview */}
            <div className="hidden md:grid grid-cols-4 gap-3">
              {[
                "🔴",
                "🟡",
                "🔴",
                "🟡",
                "🟡",
                "🔴",
                "🟡",
                "🔴",
                "🔴",
                "🟡",
                "🔴",
                "🟡",
                "🟡",
                "🔴",
                "🟡",
                "🔴",
              ].map((piece, idx) => (
                <div
                  key={idx}
                  className="
                    w-14 h-14
                    rounded-full
                    bg-blue-700 dark:bg-blue-900
                    flex items-center justify-center
                    text-2xl
                    shadow-lg
                  "
                >
                  {piece}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}