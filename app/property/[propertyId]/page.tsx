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
import { Hospital, School2 } from "lucide-react"
import GoogleMap from "@/components/google-map"
import Navbar from "@/components/navbar"

export default async function Page({ params }: { params: Promise<{ propertyId: string }> }) {

    const slug = (await params).propertyId

    return (
        <div className="h-[2090px]">
            <Navbar />
            {/* <Link href={`/product/images/${4}`}> */}
            <div className="w-[1312px] mx-auto">
                <div className="grid grid-cols-2 gap-3  m-auto pt-16">
                    <div className="w-[650px]">
                        <img className="rounded-l-[8px]" src="../test.jpg" alt="img" />
                    </div>
                    <div className="w-[650px] grid grid-cols-2 gap-4">
                        <img src="../test.jpg" alt="img" />
                        <img src="../test.jpg" alt="img" className="rounded-r-[8px]" />
                        <img src="../test.jpg" alt="img" />
                        <img src="../test.jpg" alt="img" className="rounded-r-[8px]" />
                    </div>
                </div>
                {/* </Link> */}
                <div className="flex mx-auto ju space-x-16 py-6">
                    <div className="w-[865px] flex flex-col space-y-9 border-b-[1px]">
                        <div className="flex flex-col space-y-6">
                            <span className="text-4xl">3 BHK Luxury House in Vasant Vihar</span>
                            <span className="text-[28px]">₹2.40-4.12 cr</span>
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 h-[92px]">
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="grid grid-cols-1">
                                    <span className="text-sm">Project Status</span>
                                    <span className="text-[16px]">Mid-construction</span>
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className="h-[90px]">
                            <p className="text-[16px] font-[400] leading-[23.2px]">
                                This beautiful park-facing property for sale in Geetanjali Enclave is on a plot size of 415 sqm and has a built-up area of 460 sqm. The elevated park in front provides for spectacular eye-level views from the drawing room and the bedroom.
                            </p>
                        </div>
                        <Separator />
                        <div className="flex space-y-6 flex-col">
                            <span className="text-[32px]">Amenities offered</span>
                            <div className="flex flex-col space-y-2 h-[100px]">
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <span className="text-sm">Swimming Pool</span>
                                </div>
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <span className="text-sm">Swimming Pool</span>
                                </div>
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <span className="text-sm">Swimming Pool</span>
                                </div>
                            </div>
                            <Separator />
                        </div>
                    </div>
                    <div className="w-[383px] flex justify-end">
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
                                                Ashees Nigam
                                            </CardTitle>
                                            <CardDescription>
                                                Head of something
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex space-y-3 flex-col">
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-white text-green-400 border border-green-500 rounded-[10px]"><FaWhatsapp /> Whatshapp</Button>
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-white text-red-400 border border-red-500 rounded-[10px]">Request Callback</Button>
                                    <Button className="flex space-x-1 items-center justify-center w-full bg-red-500 text-white border border-red-500 rounded-[10px]">View Mobile No.</Button>
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
                        <span className="text-[16px]">Golf City, Vasant Vihar, New Delhi, India</span>
                        <GoogleMap />
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
        </div>)
}