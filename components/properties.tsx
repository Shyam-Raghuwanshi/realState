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
                    setData(response);
                } catch (error) {
                    setData([]);
                }
            })();
        });
    }, []);

    if (isPending) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto space-y-4">
                {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-4 w-[90%] mx-auto space-x-5 space-y-5 pt-10">
            {data && data.map((element: any) => {
                return <PropertyCard key={element.id} data={element} />
            })}
        </div>
    )
}