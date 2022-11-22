import Image from "next/image";
import React, { useRef } from "react";

const ChatContainer = ({ mutualServers, name, avatar, children }) => {
  const bottomRef = useRef(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, []);
  return (
    <div className="h-full relative">
      <div className="absolute bottom-0 left-0 w-full pb-5 overflow-y-scroll max-h-full chat-container">
        <div className="flex flex-col px-5">
          <div className="rounded-full w-20 h-20 overflow-hidden">
            <Image src={avatar} alt="pfp" width={80} height={80} />
          </div>
          <h1 className="text-3xl py-3 font-bold text-white">{name}</h1>
          <p className="text-[#a5a5a5] text-sm">
            This is the beginning of your direct message history with{" "}
            <b>@{name}</b>{" "}
          </p>
          <div className="flex flex-row gap-4 items-center mt-4">
            <p className="text-[#a5a5a5] text-sm">
              {mutualServers} Mutual Server
            </p>
            <p className="text-[#8383835e] font-bold text-sm">•</p>
            <button className="bg-[#88888857] text-[#eee] font-medium px-3 rounded-sm">
              Block
            </button>
          </div>
        </div>
        {children && <div className="mt-5">{children}</div>}
        <div ref={bottomRef}></div>
      </div>
    </div>
  );
};

export default ChatContainer;
