import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  authFailure,
  authStart,
  authSuccess,
} from "@/store/Actions/authSlice.action";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";

const RegisterCard = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const apiUri = process.env.NEXT_PUBLIC_API_URI;
  const { loading } = useSelector((state) => state.auth);
  const router = useRouter();

  const handleChangeInputText = (e) => {
    const { id, value } = e.target;

    setRegisterForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = async (e) => {
    e.preventDefault();
    if (!registerForm.email || !registerForm.password) return;
    try {
      const res = await axios.post(`${apiUri}/api/auth/register`, registerForm);
      const data = res.data;
      console.log(data);
      router.push("/");
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
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Register"
            )}
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
