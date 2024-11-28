import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ChatHeader = ({
  avatar,
  fallback,
}: {
  avatar: string;
  fallback: string;
}) => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-2 px-4">
      <h1>Logo Ipsum</h1>
      <Avatar>
        <AvatarImage src={avatar} />
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ChatHeader;
