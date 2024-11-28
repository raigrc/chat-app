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
import { User } from "@supabase/supabase-js";

const ChatHeader = ({ user }: { user: User | null }) => {
  return (
    <div className="flex min-h-16 w-full items-center justify-between border-b-2 px-4">
      <h1>Logo Ipsum</h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <AvatarHeader src={user?.user_metadata.avatar_url} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={signOut}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChatHeader;
