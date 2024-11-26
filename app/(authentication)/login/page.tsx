import CardWrapper from "@/components/authentication/card-wrapper";
import LoginForm from "@/components/authentication/login-form";
import React from "react";

const LoginPage = () => {
  return (
    <div className="grid h-screen w-full place-items-center">
      <CardWrapper title="Login" description="Welcome back!">
        <LoginForm />
      </CardWrapper>
    </div>
  );
};

export default LoginPage;
