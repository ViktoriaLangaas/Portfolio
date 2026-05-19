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

type LocalizedText = {
  en: string;
  no: string;
};

export type ProjectData = {
  id: string;
  image: string;
  year: string;
  github: string | null;
  demo: string | null;
  technologies: string[];

  timeFrame: LocalizedText;

  features: {
    en: string[];
    no: string[];
  };

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

  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "REST API",
    "Accessibility",
  ],

  timeFrame: {
    en: "Jan 2026 - Jun 2026",
    no: "Jan 2026 - Jun 2026",
  },

  features: {
    en: [
      "Rule-based matchmaking system for pet adoption",
      "Compatibility scoring and rejection rule engine",
      "Animal profiles with detailed welfare requirements",
      "Application flow for potential adopters",
      "Role-based access for administrators and adopters",
      "Search, filtering and profile management",
      "Accessible and responsive user interface",
      "REST API with relational PostgreSQL database",
    ],

    no: [
      "Regelbasert matchmaking-system for dyreadopsjon",
      "Kompatibilitetsscore og avvisningsregler",
      "Dyreprofiler med detaljerte velferdskrav",
      "Søknadsflyt for potensielle adoptanter",
      "Rollebasert tilgang for administratorer og adoptanter",
      "Søk, filtrering og profilhåndtering",
      "Universelt utformet og responsivt grensesnitt",
      "REST API med relasjonell PostgreSQL-database",
    ],
  },

  languages: {
    en: {
      title: "Match with Purpose",

      shortDescription:
        "A web-based adoption platform focused on animal welfare and responsible pet ownership.",

      longDescription:
        "This bachelor thesis explores how a web application can support responsible pet adoption by prioritizing animal welfare and compatibility between animals and adopters. The project was developed in collaboration with Fugleteamet, a Norwegian volunteer organization working with rescue and rehoming of pet birds.",

      course: "IDG3920: Bachelor Thesis",

      moreText:
        "The prototype uses a rule-based matchmaking system combining rejection rules and compatibility scoring to evaluate whether a potential adopter is suited for a specific animal. The solution was designed to encourage informed adoption decisions, improve transparency in the adoption process, and reduce unsuitable matches. While the prototype primarily focuses on pet birds, the system architecture was designed to support additional animal types in the future.",

      status: "Completed",
    },

    no: {
      title: "Match med mening",

      shortDescription:
        "En webbasert adopsjonsplattform med fokus på dyrevelferd og ansvarlig dyrehold.",

      longDescription:
        "Denne bacheloroppgaven undersøker hvordan en webapplikasjon kan støtte ansvarlig adopsjon av kjæledyr ved å prioritere dyrevelferd og kompatibilitet mellom dyr og mennesker. Prosjektet ble utviklet i samarbeid med Fugleteamet, en norsk frivillig organisasjon som jobber med redning og omplassering av tamfugler.",

      course: "IDG3920: Bacheloroppgave",

      moreText:
        "Prototypen benytter et regelbasert matchmaking-system som kombinerer avvisningsregler og kompatibilitetsscore for å vurdere hvor egnet en adoptant er for et spesifikt dyr. Løsningen er utviklet for å fremme mer informerte adopsjonsvalg, tydeliggjøre viktige faktorer rundt dyrehold og redusere uegnede matcher. Selv om prototypen hovedsakelig fokuserer på tamfugler, er systemarkitekturen utviklet for å kunne utvides til flere typer kjæledyr.",

      status: "Fullført",
    },
  },

  extraImages: [
    adopsjon1,
    adopsjon2,
    adopsjon3,
    adopsjon4,
    adopsjon5,
    adopsjon6,
    adopsjon7,
  ],
},
  {
  id: "compara",
  image: compara1,
  year: "2025",

  github: "https://github.com/isakeghv/comparative_tool_prototype",

  demo: null,

  technologies: [
    "Nuxt",
    "Vue",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "JWT",
    "REST API",
    "GitHub Actions",
  ],

  timeFrame: {
    en: "Jan 2025 - Jun 2025",
    no: "Jan 2025 - Jun 2025",
  },

  features: {
    en: [
      "Research platform for comparative studies and data collection",
      "Authentication and researcher dashboard",
      "Study creation with multi-step editor",
      "Support for multiple response types and artifacts",
      "Participant access through unique study links",
      "CSV and JSON export for collected responses",
      "Aggregated statistics and response visualizations",
      "Undo/redo functionality and study duplication",
      "JWT authentication and role-based access",
      "Dockerized deployment with CI/CD pipeline",
    ],

    no: [
      "Forskningsplattform for komparative studier og datainnsamling",
      "Autentisering og dashboard for forskere",
      "Opprettelse av studier gjennom flerstegs editor",
      "Støtte for flere responstyper og artefakter",
      "Deltakertilgang gjennom unike studielenker",
      "Eksport av innsamlet data til CSV og JSON",
      "Aggregerte statistikker og visualisering av svar",
      "Undo/redo-funksjonalitet og duplisering av studier",
      "JWT-autentisering og rollebasert tilgang",
      "Docker-basert deployment med CI/CD-pipeline",
    ],
  },

  languages: {
    en: {
      title: "Compara",

      shortDescription:
        "A full-stack research platform for conducting comparative studies and collecting structured participant data.",

      longDescription:
        "Compara is a collaborative web application designed to help researchers create and manage advanced comparative studies. The platform was developed to address limitations in existing tools such as Google Forms and Nettskjema by supporting more flexible study structures, richer response types, and improved participant interaction.",

      course: "IDG2671: Web Project",

      moreText:
        "The application includes authentication, researcher dashboards, participant sessions, study publishing, response analytics, and export functionality for CSV and JSON datasets. Researchers can create studies with demographics, consent forms, drag-and-drop interactions, ranking systems, and uploaded media artifacts such as images, audio, video, and PDF files. The project was built using Nuxt, Vue, MongoDB, Docker, and JWT authentication, and deployed through a CI/CD pipeline using GitHub Actions.",

      status: "Completed",
    },

    no: {
      title: "Compara",

      shortDescription:
        "En full-stack forskningsplattform for komparative studier og strukturert datainnsamling.",

      longDescription:
        "Compara er en samarbeidsutviklet webapplikasjon designet for å hjelpe forskere med å opprette og administrere avanserte komparative studier. Plattformen ble utviklet for å løse begrensninger i eksisterende løsninger som Google Forms og Nettskjema ved å støtte mer fleksible studiedesign, flere responstyper og bedre deltakerinteraksjon.",

      course: "IDG2671: Webprosjekt",

      moreText:
        "Applikasjonen inkluderer autentisering, forskerdashboard, deltakersesjoner, publisering av studier, responsanalyse og eksport av datasett til CSV og JSON. Forskere kan opprette studier med demografi-seksjoner, samtykkeskjema, drag-and-drop-interaksjoner, rangeringssystemer og opplasting av artefakter som bilder, lyd, video og PDF-filer. Prosjektet ble utviklet med Nuxt, Vue, MongoDB, Docker og JWT-autentisering, og deployet gjennom en CI/CD-pipeline med GitHub Actions.",

      status: "Fullført",
    },
  },

  extraImages: [
    compara1,
    compara2,
    compara3,
    compara4,
    compara5,
    compara6,
    compara7,
    compara8,
    compara9,
    compara10,
    compara11,
    compara12,
    compara13,
  ],
},
  {
  id: "ai-literacy-quiz",

  image: AIquiz,

  year: "2025",

  github: "https://github.com/idg2100-2025/idg2100-group-exam-ismavi",

  demo: null,

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Swagger",
    "Storybook",
    "SCSS",
    "REST API",
  ],

  timeFrame: {
    en: "Feb 2025 - Jun 2025",
    no: "Feb 2025 - Jun 2025",
  },

  features: {
    en: [
      "AI literacy quiz platform with multiple user roles",
      "Authentication with JWT and HttpOnly cookies",
      "Role-based access for visitors, researchers, and admins",
      "Quiz creation, publishing, and management dashboard",
      "Analytics and participant statistics for researchers",
      "Protected frontend and backend routes",
      "Swagger API documentation",
      "Storybook component documentation",
      "Responsive quiz experience across devices",
      "MongoDB database with REST API architecture",
    ],

    no: [
      "AI literacy-plattform med flere brukerroller",
      "Autentisering med JWT og HttpOnly cookies",
      "Rollebasert tilgang for besøkende, forskere og administratorer",
      "Dashboard for opprettelse, publisering og administrasjon av quiz",
      "Analyse og deltakerstatistikk for forskere",
      "Beskyttede frontend- og backend-ruter",
      "Swagger-dokumentasjon for API",
      "Storybook-dokumentasjon av React-komponenter",
      "Responsiv quizopplevelse på ulike enheter",
      "MongoDB-database med REST API-arkitektur",
    ],
  },

  languages: {
    en: {
      title: "AI Literacy Quiz",

      shortDescription:
        "A full-stack web platform designed to improve AI literacy through interactive quizzes and analytics.",

      longDescription:
        "This project was developed as part of the IDG2100 full-stack web development exam at NTNU. The application helps users improve their understanding of AI-generated content through interactive quizzes where participants identify whether content was created by humans or artificial intelligence.",

      course: "IDG2100: Full-stack Web Development",

      moreText:
        "The platform supports multiple user roles, including visitors, researchers, and administrators. Researchers can create and manage quizzes, analyse participant results, and access demographic insights, while administrators oversee platform management and user accounts. The project includes JWT-based authentication with HttpOnly cookies, protected routes, REST API architecture, Swagger API documentation, and Storybook documentation for reusable React components. The system was built with React, Node.js, Express, and MongoDB.",

      status: "Completed",
    },

    no: {
      title: "AI Literacy Quiz",

      shortDescription:
        "En full-stack webplattform utviklet for å styrke AI-kompetanse gjennom interaktive quiz og analyseverktøy.",

      longDescription:
        "Dette prosjektet ble utviklet som en del av eksamen i IDG2100 Full-stack Web Development ved NTNU. Applikasjonen hjelper brukere med å utvikle forståelse for AI-generert innhold gjennom interaktive quiz der deltakere vurderer om innhold er laget av mennesker eller kunstig intelligens.",

      course: "IDG2100: Full-stack Web Development",

      moreText:
        "Plattformen støtter flere brukerroller, inkludert besøkende, forskere og administratorer. Forskere kan opprette og administrere quiz, analysere deltakerresultater og få innsikt i demografiske data, mens administratorer håndterer brukeradministrasjon og plattformstyring. Prosjektet inkluderer JWT-basert autentisering med HttpOnly cookies, beskyttede ruter, REST API-arkitektur, Swagger-dokumentasjon for API-et og Storybook-dokumentasjon for gjenbrukbare React-komponenter. Systemet ble utviklet med React, Node.js, Express og MongoDB.",

      status: "Fullført",
    },
  },

  extraImages: [
    AIquiz,
    AIquiz1,
    AIquiz2,
    AIquiz3,
    AIquiz4,
    AIquiz5,
    AIquiz6,
    AIquiz7,
    AIquiz8,
    AIquiz9,
    AIquiz10,
    AIquiz11,
    AIquiz12,
    AIquiz13,
  ],
},
  {
  id: "employee-directory",

  image: employeeDir,

  year: "2024",

  github: null,

  demo: null,

  technologies: [
    "PHP",
    "MySQL",
    "SQL",
    "HTML",
    "CSS",
    "XAMPP",
    "Sessions",
    "File Uploads",
  ],

  timeFrame: {
    en: "Oct 2024 - Nov 2024",
    no: "Okt 2024 - Nov 2024",
  },

  features: {
    en: [
      "Secure admin authentication with sessions",
      "CRUD operations for employee management",
      "Employee profile image uploads",
      "Dynamic employee list and detail views",
      "Edit and delete employee functionality",
      "Password hashing with password_hash()",
      "Prepared SQL statements for security",
      "Modular PHP application structure",
      "MySQL database with migration script",
      "Responsive admin interface",
    ],

    no: [
      "Sikker administratorautentisering med sessions",
      "CRUD-operasjoner for administrasjon av ansatte",
      "Opplasting av profilbilder for ansatte",
      "Dynamiske lister og detaljvisninger av ansatte",
      "Funksjonalitet for redigering og sletting",
      "Passordhashing med password_hash()",
      "Prepared statements for SQL-sikkerhet",
      "Modulær struktur i PHP-applikasjonen",
      "MySQL-database med migreringsscript",
      "Responsivt administratorgrensesnitt",
    ],
  },

  languages: {
    en: {
      title: "Employee Directory Management System",

      shortDescription:
        "A PHP and MySQL-based employee management system with secure authentication and CRUD functionality.",

      longDescription:
        "This backend-focused web application was developed as part of the IDG2003 Backend Web Development course. The project allows administrators to securely manage employee records through a complete CRUD workflow, including profile image uploads and dynamic employee views.",

      course: "IDG2003: Backend Web Development",

      moreText:
        "The application includes session-based authentication, password hashing, prepared SQL statements, and modular PHP architecture. Administrators can add, edit, view, and delete employee records stored in a MySQL database. The project also includes database migration scripts, documentation for setup and configuration, and support for secure file uploads through a dedicated uploads directory.",

      status: "Completed",
    },

    no: {
      title: "Employee Directory Management System",

      shortDescription:
        "Et PHP- og MySQL-basert system for administrasjon av ansatte med sikker autentisering og CRUD-funksjonalitet.",

      longDescription:
        "Denne backend-fokuserte webapplikasjonen ble utviklet som del av emnet IDG2003 Backend Web Development. Prosjektet gjør det mulig for administratorer å administrere ansattdata gjennom en komplett CRUD-flyt, inkludert opplasting av profilbilder og dynamiske visninger av ansatte.",

      course: "IDG2003: Backend Web Development",

      moreText:
        "Applikasjonen inkluderer session-basert autentisering, passordhashing, prepared SQL statements og modulær PHP-arkitektur. Administratorer kan opprette, redigere, vise og slette ansatte lagret i en MySQL-database. Prosjektet inkluderer også migreringsscript for databasen, dokumentasjon for oppsett og konfigurering, samt støtte for sikker filopplasting gjennom en dedikert uploads-mappe.",

      status: "Fullført",
    },
  },

  extraImages: [
    employeeDir,
    employee1,
    employee2,
    employee3,
    employee4,
    employee5,
    employee6,
  ],
},
  {
  id: "scrolly-telling",

  image: turningTide,

  year: "2024",

  github:
    "https://github.com/AdvancedCSS2024/idg1292-2024-oblig3-group14",

  demo:
    "https://advancedcss2024.github.io/idg1292-2024-oblig3-group14/",

  technologies: [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "BEM",
    "GSAP",
    "SVG",
    "Intersection Observer",
    "GitHub Pages",
  ],

  timeFrame: {
    en: "Apr 2024 - May 2024",
    no: "Apr 2024 - Mai 2024",
  },

  features: {
    en: [
      "Scrollytelling experience focused on UN Sustainable Development Goals",
      "Animated storytelling with scroll-based interactions",
      "Responsive layout for desktop and mobile devices",
      "SVG graphics, transitions, and CSS animations",
      "Accessibility features including reduced-motion support",
      "Interactive visual sections using JavaScript",
      "Structured CSS architecture with Sass and BEM",
      "Performance optimisation for animations and assets",
      "Deployed with GitHub Pages and collaborative Git workflow",
    ],

    no: [
      "Scrollytelling-opplevelse basert på FNs bærekraftsmål",
      "Animert historiefortelling med scroll-baserte interaksjoner",
      "Responsivt design for desktop og mobile enheter",
      "SVG-grafikk, overganger og CSS-animasjoner",
      "Tilgjengelighetsfunksjoner inkludert støtte for redusert bevegelse",
      "Interaktive visuelle seksjoner med JavaScript",
      "Strukturert CSS-arkitektur med Sass og BEM",
      "Ytelsesoptimalisering for animasjoner og ressurser",
      "Deployet med GitHub Pages og samarbeidsbasert Git-workflow",
    ],
  },

  languages: {
    en: {
      title: "Scrollytelling for Sustainability",

      shortDescription:
        "An interactive scrollytelling experience focused on sustainability and the UN Sustainable Development Goals.",

      longDescription:
        "This project was developed as part of the IDG1292 Advanced CSS course at NTNU. The assignment focused on combining storytelling, animation, and advanced frontend techniques to create an engaging web experience connected to one of the United Nations Sustainable Development Goals.",

      course: "IDG1292: Advanced CSS",

      moreText:
        "The project uses scroll-driven storytelling techniques combined with animations, SVG graphics, transitions, and interactive visual elements to guide users through the narrative. Accessibility and responsiveness were central parts of the implementation, including support for reduced-motion preferences and adaptive layouts across devices. The project was developed collaboratively using Git and GitHub, and deployed with GitHub Pages.",

      status: "Completed",
    },

    no: {
      title: "Scrollytelling for bærekraft",

      shortDescription:
        "En interaktiv scrollytelling-opplevelse med fokus på bærekraft og FNs bærekraftsmål.",

      longDescription:
        "Dette prosjektet ble utviklet som en del av emnet IDG1292 Advanced CSS ved NTNU. Oppgaven fokuserte på å kombinere historiefortelling, animasjon og avanserte frontend-teknikker for å skape en engasjerende webopplevelse knyttet til et av FNs bærekraftsmål.",

      course: "IDG1292: Advanced CSS",

      moreText:
        "Prosjektet benytter scroll-baserte storytelling-teknikker kombinert med animasjoner, SVG-grafikk, overganger og interaktive visuelle elementer for å guide brukeren gjennom fortellingen. Tilgjengelighet og responsivt design var sentrale deler av implementasjonen, inkludert støtte for redusert bevegelse og adaptive layouts på ulike enheter. Prosjektet ble utviklet i samarbeid gjennom Git og GitHub, og deployet med GitHub Pages.",

      status: "Fullført",
    },
  },

  extraImages: [
    turningTide,
    turningtide1,
    turningtide2,
    turningtide3,
    turningtide4,
    turningtide5,
  ],
},
];

export const getProjectById = (projectId: string | undefined) => {
  if (!projectId) return undefined;
  return projects.find((project) => project.id === projectId);
};
