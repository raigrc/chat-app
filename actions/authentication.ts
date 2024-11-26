"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const signInWithGithub = async () => {
  const supabase = createClient();
  const { data, error } = await (
    await supabase
  ).auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: " http://localhost:3000/auth/callback",
    },
  });

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
};

export const signOut = async () => {
  const supabase = createClient();
  const { error } = await (await supabase).auth.signOut();
};
