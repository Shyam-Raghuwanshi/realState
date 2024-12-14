"use client"
import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

export default function GoogleMap({ latitude, altitude }: { latitude: number, altitude: number }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
    // let width = window.outerWidth
    const [mapWith, setMapWith] = useState(window.innerWidth)
    useEffect(() => {
        //@ts-ignore
        window.initMap = function () {
            const location = { lat: latitude, lng: altitude };
            //@ts-ignore
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: location,
            });
            //@ts-ignore
            new google.maps.Marker({
                position: location,
                map: map,
            });
        };
    }, [latitude, altitude]);

    window.addEventListener("resize", () => {
        setMapWith(window.outerWidth)
    })
    return (
        <>
            <div id="map" className={cn("h-[485px]", `w-[${mapWith}px]`)} />
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
                async
                defer
            />
        </>
    );
}
