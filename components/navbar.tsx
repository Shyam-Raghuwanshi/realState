"use client"
import Logo from "./logo"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import InputForm from "./input-form"
import Link from "next/link"
import { useCurrentUser } from "@/hooks/use-current-user";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation"

export default function Navbar() {
    const data = useCurrentUser()
    const userId = data?.id
    return (
        <div className="flex justify-center md:justify-between h-20 items-center border-b-[1px] px-2 md:px-16">
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
                    {!userId ? (<>
                        <DropdownMenuItem><Link href={"/auth/signup"}>Sign up</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={"/auth/login"}>Log in</Link></DropdownMenuItem>
                    </>) :
                        <DropdownMenuItem className="text-red-400 hover:text-red-500" onClick={() => {
                            signOut()
                            redirect("/")
                        }}>Logout</DropdownMenuItem>
                    }
                    <DropdownMenuItem><Link href={"/login-as-admin"}>Log in as Admin</Link></DropdownMenuItem>
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
        </div >
    )
}