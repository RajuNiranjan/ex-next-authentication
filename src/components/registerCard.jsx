import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const RegisterCard = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputText = (e) => {
    const { id, value } = e.target;
    setRegisterForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = (e) => {
    e.preventDefault();
    try {
      console.log(registerForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="bg-none border-none">
      <CardHeader className="text-center font-bold text-xl">
        Register
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmitRegisterForm}
          className="flex flex-col gap-4"
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              value={registerForm.email}
              onChange={handleChangeInputText}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Your password"
              value={registerForm.password}
              onChange={handleChangeInputText}
            />
          </div>
          <Button type="submit" className="font-bold text-lg">
            Register
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center text-sm">
        Don&apos;t have an account ?
      </CardFooter>
    </Card>
  );
};

export default RegisterCard;
