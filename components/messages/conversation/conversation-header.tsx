import React from "react";
import AvatarHeader from "../avatar-header";

const ConversationHeader = () => {
  return (
    <div className="flex items-center space-x-2 p-4">
      <AvatarHeader src="https://github.com/shadcn.png" />
      <h1>CHISMOSA</h1>
      <div className="flex items-center space-x-1">
        <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
        <span className="text-xs">Online</span>
      </div>
    </div>
  );
};

export default ConversationHeader;
