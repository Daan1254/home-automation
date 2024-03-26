import { FC } from "react";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { useRouter } from "next/router";
import { ArrowBack } from "@/components/icons/ArrowBack";


type Props = {
  backButton?: boolean
}
const Header: FC<Props> = ({ backButton = false }) => {
  const router = useRouter();
  return (
    <header className='h-20 w-full mx-2 container sm:mx-auto flex flex-row justify-between items-center'>
      <div className='flex flex-row items-center justify-center gap-2'>
        {backButton && (
          <button
            onClick={() => router.push('/')}
            className='text-gray-500'
          >
            <ArrowBack className="w-6 h-6 dark:text-white"/>
          </button>
        )}
        <div>
          <div className='flex flex-row gap-2 items-center'>
            <h1 className='text-xl'>Daan&#x27;s Home</h1>
          </div>
          <p className='text-gray-700 dark:text-gray-200'>Smart Home Automation</p>
        </div>
      </div>
      <ThemeSwitcher/>
    </header>
  );
}


export default Header;