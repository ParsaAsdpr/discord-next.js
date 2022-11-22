import Image from "next/image";
import Link from "next/link";
import React from "react";

const DmContact = ({name, avatar, id}) => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = () => {
      setActive(!isActive);
    };
  return (
    <div className="w-full">
      <Link
        className={`${
          isActive ? "active bg-[#4f545c99]" : ""
        } py-1.5 px-3 items-center flex flex-row gap-4 hover:bg-[#4f545c69] w-full rounded-md text-stone-100 font-medium dms-button`}
        onClick={handleClick}
        href={`/dm/${id}`}
      >
        <span className="h-full"><Image className="rounded-full" alt='pfp' src={avatar} width={32} height={32} /></span>
        <p className="overflow-ellipsis whitespace-nowrap overflow-hidden w-3/4">{name}</p>
      </Link>
    </div>
  );
};

export default DmContact;
