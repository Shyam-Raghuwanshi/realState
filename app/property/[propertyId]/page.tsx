"use client"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaRoad, FaWhatsapp } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Hospital, School2, Share } from "lucide-react"
import GoogleMap from "@/components/google-map"
import Navbar from "@/components/navbar"
import { useTransition, useEffect, useState } from "react"
import { getPropertyById } from "@/actions/handleProperty"
import { PropertyDetailsSkeleton } from "@/components/property-details-skeleton"
import { Cross2Icon } from "@radix-ui/react-icons"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FcLeft, FcLike, FcLikePlaceholder } from "react-icons/fc"
import { DialogClose } from "@radix-ui/react-dialog"
import { SharePropertyButton } from "@/components/share-property"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Page({ params }: { params: Promise<{ propertyId: string }> }) {


    const [isPending, startTransition] = useTransition()
    const [data, setData] = useState<any>([])

    useEffect(() => {
        startTransition(() => {
            (async () => {
                const propertyId = Number((await params).propertyId)
                const res = await getPropertyById(propertyId)
                console.log(res)
                setData(res)
            })()
        })
    }, [])

    if (isPending || data.length === 0) {
        return <>
            <PropertyDetailsSkeleton />
        </>
    }

    const { images, description, price, type, location, feature, contact, name, id } = data;
    const { bedrooms, bathrooms, parkingSpots, area, hasSwimmingPool, hasGardenYard, hasBalcony } = feature[0];
    const { phone, email, } = contact;
    const { streetAddress, city, state, zip, region, landmark, altitude, latitude, } = location;
    const { urls } = images;
    
    return (
        <>
            <Navbar />
            <div className="w-[638px] sm:w-auto flex flex-col justify-center items-center mt-4 pb-10 ">
                <Dialog>
                    <div className="flex space-x-2 lg:grid lg:grid-cols-2 h-[426px] w-[638px] sm:w-full px-0 sm:px-4 md:px-10">
                        <DialogTrigger className="h-[426px]">
                            <div className="h-[426px] w-[638px] sm:w-auto">
                                <Image height={400} width={400} className="w-full h-full object-cover" src={urls[0]} alt="img" />
                            </div>
                        </DialogTrigger>
                        <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                            {urls.map((element: string, index: number) => {
                                return (
                                    (urls.length > index + 1 && index + 1 < 5) &&
                                    <DialogTrigger className="flex items-center justify-center h-[209px] lg:w-auto">
                                        <Image
                                            height={300}
                                            width={300}
                                            key={element}
                                            src={urls[index + 1]}
                                            className={cn(
                                                index + 1 > 2 && 'hidden lg:flex',
                                                "w-full h-full object-cover",
                                                (((index + 1) % 2) == 0) && ""
                                            )}
                                            alt="img"
                                        />
                                    </DialogTrigger>
                                )
                            })}
                        </div>
                    </div>
                    <DialogContent className="flex h-full flex-col space-y-2">
                        <div className="w-full flex justify-between">
                            <DialogClose>
                                <Cross2Icon className="h-6 w-6" />
                            </DialogClose>
                            <div className="flex space-x-2 items justify-between">
                                <div className="flex space-x-1 items-center">
                                    <SharePropertyButton />
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <Button variant="outline" className="flex space-x-1"><FcLike className="h-5 w-5" />Save</Button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-y-scroll grid grid-cols-1 md:grid-cols-2 gap-2">
                            {urls.map((url: string) => {
                                return (
                                    <Image height={800} width={800} key={url} src={url} alt="img" />
                                )
                            })}
                        </div>
                    </DialogContent>
                </Dialog>
                <div className="flex mx-auto space-x-16 py-6 px-5 sm:px-[35px]">
                    <div className="w-full flex flex-col space-y-9 border-b-[1px]">
                        <div className="flex flex-col space-y-6">
                            <span className="text-4xl">{name}</span>
                            <span className="text-[28px]">₹{price} cr</span>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 h-[92px]">
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <Image height={30} width={30} alt="img" src="../../building.svg" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <Image height={30} width={30} alt="img" src="../../building.svg" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Size</span>
                                    <span className="text-[16px]">{area}{" "}sqft.</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <Image height={30} width={30} alt="img" src="../../building.svg" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <Image height={30} width={30} alt="img" src="../../building.svg" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className="h-[90px]">
                            <p className="text-[16px] font-[400] leading-[23.2px]">
                                {description}
                            </p>
                        </div>
                        <Separator />
                        <div className="flex space-y-6 flex-col">
                            <span className="text-[32px]">Amenities offered</span>
                            <div className="flex flex-col space-y-2 h-[100px]">
                                {hasSwimmingPool && < div className="flex space-x-[8px]">
                                    <Image height={30} width={30} alt="img" src="../../building.svg" />
                                    <span className="text-sm">Swimming Pool</span>
                                </div>}
                                {hasBalcony && <div className="flex space-x-[8px]">
                                    <Image height={30} width={30} alt="img" src="../../building.svg" />
                                    <span className="text-sm">BalCony</span>
                                </div>}
                                {hasGardenYard && < div className="flex space-x-[8px]">
                                    <Image height={30} width={30} alt="img" src="../../building.svg" />
                                    <span className="text-sm">Garden Yard</span>
                                </div>}
                            </div>
                            <Separator />
                        </div>
                    </div>
                    <div className="w-[383px] hidden lg:flex justify-end ">
                        <div>
                            <Card className="w-[335px]">
                                <CardHeader>
                                    <div className="flex space-x-5 justify-start items-center">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col space-y-[5px]">
                                            <CardTitle>
                                                {contact.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {email}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex space-y-3 flex-col">
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-white text-green-400 border border-green-500 rounded-[10px] hover:bg-green-500 hover:text-white"><FaWhatsapp /> Whatshapp</Button>
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-white text-red-400 border border-red-500 rounded-[10px] hover:bg-red-400 hover:text-white">Request Callback</Button>
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-red-500 text-white border border-red-500 rounded-[10px] hover:bg-red-400 hover:text-white">View Mobile No.</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div >
                <div className="h-[655px] flex flex-col space-y-4">
                    <span className="text-[32px]">
                        Explore the area
                    </span>

                    <div className="flex flex-col">
                        <span className="text-[16px] ">{streetAddress},{" "}{city},{" "} {state}</span>
                        <GoogleMap latitude={latitude} altitude={altitude} />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <span className="text-[24px]">Location Advantages</span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                            <div className="flex space-x-1 items-center">
                                <School2 className="h-5" />
                                <span className="text-[14px]">Euro International School - 2 km</span>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <Hospital className="h-5" />
                                <span className="text-[14px]">Euro International School - 2 km</span>
                            </div>
                            <div className="flex space-x-1 items-center">
                                <FaRoad className="h-5" />
                                <span className="text-[14px]">Euro International School - 2 km</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="fixed bottom-0 w-full lg:hidden z-[99999]">
                <Card className="">
                    <CardHeader>
                        <div className="flex space-x-5 justify-start items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col space-y-[5px]">
                                <CardTitle>
                                    {contact.name}
                                </CardTitle>
                                <CardDescription>
                                    {email}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex space-x-3">
                        <Button className="flex space-x-1 items-center justify-center  bg-white text-green-400 border border-green-500 rounded-[10px] hover:bg-green-500 hover:text-white"><FaWhatsapp /> Whatshapp</Button>
                        <Button className="flex space-x-1 items-center justify-center  bg-white text-red-400 border border-red-500 rounded-[10px] hover:bg-red-400 hover:text-white">Request Callback</Button>
                        <Button className="flex space-x-1 items-center justify-center  bg-red-500 text-white border border-red-500 rounded-[10px] hover:bg-red-400 hover:text-white">View Mobile No.</Button>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}