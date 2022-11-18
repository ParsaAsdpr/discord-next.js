import React from "react";

const ServerButton = ({serverName}) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  let words = serverName.split(' ');

  return (
    <div
      className={`${
        isActive ? "active bg-[#5865F2]" : 'bg-[#36393F]'
      } side-icon hover:bg-[#5865F2] text-white cursor-pointer py-3 px-2.5 w-full duration-200 flex flex-row justify-center items-center`}
      onClick={handleClick}
    >
      <p className="overflow-hidden">{words.map(i => (i.split('')[0]))}</p>
    </div>
  );
};

export default ServerButton;
