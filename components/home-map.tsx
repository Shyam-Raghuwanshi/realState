"use client"
import { useEffect, useState } from "react";
import Script from "next/script";

export default function Map({ isMap }: { isMap: boolean }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
    const [mapWidth, setMapWidth] = useState(window.innerWidth)
    const locations: { altitude: number, latitude: number }[] = [
        { altitude: 53, latitude: 43 },
        { altitude: 50, latitude: 40 },
        { altitude: 51, latitude: 41 },
        { altitude: 52, latitude: 42 },
    ]

    useEffect(() => {
        //@ts-ignore
        window.initMap = function () {
            const location = { lat: 54, lng: 44 };
            //@ts-ignore
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: location,
            });
            for (let i = 0; i < locations.length; i++) {
                const element = locations[i];
                const location = { lat: element.altitude, lng: element.latitude }
                //@ts-ignore
                new google.maps.Marker({
                    position: location,
                    map: map,
                });

            }
        };
    }, [isMap]);

    useEffect(() => {
        const handleResize = () => {
            const size = window.outerWidth;
            if (size <= 638) {
                setMapWidth(638);
                return;
            }
            setMapWidth(size - 17);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div id="map" style={{ width: mapWidth + "px", height: "700px" }} />
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
                async={true}
                defer
            />
        </>
    );
}
