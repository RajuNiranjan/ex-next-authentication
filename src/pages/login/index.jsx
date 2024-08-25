import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import {
  authFailure,
  authStart,
  authSuccess,
} from "@/store/actions/auth.action";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const LogIn = () => {
  const [logInFrom, setLogInForm] = React.useState({
    userName: "",
    email: "",
    password: "",
  });
  const apiUri = process.env.NEXT_PUBLIC_API_URI;
  const dispatch = useDispatch();
  const router = useRouter();
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

    if (!logInFrom.email || !logInFrom.password) return;

    dispatch(authStart());

    try {
      const response = await axios.post(`${apiUri}/api/auth/login`, logInFrom);
      const data = response.data;
      console.log(data);
      router.push("/");
      dispatch(authSuccess(data.token));
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[450px]">
        <CardHeader className="text-4xl text-center font-bold">
          LogIn
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitLogInForm} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@gmail.com"
                value={logInFrom.email}
                onChange={handleChangeInputText}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-sm">Password</Label>
              <Input
                type="password"
                id="password"
                value={logInFrom.password}
                onChange={handleChangeInputText}
              />
            </div>
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Log In"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <small>
            Don&apos;t have an account ? <Link href="/register">Register</Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LogIn;
