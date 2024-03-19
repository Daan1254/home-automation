import Header from "@/components/shared/Header";
import { NextPage } from "next";
import { ItemsGrid } from "@/components/home/ItemsGrid";


const Home: NextPage = () => {
  return <>
    <Header/>
    <ItemsGrid/>
  </>;
}


export default Home;
