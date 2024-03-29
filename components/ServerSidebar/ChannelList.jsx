import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChannelButton from "./ChannelButton";

const ChannelList = ({ categoryName }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <ul className={`my-5 select-none ${isActive ? "" : "h-5 overflow-hidden"} pr-1.5`}>
      <div
        className="flex gap-0.5 text-[11.35px] font-[500] items-center cursor-pointer default-color hover:text-slate-200 duration-50 mb-1"
        onClick={handleClick}
      >
        <MdKeyboardArrowRight
          className={`${isActive && "rotate-90"} duration-100 text-[13px]`}
        />
        {categoryName.toUpperCase()}
      </div>
      <ChannelButton channelName='community' />
      <ChannelButton channelName='community' />
      <ChannelButton channelName='community' />
      <ChannelButton channelName='community' />
      <ChannelButton channelName='community' />
      <ChannelButton channelName='community' />
    </ul>
  );
};

export default ChannelList;
