import { NextPage } from "next";
import Header from "@/components/shared/Header";
import ColorPicker from "@/components/detail/ColorPicker";
import { Power } from "@/components/icons/Power";
import { useState } from "react";

const DetailPage: NextPage = () => {
  const [isOn, toggle] = useState<boolean>(false);
  return <>
    <Header backButton={true}/>

    <div className='flex flex-row container m-auto w-full'>
      <div className='w-full '></div>
      <div className='w-full '>
        <ColorPicker/>
      </div>
      <div className='w-full '></div>
    </div>

    <div className='w-full flex items-center justify-center mt-24'>
      <Power
        clickHandler={() => toggle((prev) => !prev)}
        className={`w-24 h-24 cursor-pointer transition-colors duration-300 ${isOn ? 'text-blue-500' : 'text-black'}`}
      />
    </div>
  </>
}

export default DetailPage;