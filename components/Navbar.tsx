import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 relative py-5">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>

        <ul className="h-full gap-12 flex">
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
                    {link.label}
                </Link>
            ))} 
        </ul>
    </nav>
  )
}

export default Navbar
