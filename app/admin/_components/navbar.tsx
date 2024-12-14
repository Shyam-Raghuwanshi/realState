"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
    return (
        <header>
            <nav className="border-b-[1px] flex justify-between items-center p-4 w-full shadow-sm sticky top-0 left-0 mb-10">
                <div className="flex gap-x-2">
                    <Link href={"/admin"}><Button variant={"link"}>Dashboard</Button></Link>
                    <Link href={"/admin/upload"}><Button variant={"link"}>Add Property</Button></Link>
                </div>
                <UserButton />
            </nav>
        </header>
    )
}
