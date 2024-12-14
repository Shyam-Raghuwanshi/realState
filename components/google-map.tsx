"use client"
import { useEffect, useState } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

export default function GoogleMap({ latitude, altitude }: { latitude: number, altitude: number }) {
    const router = useRouter();
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
    const [mapWidth, setMapWidth] = useState(window.innerWidth - 80)
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
        router.refresh()
    }, [latitude, altitude]);

    useEffect(() => {
        const handleResize = () => {
            const size = window.outerWidth;
            if (size <= 638) {
                setMapWidth(638);
                return;
            }
            setMapWidth(size - 80);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div id="map" style={{ width: mapWidth + "px" }} className="h-[485px]" />
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
            />
        </>
    );
}
