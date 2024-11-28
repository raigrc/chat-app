import ChatHeader from "@/components/messages/header";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const MessagePage = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error("No user data");
  }
  console.log(user);

  return (
    <div>
      <ChatHeader />
      {user?.user_metadata.user_name}
    </div>
  );
};

export default MessagePage;
