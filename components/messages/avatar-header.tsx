import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson } from "react-icons/io";

const AvatarHeader = ({ src }: { src: string | undefined }) => {
  return (
    <Avatar>
      <AvatarImage src={src} />
      <AvatarFallback>
        <IoMdPerson />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarHeader;
