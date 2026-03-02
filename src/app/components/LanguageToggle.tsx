import { Button } from "./ui/button";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "no" : "en")}
      className="fixed top-6 right-24 z-50 rounded-full px-4 py-2 bg-white dark:bg-gray-800 border-2 shadow-lg font-semibold cursor-pointer"
    >
      {language === "en" ? "NO" : "EN"}
    </Button>
  );
}