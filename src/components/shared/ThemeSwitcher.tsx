import { FC } from "react";
import { Moon } from "@/components/icons/Moon";
import { Sun } from "@/components/icons/Sun";

export const ThemeSwitcher: FC = () => {
  return (
    <div className='flex flex-row justify-center items-center space-x-4'>
      <Moon className='w-8 h-8'/>
      <Sun className='w-8 h-8'/>
    </div>
  );
}