import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const LogInCard = () => {
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeInputText = (e) => {
    const { id, value } = e.target;
    setLogInForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitLogInForm = (e) => {
    e.preventDefault();
    try {
      console.log(logInForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="bg-none border-none">
      <CardHeader className="text-center font-bold text-xl">Log In</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmitLogInForm} className="flex flex-col gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="john@gmail.com"
              value={logInForm.email}
              onChange={handleChangeInputText}
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Your password"
              value={logInForm.password}
              onChange={handleChangeInputText}
            />
          </div>
          <Button type="submit" className="font-bold text-lg">
            Log In
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center text-sm">
        Don&apos;t have an account ?
      </CardFooter>
    </Card>
  );
};

export default LogInCard;
