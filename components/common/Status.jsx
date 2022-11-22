import React from "react";

const Status = ({ status }) => {
  let statusClass = "";
  switch (status) {
    case "online":
      statusClass = "bg-[#3ba55d] p-[5px]";
      break;
    case "offline":
      statusClass = "bg-[#747F8D] p-[2.8px]";
      break;
    default:
      statusClass = "bg-[#747F8D] p-[2.8px]";
  }

  return (
    <div
      className={`rounded-full relative overflow-hidden ${statusClass} flex items-center justify-center`}
    >
      {status === "offline" && (
          <div className="bg-[#333] p-[2.7px] rounded-full"></div>
        )}
    </div>
  );
};

export default Status;
