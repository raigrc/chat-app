import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import Socials from "./socials";

const LoginForm = () => {
  return (
    <div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" aria-required>
            Email
          </Label>
          <Input id="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" aria-required>
            Password
          </Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Login</Button>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <span className="text-gray-400">or login with</span>
          <Separator className="flex-1" />
        </div>

        <Socials />
      </form>
    </div>
  );
};

export default LoginForm;
