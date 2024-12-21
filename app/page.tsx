"use client";
import Navbar from "@/components/navbar";
import BottomNav from "@/components/bottom-nav";
import Properties from "@/components/properties";
import { useCallback, useEffect, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import Map from "@/components/home-map";
import { getPropertyDetails } from "@/actions/handleProperty";

export default function Home() {
  const [isMap, setIsMap] = useState(false);
  function handleSetMap() {
    setIsMap((prev) => !prev);
  }

  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<any>([]);

  const loadData = useCallback(() => {
    startTransition(() => {
      (async () => {
        try {
          const response = await getPropertyDetails();
          setData(response);
        } catch (error) {
          setData([]);
        }
      })();
    });
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className=" w-auto relative">
      <Navbar />
      {!isMap ? (
        <>
          <Properties />
          <BottomNav />
        </>
      ) : (
        <Map data={data} isPending={isPending} />
      )}

      <Button
        className="rounded-full p-6 z-[9999] absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={handleSetMap}
      >
        {isMap ? "Show List" : "Show Map"}
      </Button>
    </div>
  );
}
