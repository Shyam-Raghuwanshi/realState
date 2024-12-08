import { Heart, Search, User2 } from "lucide-react"

export default function BottomNav() {
    return (
        <div className="w-full h-10 absolute bottom-3 z-[999999] md:hidden flex justify-center space-x-16">
            <div className="flex flex-col space-y-1 items-center justify-center">
                <Search className="h-6 w-6"/>
                <span className="text-xs">Explore</span>
            </div>
            <div className="flex flex-col space-y-1 items-center justify-center">
                <Heart className="h-6 w-6"/>
                <span className="text-xs">WishList</span>
            </div>
            <div className="flex flex-col space-y-1 items-center justify-center">
                <User2 className="h-6 w-6"/>
                <span className="text-xs">Log in</span>
            </div>
        </div>
    )
}