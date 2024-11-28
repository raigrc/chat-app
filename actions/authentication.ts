"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const signInWithGithub = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
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
