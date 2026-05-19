import comparaImg from "../img/compara.png";
import compara1 from "../img/compara1.png";
import compara2 from "../img/compara2.png";
import compara3 from "../img/compara3.png";
import compara4 from "../img/compara4.png";
import compara5 from "../img/compara5.png";
import compara6 from "../img/compara6.png";
import compara7 from "../img/compara7.png";
import compara8 from "../img/compara8.png";
import compara9 from "../img/compara9.png";
import compara10 from "../img/compara10.png";
import compara11 from "../img/compara11.png";
import compara12 from "../img/compara12.png";
import compara13 from "../img/compara13.png";


import adopsjonImg from "../img/adopsjon.png";
import adopsjon1 from "../img/adopsjon1.png";
import adopsjon2 from "../img/adopsjon2.png";
import adopsjon3 from "../img/adopsjon3.png";
import adopsjon4 from "../img/adopsjon4.png";
import adopsjon5 from "../img/adopsjon5.png";
import adopsjon6 from "../img/adopsjon6.png";
import adopsjon7 from "../img/adopsjon7.png";

import turningTide from "../img/turningtide.png";
import turningtide1 from "../img/turningtide1.png";
import turningtide2 from "../img/turningtide2.png";
import turningtide3 from "../img/turningtide3.png";
import turningtide4 from "../img/turningtide4.png";
import turningtide5 from "../img/turningtide5.png";

import AIquiz from "../img/AIquiz.png";
import AIquiz1 from "../img/AIquiz1.png";
import AIquiz2 from "../img/AIquiz2.png";
import AIquiz3 from "../img/AIquiz3.png";
import AIquiz4 from "../img/AIquiz4.png";
import AIquiz5 from "../img/AIquiz5.png";
import AIquiz6 from "../img/AIquiz6.png";
import AIquiz7 from "../img/AIquiz7.png";
import AIquiz8 from "../img/AIquiz8.png";
import AIquiz9 from "../img/AIquiz9.png";
import AIquiz10 from "../img/AIquiz10.png";
import AIquiz11 from "../img/AIquiz11.png";
import AIquiz12 from "../img/AIquiz12.png";
import AIquiz13 from "../img/AIquiz13.png";

import employeeDir from "../img/employee.png";
import employee1 from "../img/employee1.png";
import employee2 from "../img/employee2.png";
import employee3 from "../img/employee3.png";
import employee4 from "../img/employee4.png";
import employee5 from "../img/employee5.png";
import employee6 from "../img/employee6.png";

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
    image: adopsjon1,
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
        title: "Match with Purpose",
        shortDescription:
          "Bachelor thesis: An application to fint the most suitable home based on the animal's needs.",
        longDescription:
          "This full-stack application is built to manage adoption profiles, track interactions and handle secure communication. The goal is to provide a modern and reliable solution for animal welfare organizations and prospective adopters.",
        course: "IDG3920: Bachelor Thesis",
        moreText:
          "Built with a scalable architecture, emphasis on maintainability and clean code. Includes API design, database relations, and a multi-step onboarding experience.",
      },
      no: {
        title: "Match med mening",
        shortDescription:
          "Bacheloroppgave: Utvikling av en webbasert applikasjon for matchmaking.",
        longDescription:
          "Denne full-stack-applikasjonen er bygget for å håndtere dyreprofiler, spore interaksjoner og sikre kommunikasjon. Målet er å tilby en moderne og pålitelig løsning for dyrevernorganisasjoner og potensielle adoptanter.",
        course: "IDG3920: Bacheloroppgave",
        moreText:
          "Fokus på vedlikeholdbarhet og ren kode. Inkluderer API-design, databaserelasjoner og én flerstegs onboardingsflyt.",
      },
    },
    extraImages: [adopsjon1, adopsjon2, adopsjon3, adopsjon4, adopsjon5, adopsjon6, adopsjon7],
  },
  {
    id: "compara",
    image: comparaImg,
    year: "2025",
    github: "https://github.com/isakeghv/comparative_tool_prototype",
    demo: null,
    technologies: ["JavaScript", "HTML", "CSS", "UI/UX"],
    timeFrame: "Jan 2025 - Jun 2025",
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
    extraImages: [comparaImg, compara1, compara2, compara3, compara4, compara5, compara6, compara7, compara8, compara9, compara10, compara11, compara12, compara13],
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
    extraImages: [AIquiz, AIquiz1, AIquiz2, AIquiz3, AIquiz4, AIquiz5, AIquiz6, AIquiz7, AIquiz8, AIquiz9, AIquiz10, AIquiz11, AIquiz12, AIquiz13],
  },
  {
    id: "employee-directory",
    image: employeeDir,
    year: "2024",
    github: null,
    demo: null,
    technologies: ["Node.js", "Express", "MongoDB", "REST API"],
    timeFrame: "Okt 2024 - Nov 2024",
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
    extraImages: [employeeDir, employee1, employee2, employee3, employee4, employee5, employee6],
  },
  {
    id: "scrolly-telling",
    image: turningTide,
    year: "2024",
    github: "https://github.com/AdvancedCSS2024/idg1292-2024-oblig3-group14",
    demo: "https://advancedcss2024.github.io/idg1292-2024-oblig3-group14/",
    technologies: ["HTML", "CSS", "JavaScript", "Scroll Animations"],
    timeFrame: "Apr 2024 - Mai 2024",
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
    extraImages: [turningTide, turningtide1, turningtide2, turningtide3, turningtide4, turningtide5],
  },
];

export const getProjectById = (projectId: string | undefined) => {
  if (!projectId) return undefined;
  return projects.find((project) => project.id === projectId);
};
