import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Heart, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function MapPropertyCard({ data, setHoveredLocation }: { data: any, setHoveredLocation: any }) {
    return (
        <div className="flex flex-col h-[19rem]">
            <Carousel className="group">
                <Link href={`/property/${data.id}`}>
                    <CarouselContent>
                        {data.images.urls.map((url: string) => {
                            return (<CarouselItem className="w-[75px] h-[230px]" key={url}><Image width={300} height={300} alt="img" loading="eager" className="rounded-t-[9px] w-full h-full object-cover" src={url} /></CarouselItem>)
                        })}
                    </CarouselContent>
                </Link>
                <CarouselPrevious className="hidden group-hover:flex" />
                <div className="flex space-x-4 absolute top-0 right-0 p-2">
                    <Button className="rounded-full w-9 bg-white hover:bg-white shadow-md"><Heart className="text-black cursor-pointer" /></Button>
                    <Button onClick={() => { setHoveredLocation(null) }} className="rounded-full w-9 bg-white hover:bg-white shadow-md"><X className="text-black cursor-pointer" /></Button>
                </div>
                <CarouselNext className="hidden group-hover:flex" />
            </Carousel>
            <Link href={`/property/${data.id}`}>
                <Card className="shadow-none border-none mt-1">
                    <CardHeader className="pt-1">
                        <CardTitle className="text-[#000000]">{data.name}</CardTitle>
                        <CardDescription className="font-bold flex flex-col space-x-1">
                            <div className="flex space-x-1">
                                {data.location.streetAddress},{" "}{data.state}
                            </div>
                            <div>
                                &#x20b9; {data.price}
                            </div>
                        </CardDescription>
                    </CardHeader>
                </Card>
            </Link>
        </div>
    )

}
