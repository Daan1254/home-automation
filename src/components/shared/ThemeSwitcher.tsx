import { FC } from "react";
import { Moon } from "@/components/icons/Moon";

export const ThemeSwitcher: FC = () => {
  return (
    <div className='mr-4'>
      <Moon className='w-6 h-6 sm:w-8 sm:h-8'/>
      {/*<Sun className='w-12 h-12 sm:w-8 sm:h-8'/>*/}
    </div>
  );
}