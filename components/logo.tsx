import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/">
            <img className="h-10 hidden md:flex" src="../buy-n-lease-logo.png" />
        </Link>
    )
}