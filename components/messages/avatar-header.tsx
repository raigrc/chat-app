import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarHeader = ({
  avatar,
  fallback,
}: {
  avatar: string;
  fallback: string;
}) => {
  return (
    <Avatar>
      <AvatarImage src={avatar} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarHeader;
