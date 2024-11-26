"use client";
import { signInWithGithub } from "@/actions/authentication";
import { createClient } from "@/lib/supabase/client";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <button onClick={signInWithGithub}>Log in with GitHub</button>
    </>
  );
};

export default LoginPage;
