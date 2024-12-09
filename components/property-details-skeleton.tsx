import { Separator } from "@radix-ui/react-dropdown-menu"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar"
import { Button } from "./ui/button"
import { Hospital, School2 } from "lucide-react"
import { FaRoad, FaWhatsapp } from "react-icons/fa"
import Navbar from "./navbar"

export function PropertyDetailsSkeleton() {
    return (
        <>
            <Navbar />
            <div className="w-[1312px] mx-auto">
                <div className="grid grid-cols-2 gap-3  m-auto pt-16">
                    <div className="w-[650px] h-[424px] animate-pulse rounded-md bg-primary/10" />
                    <div className="w-[650px] grid grid-cols-2 gap-4">
                        <div className="w-[319px] h-[207px] animate-pulse rounded-md bg-primary/10" />
                        <div className="w-[319px] h-[207px] animate-pulse rounded-md bg-primary/10" />
                        <div className="w-[319px] h-[207px] animate-pulse rounded-md bg-primary/10" />
                        <div className="w-[319px] h-[207px] animate-pulse rounded-md bg-primary/10" />
                    </div>
                </div>
                {/* </Link> */}
                <div className="flex mx-auto ju space-x-16 py-6">
                    <div className="w-[865px] flex flex-col space-y-9 border-b-[1px]">
                        <div className="flex flex-col space-y-6">
                            <div className="h-12 w-[50rem] animate-pulse rounded-md bg-primary/10" />
                            <div className="h-8 w-60 animate-pulse rounded-md bg-primary/10" />
                        </div>
                        <Separator />
                        <div className="grid grid-cols-2 h-[92px]">
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="flex flex-col space-y-[5px]">
                                    <div className="w-40 h-4 rounded-md animate-pulse bg-primary/10" />
                                    <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="flex flex-col space-y-[5px]">
                                    <div className="w-40 h-4 rounded-md animate-pulse bg-primary/10" />
                                    <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="flex flex-col space-y-[5px]">
                                    <div className="w-40 h-4 rounded-md animate-pulse bg-primary/10" />
                                    <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                </div>
                            </div>
                            <div className="flex space-y-2 items-center justify-start space-x-6">
                                <img src="../../building.svg" className="h-[29px]" />
                                <div className="flex flex-col space-y-[5px]">
                                    <div className="w-40 h-4 rounded-md animate-pulse bg-primary/10" />
                                    <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                </div>
                            </div>
                        </div>
                        <Separator />
                        <div className="h-[90px]">
                            <div className="text-[16px] font-[400] leading-[23.2px] flex flex-col space-y-2">
                                <div className="w-[50rem] h-4 rounded-md animate-pulse bg-primary/10" />
                                <div className="w-[48rem] h-4 rounded-md animate-pulse bg-primary/10" />
                                <div className="w-[44rem] h-4 rounded-md animate-pulse bg-primary/10" />
                                <div className="w-80 h-4 rounded-md animate-pulse bg-primary/10" />
                            </div>
                        </div>
                        <Separator />
                        <div className="flex space-y-6 flex-col">
                            <span className="text-[32px]">Amenities offered</span>
                            <div className="flex flex-col space-y-2 h-[100px]">
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <div className="flex flex-col space-y-[5px]">
                                        <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                    </div>
                                </div>
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <div className="flex flex-col space-y-[5px]">
                                        <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                    </div>
                                </div>
                                <div className="flex space-x-[8px]">
                                    <img src="../../building.svg" className="h-[28px]" />
                                    <div className="flex flex-col space-y-[5px]">
                                        <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
                                    </div>
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
                                        <Avatar className="animate-pulse bg-primary/10 p-2 rounded-full">
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col space-y-[5px]">
                                            <div className="w-40 h-4 rounded-md animate-pulse bg-primary/10" />
                                            <div className="w-52 h-4 rounded-md animate-pulse bg-primary/10" />
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
                <div className="h-[855px] flex flex-col space-y-4">
                    <div className="text-[32px] h-20 w-80 animate-pulse rounded-md bg-primary/10" />

                    <div className="flex flex-col space-y-2">
                        <span className="text-[16px] w-80 h-6 animate-pulse rounded-md bg-primary/10" />
                        <div className="w-[1312px] h-[485px] animate-pulse rounded-md bg-primary/10">
                        </div>
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
        </>
    )
}