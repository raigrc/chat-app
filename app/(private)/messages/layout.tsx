import React from "react";
import ChatHeader from "@/components/messages/header";
import { createClient } from "@/lib/supabase/server";
import InitUser from "@/lib/store/initUser";

const MessagesLayout = async ({
  chats,
  conversation,
}: {
  chats: React.ReactNode;
  conversation: React.ReactNode;
}) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return (
    <div className="flex h-screen w-full flex-col">
      <InitUser user={user} />
      <ChatHeader user={user} />
      <div className="flex h-full overflow-hidden">
        <div className="w-1/5 border-r-2">{chats}</div>
        <div className="w-4/5">{conversation}</div>
      </div>
    </div>
  );
};

export default MessagesLayout;
