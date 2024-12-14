import Image from "next/image";
import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/">
            <Image height={50} width={50} alt="img" className="hidden md:flex" src="/../buy-n-lease-logo.png" />
        </Link>
    )
}