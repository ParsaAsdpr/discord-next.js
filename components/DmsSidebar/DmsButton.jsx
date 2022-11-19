import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DmsButton = ({text, svg}) => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = () => {
      setActive(!isActive);
    };
  
    return (
        <Link className={`${
            isActive ? "active bg-[#4f545c99]" : ''
          } py-2.5 px-4 items-center flex flex-row gap-4 hover:bg-[#4f545c69] rounded-md text-stone-100 font-medium dms-button`} onClick={handleClick} href='#'>
            <span className='h-full'>{svg}</span>
            <p>{text}</p>
        </Link>
    );
};

export default DmsButton;