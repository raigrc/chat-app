"use client";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AuthLayout = ({ children }: { readonly children: React.ReactNode }) => {
  const router = useRouter();
  const supabase = createClient();
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (user) {
        router.push("/messages");
      }
    };
    checkSession();
  }, [supabase, router]);
  return <>{children}</>;
};

export default AuthLayout;
