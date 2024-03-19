import { FC, useState } from "react";

export const ColorPicker: FC = () => {
  const currentColor = useState<string>('#000');
  return (
    <div className='rounded-full p-5 overflow-hidden flex items-center justify-center'>
      <input
        type='color'
        className='h-80 w-80 rounded-full'
      />
    </div>
  );
}

export default ColorPicker;
