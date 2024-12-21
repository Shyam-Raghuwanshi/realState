import {
    GoogleMap,
    Marker,
    InfoWindow,
    useJsApiLoader
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import MapPropertyCard from "./map-property-card";

const center = {
    lat: -3.745,
    lng: -38.523,
}

const Map = ({ data, isPending }: { data: any, isPending: boolean }) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY as string,
    });

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        // const bounds = new window.google.maps.LatLngBounds(center)
        // map.fitBounds(bounds)

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])


    const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

    return (
        <div className="w-full h-96">
            {!isLoaded || isPending ? (
                <p>Loading.....</p>
            ) : (
                <GoogleMap
                    mapContainerStyle={{ height: "90vh", minWidth: "638px" }}
                    zoom={2}
                    center={center}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {data && data.map((element: any) => (
                        <React.Fragment key={element.id}>
                            <Marker
                                zIndex={999999}
                                position={{
                                    lat: element.location.latitude,
                                    lng: element.location.altitude,
                                }}
                                onClick={() => setHoveredLocation((pre) => { return pre == null ? element.id : null })}
                            />
                            {hoveredLocation === element.id && (
                                <InfoWindow
                                    onDomReady={() => {
                                        const element = document.querySelector(".gm-style-iw-c")
                                        //@ts-ignore
                                        element.style.paddingTop = "0px"
                                        // gm-style-iw gm-style-iw-c
                                        //@ts-ignore
                                        element.style.paddingLeft = "0px"
                                        const element2 = document.querySelector(".gm-style-iw-d")
                                        //@ts-ignore
                                        element2.style.overflow = "hidden"

                                    }}
                                    options={{
                                        headerDisabled: true,
                                        pixelOffset: {
                                            height: -30, width: 0, equals(other) {
                                                return other?.height === 3 && other?.width === 3;
                                            },
                                        }
                                    }}
                                    position={{
                                        lat: element.location.latitude,
                                        lng: element.location.altitude,
                                    }}
                                    onCloseClick={() => {
                                        setHoveredLocation(null)
                                    }}
                                >
                                    <MapPropertyCard setHoveredLocation={setHoveredLocation} data={element} />
                                </InfoWindow>
                            )}
                        </React.Fragment>
                    ))}
                </GoogleMap>
            )}
        </div>
    );
};

export default React.memo(Map)
