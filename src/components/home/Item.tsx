import { FC, useState } from "react";
import { Bulb } from "@/components/icons/Bulb";
import { Power } from "@/components/icons/Power";
import Link from "next/link";

export type ItemType = {
  id: number;
  name: string;
  status: boolean;
}

export const Item: FC<ItemType> = ({ status, name, id }) => {
  const [isOn, toggle] = useState<boolean>(status);

  return (
    <Link href={`/${id}`} className='h-72 w-full shadow-lg bg-gray-50 rounded flex flex-col mt-10 dark:bg-[#353b48]'>
      <div className='h-2/3 flex items-center text-gray-500 justify-center gap-5 flex-col'>
        <Bulb className='w-24 h-24 dark:text-white'/>
        <p className='dark:text-white font-bold '>{name}</p>
      </div>
      <div className='h-1/3 flex justify-center'>
        <Power
          clickHandler={() => toggle((prev) => !prev)}
          className={`w-10 h-10 cursor-pointer transition-colors duration-300 ${isOn ? 'text-blue-500' : 'text-black dark:text-white'}`}
        />
      </div>
    </Link>
  )
}