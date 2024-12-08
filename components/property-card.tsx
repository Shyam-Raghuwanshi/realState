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

export default function PropertyCard({ data }: { data: any }) {
    return (
        <div>
            <Carousel className="group">
                <CarouselContent >
                    {data.images.url.map((url: string) => {
                        return (<CarouselItem key={url}><img className="rounded-2xl" src={url} /></CarouselItem>)
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden group-hover:flex" />
                <CarouselNext className="hidden group-hover:flex" />
            </Carousel>
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
        </div>
    )

}
