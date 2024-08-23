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
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

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
    dispatch(authStart());
    try {
      const res = await axios.post(`${apiUri}/api/auth/register`, registerForm);
      const data = res.data;
      console.log(data);
      dispatch(authSuccess());
      router.push("/");
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[450px]">
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
          Already have an account ?{" "}
          <Link href="/login" className="text-blue-500">
            LogIn
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterCard;
