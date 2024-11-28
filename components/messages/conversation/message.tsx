import { IMessage } from "@/lib/store/messages";
import React from "react";
import AvatarHeader from "../avatar-header";

const Message = ({ message }: { message: IMessage }) => {
  return (
    <div className="flex gap-2">
      <AvatarHeader src={message.users?.avatar_url} />
      <div>
        <div className="flex items-center gap-1">
          <h1 className="font-bold">{message.users?.display_name}</h1>
          <h1 className="text-sm text-gray-400">
            {new Date(message.created_at).toDateString()}
          </h1>
        </div>
        <p className="text-gray-300">{message.message}</p>
      </div>
    </div>
  );
};

export default Message;
