"use client"
import { useEffect } from "react";
import Script from "next/script";

export default function GoogleMap({ latitude, altitude }: { latitude: number, altitude: number }) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY
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
    }, []);

    return (
        <div>
            <div id="map" style={{ width: "1312px", height: "485px" }}></div>

            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
                async
                defer
            />
        </div>
    );
}
