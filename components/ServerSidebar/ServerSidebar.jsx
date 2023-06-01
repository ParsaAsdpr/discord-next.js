import React from "react";
import ServerInfo from "./ServerInfo";
import BoostGoal from "./BoostGoal";
import BrowseChannels from "./BrowseChannels";
import ChannelList from "./ChannelList";

const ServerSidebar = ({
  children,
  serverName,
  isVerified,
  isDiscoerable,
  boosters,
}) => {
  return (
    <div className="bg-[#2F3136] h-screen w-[275px] py-3 px-0.5">
      <div className="px-4 flex flex-col">
        <ServerInfo
          isVerified={isVerified}
          serverName={serverName}
          isDiscoerable={isDiscoerable}
        />
        <div className="mt-3">
          <BoostGoal boosters={boosters} />
        </div>
      </div>
      <div className=" mt-3 px-1.5">
        <BrowseChannels />
      </div>
      <ChannelList categoryName={"welcome / information"} />
      <ChannelList categoryName={"tournament section"} />
      <ChannelList categoryName={"general"} />
    </div>
  );
};

export default ServerSidebar;
