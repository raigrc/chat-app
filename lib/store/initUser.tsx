"use client";
import { User } from "@supabase/supabase-js";
import React, { useEffect, useRef } from "react";
import { useUserStore } from "./user";

const InitUser = ({ user }: { user: User | null }) => {
  const init = useRef(false);

  useEffect(() => {
    if (!init.current) {
      useUserStore.setState({ user });
    }

    init.current = true;
  }, []);
  return <></>;
};

export default InitUser;
