import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  authFailure,
  authStart,
  authSuccess,
} from "@/store/Actions/authSlice.action";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const LogInCard = () => {
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  const distpatch = useDispatch();
  const router = useRouter();
  const apiUri = process.env.NEXT_PUBLIC_API_URI;
  const { loading } = useSelector((state) => state.auth);

  const handleChangeInputText = (e) => {
    const { id, value } = e.target;
    setLogInForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitLogInForm = async (e) => {
    e.preventDefault();
    if (!logInForm.email || !logInForm.password) return;
    distpatch(authStart());
    try {
      const res = await axios.post(`${apiUri}/api/auth/login`, logInForm);
      const data = res.data;
      console.log(data);
      distpatch(authSuccess());
      router.push("/");
    } catch (error) {
      console.log(error);
      distpatch(authFailure(error));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[450px]">
        <CardHeader className="text-center font-bold text-xl">
          Log In
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmitLogInForm}
            className="flex flex-col gap-4"
          >
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
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center text-sm">
          Don&apos;t have an account ?{" "}
          <Link href="/register" className="text-blue-500">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogInCard;
