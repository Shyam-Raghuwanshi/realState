"use client"
import { useCallback, useEffect, useState, useTransition } from "react";
import PropertyCard from "./property-card";
import { getPropertyDetails } from "@/actions/handleProperty";
import { CardSkeleton } from "./card-skeleton";

export default function Properties({ data, isPending }: { data: any, isPending: boolean }) {

    if (isPending) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-y-4 pt-5">
                {Array.from({ length: 12 }).map((_, i) => <CardSkeleton key={i} />)}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-5 pt-10">
            {data && data.map((element: any) => {
                return <PropertyCard key={element.id} data={element} />
            })}
        </div>
    )
}