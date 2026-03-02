import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";

export function Skills() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Skills & Technologies",
      subtitle: "Technologies and tools I've worked with during my studies and personal projects.",
      categories: [
        { category: "Frontend Development", skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "BEM", "Tailwind CSS", "Next.js", "Redux"] },
        { category: "Backend Development", skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Firebase"] },
        { category: "Tools & Technologies", skills: ["Git", "GitHub", "Docker", "AWS", "Vite", "npm", "Postman"] },
        { category: "Design & Others", skills: ["Responsive Design", "UI/UX", "Figma", "Accessibility", "Agile", "Testing"] },
      ],
    },
    no: {
      title: "Ferdigheter & Teknologier",
      subtitle: "Teknologier og verktøy jeg har jobbet med under studiene og personlige prosjekter.",
      categories: [
        { category: "Frontend-utvikling", skills: ["React", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "SCSS", "BEM", "Tailwind CSS", "Next.js", "Redux"] },
        { category: "Backend-utvikling", skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Firebase"] },
        { category: "Verktøy & Teknologier", skills: ["Git", "GitHub", "Docker", "AWS", "Vite", "npm", "Postman"] },
        { category: "Design & Annet", skills: ["Responsivt Design", "UI/UX", "Figma", "Tilgjengelighet", "Agile", "Testing"] },
      ],
    },
  };

  const t = translations[language];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          {t.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {t.categories.map((item) => (
            <Card key={item.category} className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">{item.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}