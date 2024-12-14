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
import Image from "next/image"
import Link from "next/link"

export default function PropertyCard({ data }: { data: any }) {
    return (
        <div>
            <Carousel className="group">
                <Link href={`/property/${data.id}`}>
                    <CarouselContent>
                        {data.images.urls.map((url: string) => {
                            return (<CarouselItem key={url}><Image width={400} height={400} alt="img" loading="eager" className="rounded-2xl w-full h-full object-cover" src={url} /></CarouselItem>)
                        })}
                    </CarouselContent>
                </Link>
                <CarouselPrevious className="hidden group-hover:flex" />
                <CarouselNext className="hidden group-hover:flex" />
            </Carousel>
            <Link href={`/property/${data.id}`}>
                <Card className="shadow-none border-none">
                    <CardHeader className="pb-0 pl-0">
                        <CardTitle className="text-[#000000] font-[18px]">{data.name}</CardTitle>
                        <CardDescription className="text-[#888888]">{data.location.streetAddress},{" "}{data.state}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-1 pl-0 text-[#888888]">
                        {data.feature[0].area}sqft
                    </CardContent>
                    <CardFooter className="text-[#000000] pl-0 font-[18px]">
                        &#x20b9; {data.price}
                    </CardFooter>
                </Card>
            </Link>
        </div>
    )

}
