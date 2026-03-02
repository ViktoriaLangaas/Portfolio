import { Code2, Palette, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./LanguageContext";

export function About() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Me",
      paragraph1: "I'm a recent graduate with a Bachelor's degree in Web Development, bringing three years of dedicated learning and hands-on project experience. Throughout my studies, I've developed a strong foundation in both frontend and backend technologies.",
      paragraph2: "My journey in web development has been driven by curiosity and a genuine love for creating things that make a difference. From building responsive interfaces to architecting full-stack applications, I've explored various aspects of modern web development.",
      paragraph3: "I'm now looking to bring my skills, enthusiasm, and fresh perspective to a dynamic team where I can continue to grow and contribute to meaningful projects.",
      highlights: [
        {
          title: "Clean Code",
          description: "Writing maintainable, scalable, and efficient code is at the heart of everything I do.",
        },
        {
          title: "Design-Focused",
          description: "Bridging the gap between design and development to create beautiful user experiences.",
        },
        {
          title: "Problem Solver",
          description: "Passionate about tackling complex challenges with creative and practical solutions.",
        },
      ],
    },
    no: {
      title: "Om Meg",
      paragraph1: "Jeg er nyutdannet med en bachelorgrad i webutvikling, med tre år dedikert læring og praktisk prosjekterfaring. Gjennom studiene har jeg utviklet et solid fundament innen både frontend- og backend-teknologier.",
      paragraph2: "Min reise innen webutvikling har vært drevet av nysgjerrighet og en genuin kjærlighet for å skape ting som gjør en forskjell. Fra å bygge responsive grensesnitt til å arkitektere full-stack applikasjoner, har jeg utforsket ulike aspekter av moderne webutvikling.",
      paragraph3: "Jeg ser nå etter å bringe mine ferdigheter, entusiasme og friske perspektiv til et dynamisk team hvor jeg kan fortsette å vokse og bidra til meningsfulle prosjekter.",
      highlights: [
        {
          title: "Ren Kode",
          description: "Å skrive vedlikeholdbar, skalerbar og effektiv kode er kjernen i alt jeg gjør.",
        },
        {
          title: "Designfokusert",
          description: "Bygger bro mellom design og utvikling for å skape vakre brukeropplevelser.",
        },
        {
          title: "Problemløser",
          description: "Lidenskapelig opptatt av å takle komplekse utfordringer med kreative og praktiske løsninger.",
        },
      ],
    },
  };

  const t = translations[language];
  const icons = [Code2, Palette, Lightbulb];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1760536928911-40831dacdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MjEyNzY0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Workspace"
              className="rounded-lg shadow-xl w-full object-cover aspect-video"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {t.paragraph1}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {t.paragraph2}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {t.paragraph3}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.highlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <Card key={item.title} className="border-2 hover:border-blue-600 dark:hover:border-blue-400 transition-colors cursor-default">
                <CardContent className="p-6">
                  <Icon className="size-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}