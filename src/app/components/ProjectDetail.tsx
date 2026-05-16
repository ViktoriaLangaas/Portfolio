import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";
import { getProjectById } from "./projectsData";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const { language } = useLanguage();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <main className="min-h-screen p-8 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <p className="mb-4">Sorry, we could not locate that project.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-300 hover:underline">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const localized = project.languages[language];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-gray-950 dark:to-slate-900 text-gray-900 dark:text-white">
      <div className="mx-auto max-w-6xl p-4 sm:p-8">
        <div className="mb-5 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-blue-500 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all shadow-sm"
          >
            <ArrowLeft size={18} />
            {language === "en" ? "Back to portfolio" : "Tilbake til portefølje"}
          </Link>
        </div>

        <div className="rounded-3xl border border-gray-200/60 dark:border-gray-700/70 bg-white/95 dark:bg-gray-900/80 shadow-2xl overflow-hidden">
          <div className="relative h-72 md:h-96">
            <img
              src={project.image}
              alt={localized.title}
              className="absolute inset-0 object-cover w-full h-full opacity-90 dark:opacity-70"
            />
            <div className="absolute inset-0 bg-white/20 dark:bg-black/40" />
          </div>

          <div className="p-6 sm:p-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
              {localized.title}
            </h1>
            <p className="text-slate-700 dark:text-white/90 mb-1 text-lg md:text-xl">{project.timeFrame}</p>
            <p className="text-slate-600 dark:text-blue-200 mb-4 text-sm md:text-base">{localized.course}</p>

            <div className="rounded-2xl bg-gray-100 dark:bg-gray-900 p-5">
              <p className="mb-4 text-base leading-relaxed text-gray-700 dark:text-gray-200">{localized.longDescription}</p>
              <p className="mb-8 text-base font-medium leading-relaxed text-gray-700 dark:text-gray-200">{localized.moreText}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{language === "en" ? "Feature Highlights" : "Høydepunkter"}</h2>
                <ul className="grid gap-2 md:grid-cols-2 list-none">{project.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-blue-500 text-gray-800 dark:text-gray-100"
                    >
                      {feature}
                    </li>
                ))}</ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{language === "en" ? "Technology stack" : "Teknologier"}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="bg-gray-200 dark:bg-blue-900 text-gray-800 dark:text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">{language === "en" ? "Image Gallery" : "Bildegalleri"}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.extraImages.length === 0 ? (
                    <div className="text-sm text-gray-600 dark:text-gray-300">{language === "en" ? "No gallery images available" : "Ingen galleri-bilder tilgjengelig"}</div>
                  ) : (
                    project.extraImages.map((img, idx) => (
                      <img
                        key={`${img}-${idx}`}
                        src={img}
                        alt={`${localized.title} image ${idx + 1}`}
                        className="rounded-xl h-60 w-full object-cover border border-gray-200 dark:border-gray-800 shadow-sm opacity-90 dark:opacity-70"
                      />
                    ))
                  )}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">{language === "en" ? "Links" : "Lenker"}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink size={16} />
                        {language === "en" ? "Live demo" : "Live demo"}
                      </a>
                    </Button>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
