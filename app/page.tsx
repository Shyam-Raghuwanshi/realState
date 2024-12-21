"use client";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import Properties from "@/components/properties";
import { useState } from "react";
import GoogleMap from "@/components/google-map";
import { Button } from "@/components/ui/button";
import Map from "@/components/home-map";

export default function Home() {
  const [isMap, setIsMap] = useState(false);
  function handleSetMap() {
    setIsMap(!isMap);
  }
  return (
    <div className=" w-auto relative">
      <Navbar />
      {!isMap ? (
        <>
          <Properties />
          <BottomNav />
        </>
      ) : (
        <>
          <Map isMap={isMap} />
        </>
      )}
      <div className="w-full flex justify-center items-center absolute bottom-16 z-[9999]">
        <Button className="rounded-full p-6" onClick={handleSetMap}>
          {isMap ? "Show List" : "Show map"}
        </Button>
      </div>
    </div>
  );
}
