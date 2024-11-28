"use client";
import React from "react";
import AvatarHeader from "./avatar-header";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/actions/authentication";

const ChatHeader = ({
  avatar,
  fallback,
  email,
}: {
  avatar: string;
  fallback: string;
  email: string | undefined;
}) => {
  return (
    <div className="flex h-16 w-full items-center justify-between border-b-2 px-4">
      <h1>Logo Ipsum</h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <AvatarHeader avatar={avatar} fallback={fallback} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChatHeader;
