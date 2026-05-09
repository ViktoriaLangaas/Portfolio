import { Code2, Palette, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "./LanguageContext";

export function About() {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "About Me",
      paragraph1: "I am a recent graduate with a bachelor's degree in web development, with three years of learning and hands-on project experience. Through my studies, I have developed a solid foundation in both front-end and back-end technologies.",
      paragraph2: "My journey in web development started with an interest in technology and how the web actually works. From building responsive interfaces to architecting full-stack applications, I have explored various aspects of modern web development.",
      paragraph3: "I am now looking to further my skills and am looking for new opportunities where I can continue and contribute to meaningful projects.",
      highlights: [
        {
          title: "Clean Code",
          description: "I care about writing code that’s easy to maintain, scales smoothly, and runs efficiently",
        },
        {
          title: "Design-Focused",
          description: "Bridging the gap between design and development to create beautiful user experiences.",
        },
        {
          title: "Working smart with AI",
          description: "With the rise of artificial intelligence, it's all about using AI tools smart and effective.",
        },
      ],
    },
    no: {
      title: "Om meg",
      paragraph1: "Jeg er snart nyutdannet med en bachelorgrad i webutvikling, med tre år med læring og praktisk prosjekterfaring. Gjennom studiene har jeg utviklet et solid fundament innen både frontend- og backend-teknologier.",
      paragraph2: "Min reise innenfor webutvikling startet med en interesse for teknologi og hvordan webben faktisk fungerer. Fra å bygge responsive grensesnitt til å arkitektere full-stack applikasjoner, har jeg utforsket ulike aspekter av moderne webutvikling.",
      paragraph3: "Jeg ser nå etter å bringe mine ferdigheter videre og ser etter nye muligheter hvor jeg kan fortsette og bidra til meningsfulle prosjekter.",
      highlights: [
        {
          title: "Ren kode",
          description: "Jeg legger stor vekt på å skrive kode som er lett å vedlikeholde, skalerer godt og fungerer effektivt.",
        },
        {
          title: "Designfokusert",
          description: "Brobygger mellom design og utvikling for å skape gode brukeropplevelser.",
        },
        {
          title: "Jobb smart med KI",
          description: "Med utviklingen av kunstig intelligens, handler det om å bruke KI verktøy smart og effektivt.",
        },
      ],
    },
  };

  const t = translations[language];
  const icons = [Code2, Palette, Lightbulb];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-16 opacity-90 dark:opacity-70">
          <div>
            <img 
              src="/src/app/img/meg3.png"
              alt="Me"
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