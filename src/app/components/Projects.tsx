import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";

// local project images
import comparaImg from "../img/compara.png";
import adopsjonImg from "../img/adopsjon.png";
import turningTide from "../img/turningtide.png";
import employeeDir from "../img/employee.png";

export function Projects() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "My Projects",
      subtitle: "A selection of projects I've built during my bachelor's degree, showcasing my growth and technical abilities over the past three years.",
      code: "Code",
      liveDemo: "Live Demo",
      comingSoon: "Links coming soon",
      projects: [
        {
          title: "Adopsjonsplattform",
          description: "Bachelor thesis project: A comprehensive adoption platform currently under development. Full-stack application designed to connect adoptive families with animals in need of homes. To find the fitting home for the animal",
          course: "IDG3920: Bachelor Thesis",
          status: "Under Development",
        },
        {
          title: "Compara",
          description: "Web project focused on creating a comparative tool prototype. Features interactive comparisons and data visualization for user-friendly decision making.",
          course: "IDG2671: Web Project",
        },
        {
          title: "Turning the Tide",
          description: "Advanced CSS project featuring scroll-based storytelling techniques. An interactive narrative experience that responds to user scrolling with animations and visual effects.",
          course: "IDG1292: Advanced CSS",
        },
        {
          title: "Employee Directory",
          description: "Back-end development project creating an employee directory system featuring characters from The Office. Includes CRUD operations, database management, and API endpoints.",
          course: "IDG2003: Back-end Development",
        },
      ],
    },
    no: {
      title: "Mine Prosjekter",
      subtitle: "Et utvalg prosjekter jeg har bygget under bachelorgraden, som viser min vekst og tekniske ferdigheter de siste tre årene.",
      code: "Kode",
      liveDemo: "Live Demo",
      comingSoon: "Lenker kommer snart",
      projects: [
        {
          title: "Adopsjonsplattform",
          description: "Bacheloroppgave: En omfattende adopsjonsplattform under utvikling. Full-stack applikasjon designet for å knytte adoptivfamilier sammen med dyr som trenger hjem. Her skal dyret finne det riktige hjemmet som passer dets behov.",
          course: "IDG3920: Bacheloroppgave",
          status: "Under utvikling",
        },
        {
          title: "Compara",
          description: "Webprosjekt fokusert på å lage en komparativ verktøyprototype. Inneholder interaktive sammenligninger og datavisualisering for brukervennlig beslutningstaking.",
          course: "IDG2671: Web prosjekt",
        },
        {
          title: "Turning the Tide",
          description: "Avansert CSS-prosjekt med scroll-baserte fortellingteknikker. En interaktiv narrativ opplevelse som reagerer på brukerens scrolling med animasjoner og visuelle effekter.",
          course: "IDG1292: Advanced CSS",
        },
        {
          title: "Employee Directory",
          description: "Back-end utviklingsprosjekt som lager et ansatt-katalog-system med karakterer fra The Office. Inkluderer CRUD-operasjoner, databasehåndtering og API-endepunkter.",
          course: "IDG2003: Back-end development",
        },
      ],
    },
  };

  const t = translations[language];

  const projectData = [
    {
      image: adopsjonImg,
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      year: "2026",
      github: null,
      demo: null,
    },
    {
      image: comparaImg,
      technologies: ["JavaScript", "HTML", "CSS", "UI/UX"],
      year: "2025",
      github: "https://github.com/isakeghv/comparative_tool_prototype",
      demo: null,
    },
    {
      image: turningTide,
      technologies: ["HTML", "CSS", "JavaScript", "Scroll Animations"],
      year: "2024",
      github: "https://github.com/AdvancedCSS2024/idg1292-2024-oblig3-group14",
      demo: "https://advancedcss2024.github.io/idg1292-2024-oblig3-group14/",
    },
    {
      image: employeeDir,
      technologies: ["Node.js", "Express", "MongoDB", "REST API"],
      year: "2024",
      github: null,
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projectData.map((project, index) => {
            const translatedProject = t.projects[index];
            return (
              <Card key={translatedProject.title} className="overflow-hidden hover:shadow-xl transition-shadow dark:bg-gray-900 dark:border-gray-800 cursor-default">
                <img 
                  src={project.image} 
                  alt={translatedProject.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl dark:text-white">{translatedProject.title}</CardTitle>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{translatedProject.course}</p>
                  <CardDescription className="text-base dark:text-gray-300">{translatedProject.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                    {translatedProject.status && (
                      <Badge variant="outline" className="border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-400">
                        {translatedProject.status}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" className="gap-2 cursor-pointer" asChild>
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
                  {!project.github && !project.demo && translatedProject.status && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">{t.comingSoon}</p>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}