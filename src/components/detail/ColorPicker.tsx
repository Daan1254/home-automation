import { FC, useEffect, useState } from "react";

export const ColorPicker: FC = () => {
  const [currentColor, setColor] = useState<string>('#000');

  useEffect(() => {
    console.log('Color changed to:', currentColor)
    document.getElementById('colorRound')?.style.setProperty('background-color', currentColor);
  }, [currentColor]);
  return (
    <div className='rounded-full relative  p-5 overflow-hidden flex items-center justify-center flex-col'>
      <div id='colorRound' className={`w-80 h-80  rounded-full bg-${currentColor}`}></div>
      <input
        type='color'
        value={currentColor}
        className='h-full w-full opacity-0 absolute'
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
    </div>

  );
}

export default ColorPicker;
