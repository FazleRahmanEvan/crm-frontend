import { useThemeContext } from "../contexts/ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
      title="Toggle Dark Mode"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeToggle;
