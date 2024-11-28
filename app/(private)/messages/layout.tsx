import React from "react";
import ChatHeader from "@/components/messages/header";
import { createClient } from "@/lib/supabase/server";

const MessagesLayout = async ({
  chat_head,
}: {
  chat_head: React.ReactNode;
}) => {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error("User not found", error);

  return (
    <>
      <ChatHeader
        avatar={user?.user_metadata.avatar_url}
        fallback={user?.user_metadata.user_name}
        email={user?.email}
      />
      <div className="flex w-full items-center justify-between">
        {chat_head}
      </div>
    </>
  );
};

export default MessagesLayout;
