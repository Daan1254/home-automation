import { NextPage } from "next";
import Header from "@/components/shared/Header";
import ColorPicker from "@/components/detail/ColorPicker";

const DetailPage: NextPage = () => {
  return <>
    <Header backButton={true}/>

    <div className='flex flex-row container m-auto w-full'>
      <div className='w-full '>h</div>
      <div className='w-full '>
        <ColorPicker/>
      </div>
      <div className='w-full '></div>
    </div>
  </>
}

export default DetailPage;