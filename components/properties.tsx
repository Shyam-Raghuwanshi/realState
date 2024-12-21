"use client";
import { useCallback, useEffect, useState, useTransition } from "react";
import PropertyCard from "./property-card";
import { getPropertyDetails } from "@/actions/handleProperty";
import { CardSkeleton } from "./card-skeleton";

export default function Properties() {
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

  if (isPending) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto mx-auto gap-5 gap-y-12 pt-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-auto gap-5 gap-y-12 pt-10 mx-4 lg:mx-16 sm:mx-10">
      {data &&
        data.map((element: any) => {
          return <PropertyCard key={element.id} data={element} />;
        })}
    </div>
  );
}
