"use client";
import React from "react";
import { useMessage } from "@/lib/store/messages";
import Message from "./message";

const ListMessages = () => {
  const messages = useMessage((state) => state.messages);
  return (
    <div className="flex h-full flex-col overflow-auto p-2">
      <div className="flex-1"></div>
      <div className="space-y-6">
        {messages?.map((message, index) => {
          return <Message message={message} key={index} />;
        })}
      </div>
    </div>
  );
};

export default ListMessages;
