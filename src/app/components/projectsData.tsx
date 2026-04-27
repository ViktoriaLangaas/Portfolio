import comparaImg from "../img/compara.png";
import adopsjonImg from "../img/adopsjon.png";
import AIquiz from "../img/AIquiz.png";
import employeeDir from "../img/employee.png";
import turningTide from "../img/turningtide.png";

export type ProjectData = {
  id: string;
  image: string;
  year: string;
  github: string | null;
  demo: string | null;
  technologies: string[];
  timeFrame: string;
  features: string[];
  languages: {
    en: {
      title: string;
      shortDescription: string;
      longDescription: string;
      course: string;
      status?: string;
      moreText: string;
    };
    no: {
      title: string;
      shortDescription: string;
      longDescription: string;
      course: string;
      status?: string;
      moreText: string;
    };
  };
  extraImages: string[];
};

export const projects: ProjectData[] = [
  {
    id: "adopsjonsplattform",
    image: adopsjonImg,
    year: "2026",
    github: "https://github.com/git-kaia/pet-matchmaking",
    demo: null,
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    timeFrame: "Jan 2026 - Jun 2026",
    features: [
      "User authentication and roles for families and admins",
      "Animal profile management with search and filters",
      "Secure application flows for adoption matching",
      "Responsive UI with accessibility enhancements",
    ],
    languages: {
      en: {
        title: "Adopsjonsplattform",
        shortDescription:
          "Bachelor thesis: A comprehensive adoption platform connecting families and pets in need of homes.",
        longDescription:
          "This full-stack application is built to manage adoption profiles, track interactions and handle secure communication. The goal is to provide a modern and reliable solution for animal welfare organizations and prospective adopters.",
        course: "IDG3920: Bachelor Thesis",
        status: "Under Development",
        moreText:
          "Built with a scalable architecture, emphasis on maintainability and clean code. Includes API design, database relations, and a multi-step onboarding experience.",
      },
      no: {
        title: "Adopsjonsplattform",
        shortDescription:
          "Bacheloroppgave: En omfattende adopsjonsplattform som kobler familier med dyr som trenger hjem.",
        longDescription:
          "Denne full-stack-applikasjonen er bygget for å håndtere dyreprofiler, spore interaksjoner og sikre kommunikasjon. Målet er å tilby en moderne og pålitelig løsning for dyrevernorganisasjoner og potensielle adoptanter.",
        course: "IDG3920: Bacheloroppgave",
        status: "Under utvikling",
        moreText:
          "Fokus på vedlikeholdbarhet og ren kode. Inkluderer API-design, databaserelasjoner og én flerstegs onboardingsflyt.",
      },
    },
    extraImages: [adopsjonImg, adopsjonImg, adopsjonImg],
  },
  {
    id: "compara",
    image: comparaImg,
    year: "2025",
    github: "https://github.com/isakeghv/comparative_tool_prototype",
    demo: null,
    technologies: ["JavaScript", "HTML", "CSS", "UI/UX"],
    timeFrame: "Sep 2024 - Jan 2025",
    features: [
      "Interactive comparison sliders",
      "Dynamic data visualization charts",
      "Mobile-first responsive design",
      "Custom filter and sorting controls",
    ],
    languages: {
      en: {
        title: "Compara",
        shortDescription:
          "Interactive comparative tool prototype focused on user-friendly decision support.",
        longDescription:
          "Compara aims to help users compare multiple sets of data points in a clean UI. It supports side-by-side reviews and helps identify the best choice quickly.",
        course: "IDG2671: Web Project",
        moreText:
          "Implemented state-driven interactions, performance optimizations, and a component-based layout for reusability.",
      },
      no: {
        title: "Compara",
        shortDescription:
          "Interaktiv komparativ prototyp for brukervennlig beslutningsstøtte.",
        longDescription:
          "Compara hjelper brukere med å sammenligne flere datapunkter i en ren UI. Den støtter sideveis visning og hjelper med å finne riktige valg raskt.",
        course: "IDG2671: Web prosjekt",
        moreText:
          "Inneholder tilstandsbaserte interaksjoner, ytelsesoptimalisering og komponentbasert layout.",
      },
    },
    extraImages: [comparaImg],
  },
  {
    id: "ai-literacy-quiz",
    image: AIquiz,
    year: "2025",
    github: "https://github.com/idg2100-2025/idg2100-group-exam-ismavi",
    demo: null,
    technologies: ["React", "HTML", "CSS", "JavaScript", "SCSS"],
    timeFrame: "Feb 2025 - Jun 2025",
    features: [
      "Role-based access: guest, researcher, admin",
      "Quiz creation and analytics dashboard",
      "AI-generated vs human-crafted question review",
      "Secure authentication and user history",
    ],
    languages: {
      en: {
        title: "AI literacy quiz",
        shortDescription:
          "Full-stack app with roles for guest, researcher, and admin, built in MERN-style architecture.",
        longDescription:
          "The project maps AI literacy with quizzes that track answers and provide insights. Administrators control questions and manage users.",
        course: "IDG2100: Full-stack web development",
        moreText:
          "Includes backend REST API, frontend state handling, and responsive user interfaces for learning scenarios.",
      },
      no: {
        title: "AI literacy quiz",
        shortDescription:
          "Full-stack app med roller som gjest, researcher og admin, bygget med MERN-konsept.",
        longDescription:
          "Prosjektet kartlegger AI-kompetanse med quizer som sporer svar og gir innsikt. Administratorer styrer spørsmål og brukere.",
        course: "IDG2100: Full-stack webutvikling",
        moreText:
          "Inkluderer backend REST API, frontend tilstandshåndtering, og responsivt brukergrensesnitt.",
      },
    },
    extraImages: [AIquiz],
  },
  {
    id: "employee-directory",
    image: employeeDir,
    year: "2024",
    github: null,
    demo: null,
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    timeFrame: "Aug 2024 - Dec 2024",
    features: [
      "CRUD for employee profiles",
      "Search and filter with pagination",
      "REST API with validation and error handling",
      "Mock data based on The Office characters",
    ],
    languages: {
      en: {
        title: "Employee Directory",
        shortDescription:
          "Back-end project building a directory with CRUD operations and API endpoints.",
        longDescription:
          "Created a robust backend with Node/Express and MongoDB. Demonstrated solid API design and data handling.",
        course: "IDG2003: Back-end Development",
        moreText:
          "Extended with tests, logging, and modular code structure for maintainability.",
      },
      no: {
        title: "Employee Directory",
        shortDescription:
          "Back-endprosjekt med katalog og CRUD-API-komponenter.",
        longDescription:
          "Bygget en stabil backend med Node/Express og MongoDB. Viste god API-design og datahåndtering.",
        course: "IDG2003: Back-end development",
        moreText:
          "Utvidet med tester, logging og modulær kode for vedlikehold.",
      },
    },
    extraImages: [employeeDir],
  },
  {
    id: "scrolly-telling",
    image: turningTide,
    year: "2024",
    github: "https://github.com/AdvancedCSS2024/idg1292-2024-oblig3-group14",
    demo: "https://advancedcss2024.github.io/idg1292-2024-oblig3-group14/",
    technologies: ["HTML", "CSS", "JavaScript", "Scroll Animations"],
    timeFrame: "May 2024 - Aug 2024",
    features: [
      "Animated scrollytelling for sustainability theme",
      "Responsive text and visual narrative sections",
      "Parallax and fade effects on scroll",
      "Accessible content structure with semantic HTML",
    ],
    languages: {
      en: {
        title: "Scrolly telling",
        shortDescription:
          "A scrollytelling story on UN sustainability goal 14, with custom scroll-based animation.",
        longDescription:
          "The project combines storytelling and visual design to raise awareness of marine conservation. Built with HTML, CSS and JavaScript.",
        course: "IDG1292: Advanced CSS",
        moreText:
          "Includes interactive sections and animated transitions to engage users on desktop and mobile.",
      },
      no: {
        title: "Scrolly telling",
        shortDescription:
          "En scrollytelling-historie om FNs bærekraftsmål 14, med scroll-animasjoner.",
        longDescription:
          "Prosjektet kombinerer historiefortelling og visuell design for å øke bevissthet om havvern. Bygget med HTML, CSS og JavaScript.",
        course: "IDG1292: Advanced CSS",
        moreText:
          "Inneholder interaktive seksjoner og animasjonsglidninger for desktop og mobil.",
      },
    },
    extraImages: [turningTide],
  },
];

export const getProjectById = (projectId: string | undefined) => {
  if (!projectId) return undefined;
  return projects.find((project) => project.id === projectId);
};
