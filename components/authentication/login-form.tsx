import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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
      </form>
    </div>
  );
};

export default LoginForm;
