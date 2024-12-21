import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ data }: { data: any }) {
  return (
    <div>
      <Link href={`/property/${data.id}`}>
        <Carousel className="group">
          <CarouselContent>
            {data.images.urls.map((url: string) => {
              return (
                <CarouselItem
                  key={url}
                  className="rounded-lg w-100 h-100 object-cover"
                >
                  <Image
                    width={400}
                    height={400}
                    alt="img"
                    loading="eager"
                    className="rounded-lg w-full h-full aspect-square object-cover"
                    src={url}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden group-hover:flex" />
          <CarouselNext className="hidden group-hover:flex" />
        </Carousel>

        <Card className="shadow-none border-none space-y-2.5">
          <CardHeader className="p-0 pt-3 space-y-0 gap-0.5 ">
            <CardTitle className="p-0 pt-0 text-base/5 font-semibold">
              {data.name}
            </CardTitle>
            <CardDescription className="pt-0 p-0 text-[#888888] text-base/5 font-medium">
              {data.location.streetAddress}, {data.state}
            </CardDescription>
            <CardContent className="pt-0 p-0 text-base/5 text-[#888888] font-medium">
              {data.feature[0].area}sqft
            </CardContent>
          </CardHeader>
          <CardFooter className="p-0 pt-0 text-base/5 font-semibold ">
            &#x20b9; {data.price}
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}
