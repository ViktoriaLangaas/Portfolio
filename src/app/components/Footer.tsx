import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const translations = {
    en: {
      builtWith: "Built with React and Tailwind CSS.",
    },
    no: {
      builtWith: "Bygget med React og Tailwind CSS.",
    },
  };

  const t = translations[language];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 dark:text-gray-500">
          © {currentYear} Viktoria Brodshaug Langaas. {t.builtWith}
        </p>
        <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
        </p>
      </div>
    </footer>
  );
}