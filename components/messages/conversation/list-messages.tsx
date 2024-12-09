"use client";
import React, { useEffect, useRef } from "react";
import { IMessage, useMessage } from "@/lib/store/messages";
import Message from "./message";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

const ListMessages = () => {
  const scrollRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const { messages, addMessage, optimisticIds, deleteMessage, editMessage } = useMessage((state) => state);
  const supabase = createClient();
  useEffect(() => {
    const channel = supabase
      .channel("room1")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        async (payload) => {
          if (!optimisticIds.includes(payload.new.id)) {
            console.log("Change received!", payload);
            const { error, data } = await supabase
              .from("users")
              .select("*")
              .eq("id", payload.new.sent_by)
              .single();

            if (error) {
              toast.error(error.message);
            } else {
              const newMessage = { ...payload.new, users: data };

              addMessage(newMessage as IMessage);
            }
          }
        },
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "messages" },
        (payload) => {
          console.log("Change received!", payload);
          editMessage(payload.new as IMessage)
        },
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "messages" },
        (payload) => {
          console.log("Change received!", payload);
          deleteMessage(payload.old.id)
          
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [messages]);

  useEffect(()=>{
    const scrollContainer = scrollRef.current

    if(scrollContainer) {
      scrollContainer.scrollTop = scrollContainer.scrollHeight
    }
  },[messages])

  return (
    <div className="flex h-full flex-col overflow-auto p-2" ref={scrollRef}>
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
