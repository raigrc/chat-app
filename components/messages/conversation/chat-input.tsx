"use client";
import { Input } from "@/components/ui/input";
import { IMessage, useMessage } from "@/lib/store/messages";
import { useUserStore } from "@/lib/store/user";
import { createClient } from "@/lib/supabase/client";
import React from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const ChatInput = () => {
  const user = useUserStore((state) => state.user);
  const addMessage = useMessage((state) => state.addMessage);
  const setOptimisticIds = useMessage((state) => state.setOptimisticIds);
  const supabase = createClient();
  const handleSendMessage = async (message: string) => {
    if (message.trim()) {
      const newMessage = {
        id: uuidv4(),
        message,
        sent_by: user?.id,
        is_edit: false,
        created_at: new Date().toISOString(),
        users: {
          id: user?.id,
          avatar_url: user?.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          display_name: user?.user_metadata.user_name,
        },
      };
      const { error } = await supabase.from("messages").insert({ message });

      addMessage(newMessage as IMessage);
      setOptimisticIds(newMessage.id)

      if (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Message cannot be empty!");
    }
  };
  return (
    <div className="p-5">
      <Input
        placeholder="send message..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
};

export default ChatInput;
