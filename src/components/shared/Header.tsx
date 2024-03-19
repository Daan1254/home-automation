import { FC } from "react";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { useRouter } from "next/router";


type Props = {
  backButton?: boolean
}
const Header: FC<Props> = ({ backButton = false }) => {
  const router = useRouter();
  return (
    <header className='h-20 w-full container mx-auto flex flex-row justify-between items-center'>
      <div>
        <div className='flex flex-row gap-2 items-center'>
          {backButton && (
            <button
              onClick={() => router.push('/')}
              className='text-gray-500'
            >
              Back
            </button>
          )}
          <h1 className='text-xl '>Daan&#x27;s Home</h1>
        </div>
        <p className='text-gray-700'>Smart Home Automation</p>
      </div>
      <ThemeSwitcher/>
    </header>
  );
}


export default Header;