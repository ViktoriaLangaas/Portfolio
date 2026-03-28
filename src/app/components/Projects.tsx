import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";
import { projects } from "./projectsData";

export function Projects() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "My projects",
      subtitle: "A selection of projects I've built during my bachelor's degree, showcasing my growth and technical abilities over the past three years.",
      code: "Code",
      liveDemo: "Live demo",
      comingSoon: "Links coming soon",
      details: "View project details",
    },
    no: {
      title: "Mine prosjekter",
      subtitle: "Et utvalg prosjekter jeg har bygget under bachelorgraden, som viser min vekst og tekniske ferdigheter de siste tre årene.",
      code: "Kode",
      liveDemo: "Live demo",
      comingSoon: "Lenker kommer snart",
      details: "Se prosjektet",
    },
  };

  const t = translations[language];
  const projectData = projects;


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
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
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block w-full transform transition-transform hover:-translate-y-1"
              >
                <Card
                    className="
                      w-full 
                      max-w-full
                      min-w-0
                      hover:shadow-xl 
                      transition-shadow 
                      dark:bg-gray-900 
                      dark:border-gray-800 
                      cursor-pointer
                    "
                  >
                  <img
                    src={project.image}
                    alt={localized.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl dark:text-white">{localized.title}</CardTitle>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{localized.course}</p>
                    <CardDescription className="text-base dark:text-gray-300">{localized.shortDescription}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                      {localized.status && (
                        <Badge variant="outline" className="border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-400">
                          {localized.status}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" className="gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
                      {t.details}
                    </Button>
                    {project.github && (
                      <Button variant="outline" size="sm" className="gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="size-4" />
                          {t.code}
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button size="sm" className="gap-2 cursor-pointer" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-4" />
                          {t.liveDemo}
                        </a>
                      </Button>
                    )}
                    {!project.github && !project.demo && localized.status && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t.comingSoon}</p>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Bored? Want to try a game?
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Try to win Connect Four agianst my unbeatable AI
          </p>

          <Link
            to="/connect-four"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Play Connect Four
          </Link>
        </div>
      </div>
    </section>
  );
}