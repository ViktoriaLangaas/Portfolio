import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 rounded-full size-12 bg-white dark:bg-gray-800 border-2 shadow-lg cursor-pointer"
    >
      {theme === "dark" ? (
        <Sun className="size-5 text-yellow-500" />
      ) : (
        <Moon className="size-5 text-blue-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}