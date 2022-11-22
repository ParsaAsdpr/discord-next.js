import Link from "next/link";
import React from "react";
import ChatSearchBox from "../common/ChatSearchBox";
import HelpIcon from "../common/Icons/HelpIcon";
import InboxIcon from "../common/Icons/InboxIcon";
import NewGroupIcon from "../common/Icons/NewGroupIcon";
import Status from "../common/Status";
import RightSide from "../Friends/RightSide";

const DmsHeader = ({ channel }) => {
  return (
    <div className="w-full py-2 px-4 flex flex-row justify-between items-center shadow-[0_1px_0_#202225ee,0_2px_0_#00000001] ">
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-2 items-center pr-4 border-opacity-10">
          <div className="text-[#eee] font-bold text-[1.06rem] flex flex-row gap-3 items-center">
            <span className="text-2xl text-[#919191] font-medium">@</span>
            <h1>{channel}</h1>
            <Status status={'online'} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <ChatSearchBox />
        <RightSide url="#" icon={<InboxIcon />} />
        <RightSide url="#" icon={<HelpIcon />} />
      </div>
    </div>
  );
};

export default DmsHeader;
