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

const Register = () => {
  const [registerForm, setRegisterForm] = React.useState({
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
    setRegisterForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitRegisterForm = async (e) => {
    e.preventDefault();

    if (!registerForm.email || !registerForm.password || !registerForm.userName)
      return;

    dispatch(authStart());

    try {
      const response = await axios.post(
        `${apiUri}/api/auth/register`,
        registerForm
      );

      const data = response.data;
      console.log(data);
      localStorage.setItem(data.token);
      router.push("/");
      dispatch(authSuccess(data.user));
    } catch (error) {
      console.log(error);
      dispatch(authFailure(error));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[450px]">
        <CardHeader className="text-4xl text-center font-bold">
          Register
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitRegisterForm} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <Label className="text-sm">User Name</Label>
              <Input
                type="text"
                id="userName"
                placeholder="John"
                value={registerForm.userName}
                onChange={handleChangeInputText}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-sm">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@gmail.com"
                value={registerForm.email}
                onChange={handleChangeInputText}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label className="text-sm">Password</Label>
              <Input
                type="password"
                id="password"
                value={registerForm.password}
                onChange={handleChangeInputText}
              />
            </div>
            <Button type="submit" className="w-full">
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <small>
            Already have an account ? <Link href="/login">LogIn</Link>
          </small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
