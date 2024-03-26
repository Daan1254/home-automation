import { FC } from "react";
import { Moon } from "@/components/icons/Moon";
import { useTheme } from "next-themes";
import { Sun } from "@/components/icons/Sun";

export const ThemeSwitcher: FC = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;


  return (
    <div
      className='mr-4'
      onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")}
    >
      {theme === "dark" ? (
        <Sun className='w-12 h-12 sm:w-8 sm:h-8'/>
      ) : (
        <Moon className='w-6 h-6 sm:w-8 sm:h-8'/>
      )}
    </div>
  );
}