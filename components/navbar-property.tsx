"use client";
import Logo from "./logo";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import InputForm from "./input-form";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Navbar() {
  const data = useCurrentUser();
  const userId = data?.id;
  return (
    <div className="border-b-[1px] w-full flex justify-center">
      <div className="max-w-[1360px] flex w-full  justify-center md:justify-between h-20 items-center  px-4 sm:px-10 ">
        <Logo />
        <InputForm />
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none hidden md:flex">
            <Avatar>
              {/* <AvatarImage className="bg-gray-500" src="./User.svg" /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {!userId ? (
              <>
                <DropdownMenuItem>
                  <Link href={"/auth/register"}>Sign up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/auth/login"}>Log in</Link>
                </DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem
                className="text-red-400 hover:text-red-500"
                onClick={() => {
                  signOut();
                  redirect("/");
                }}
              >
                Logout
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <Link href={"/auth/login-as-admin"}>Log in as Admin</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
