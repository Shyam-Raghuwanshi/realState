import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import PropertyCard from "@/components/property-card";
import Properties from "@/components/properties";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  
  return (
    <>
      <Navbar />
      <Properties/>
      <BottomNav />
    </>
  )
}
