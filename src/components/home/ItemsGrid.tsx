import { FC } from "react";
import { Item, ItemType } from "@/components/home/Item";


const items: ItemType[] = [
  {
    id: 1,
    status: false,
    name: 'Living Room'
  }
]


export const ItemsGrid: FC = () => {
  return (
    <main
      className='container max-h-[900px] overflow-y-scroll mb-10 mx-auto w-full gap-8 grid grid-cols-5 auto-rows-auto'>
      {items.map((item) => (
        <Item key={item.id} {...item}/>
      ))}
    </main>
  )
}