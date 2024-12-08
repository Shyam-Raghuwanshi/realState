"use client"
import { useEffect, useState, useTransition } from "react";
import PropertyCard from "./property-card";
import { getPropertyDetails } from "@/actions/handleProperty";
import { CardSkeleton } from "./card-skeleton";

export default function Properties() {
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        startTransition(() => {
            (async () => {
                try {
                    const response = await getPropertyDetails();
                    console.log({ response });
                    setData(response);
                } catch (error) {
                    setData([]);
                }
            })();
        });
    }, []);

    if (isPending) {
        return <CardSkeleton />
    }

    return (
        <div className="grid grid-cols-4 w-[90%] mx-auto space-x-5 space-y-5 pt-10">
            {data?.map((element: any) => {
                return <PropertyCard key={element.id} data={element} />
            })}
        </div>
    )
}