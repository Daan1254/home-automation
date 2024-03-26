import { NextPage } from "next";
import Header from "@/components/shared/Header";
import ColorPicker from "@/components/detail/ColorPicker";
import { Power } from "@/components/icons/Power";
import { useEffect, useState } from "react";

const DetailPage: NextPage = () => {
  const [value, setValue] = useState(50);
  const [isOn, toggle] = useState<boolean>(false);

  useEffect(() => {
    const px = (value * 150) / 100;
    document.getElementById('slider')?.style.setProperty('height', `${px}px`);
  }, [value])
  return <>
    <Header backButton={true}/>

    <div className='flex flex-row container m-auto w-full'>
      <div className='w-full '></div>
      <div className='w-full '>
        <ColorPicker/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <div className='w-full h-max relative flex items-center  justify-center'>
          <input type='range' onChange={(element) => setValue(parseInt(element.target.value))}
            className='-rotate-90 slider rounded'/>
          <div id='slider'
            className='absolute bottom-0  rounded h-[150px] pointer-events-none   bg-blue-500  z-10 w-[150px]'></div>
        </div>
      </div>
    </div>

    <div className='w-full flex items-center justify-center mt-24'>
      <Power
        clickHandler={() => toggle((prev) => !prev)}
        className={`w-24 h-24 cursor-pointer transition-colors  duration-300 ${isOn ? 'text-blue-500' : 'text-black dark:text-white'}`}
      />
    </div>
  </>
}

export default DetailPage;