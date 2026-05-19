import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { useLanguage } from "./LanguageContext";

export function Skills() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "Skills & Technologies",
      subtitle:
        "Technologies, tools, and methodologies I’ve used through academic and full-stack development projects.",

      categories: [
        {
          category: "Frontend Development",
          skills: [
            "React",
            "Vue.js",
            "Nuxt",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "SCSS",
            "Sass",
            "BEM",
            "Tailwind CSS",
            "Responsive Design",
            "Accessibility",
            "GSAP",
            "Storybook",
            "Vite",
          ],
        },

        {
          category: "Backend Development",
          skills: [
            "Node.js",
            "Express.js",
            "PHP",
            "REST APIs",
            "JWT Authentication",
            "HttpOnly Cookies",
            "MongoDB",
            "Mongoose",
            "MySQL",
            "SQL",
            "Swagger",
            "File Upload Handling",
          ],
        },

        {
          category: "Testing & DevOps",
          skills: [
            "Docker",
            "Git",
            "GitHub",
            "GitHub Actions",
            "CI/CD",
            "Unit Testing",
            "Integration Testing",
            "E2E Testing",
            "Postman",
            "Deployment",
          ],
        },

        {
          category: "Design & Collaboration",
          skills: [
            "UI/UX Design",
            "Figma",
            "Agile Workflow",
            "Git Collaboration",
            "Component Architecture",
            "Scrollytelling",
            "Interactive Web Design",
            "Performance Optimization",
            "Cross-device Design",
          ],
        },
      ],
    },

    no: {
      title: "Ferdigheter & Teknologier",
      subtitle:
        "Teknologier, verktøy og arbeidsmetoder jeg har brukt gjennom akademiske og fullstack-prosjekter.",

      categories: [
        {
          category: "Frontend-utvikling",
          skills: [
            "React",
            "Vue.js",
            "Nuxt",
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "SCSS",
            "Sass",
            "BEM",
            "Tailwind CSS",
            "Responsivt Design",
            "Tilgjengelighet",
            "GSAP",
            "Storybook",
            "Vite",
          ],
        },

        {
          category: "Backend-utvikling",
          skills: [
            "Node.js",
            "Express.js",
            "PHP",
            "REST API-er",
            "JWT-autentisering",
            "HttpOnly Cookies",
            "MongoDB",
            "Mongoose",
            "MySQL",
            "SQL",
            "Swagger",
            "Filopplasting",
          ],
        },

        {
          category: "Testing & DevOps",
          skills: [
            "Docker",
            "Git",
            "GitHub",
            "GitHub Actions",
            "CI/CD",
            "Enhetstesting",
            "Integrasjonstesting",
            "E2E-testing",
            "Postman",
            "Deployering",
          ],
        },

        {
          category: "Design & Samarbeid",
          skills: [
            "UI/UX-design",
            "Figma",
            "Agile arbeidsmetoder",
            "Git-samarbeid",
            "Komponentarkitektur",
            "Scrollytelling",
            "Interaktivt webdesign",
            "Ytelsesoptimalisering",
            "Responsivt design på tvers av enheter",
          ],
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900"
    >
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
            <Card
              key={item.category}
              className="dark:bg-gray-800 dark:border-gray-700"
            >
              <CardHeader>
                <CardTitle className="text-xl dark:text-white">
                  {item.category}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-gray-100 text-gray-800 dark:bg-blue-950 dark:text-white dark:border-black border-gray shadow-sm"
                    >
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