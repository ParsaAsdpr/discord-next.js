import Image from "next/image";
import React from "react";

const MessageContainer = ({ name, avatar, time, children }) => {
  return (
    <div className="flex flex-row gap-4 w-full hover:bg-[#32353B] px-5 py-1">
      <div className="rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
        <Image src={avatar} alt="pfp" width={40} height={40} />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row items-center gap-3">
          <h6 className="text-[#eee] hover:underline font-medium cursor-pointer leading-[1px]">
            {name}
          </h6>
          <p className="text-[#a5a5a5] text-xs">{time}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MessageContainer;
