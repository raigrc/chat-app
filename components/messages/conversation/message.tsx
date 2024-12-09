import { IMessage, useMessage } from "@/lib/store/messages";
import React from "react";
import AvatarHeader from "../avatar-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GoKebabHorizontal } from "react-icons/go";
import { useUserStore } from "@/lib/store/user";
import { DeleteAlert, EditAlert } from "./message-actions";

const Message = ({ message }: { message: IMessage }) => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="flex gap-2">
      <AvatarHeader src={message.users?.avatar_url} />

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <h1 className="font-bold">{message.users?.display_name}</h1>
            <h1 className="text-sm text-gray-400">
              {new Date(message.created_at).toDateString()}
            </h1>
            {message.is_edit && <h1 className="text-sm text-gray-400">edited</h1>}
          </div>

          {message.users?.id == user?.id && <MessageMenu message={message} />}
        </div>
        <p className="text-gray-300">{message.message}</p>
      </div>
      <DeleteAlert />
      <EditAlert />
    </div>
  );
};

const MessageMenu = ({ message }: { message: IMessage }) => {
  const setMessageAction = useMessage((state) => state.setMessageAction);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <GoKebabHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Action</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-edit")?.click();
            setMessageAction(message);
          }}
        >
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            document.getElementById("trigger-delete")?.click();
            setMessageAction(message);
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Message;
