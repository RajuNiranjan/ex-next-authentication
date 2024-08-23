import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import RegisterCard from "./registerCard";
import LogInCard from "./loginCard";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 bg-white h-20 shadow-xl z-50 sticky top-0 ">
      <div>
        <h1>eComm</h1>
      </div>
      <div></div>
      <div className="flex gap-4 items-center">
        <Dialog>
          <DialogTrigger>
            <Button>Login</Button>
          </DialogTrigger>
          <DialogContent>
            <LogInCard />
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button className="bg-transparent text-black border hover:text-white hover:border-black transition-all duration-500">
              Register
            </Button>
          </DialogTrigger>
          <DialogContent>
            <RegisterCard />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default NavBar;
