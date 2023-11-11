import Link from "next/link";
import Image from "next/image";
import getSiteHeader from "@/app/libs/getSiteHeader";

const SiteHeader = async () => {
    const siteHeader = await getSiteHeader;
    console.log(siteHeader.data.attributes.logo);
    return (
        <header>
            <Image
                src={"http://localhost:1337" + siteHeader.data.attributes.logo.data.attributes.url}
                width={500}
                height={500}
                alt={siteHeader.data.attributes.logo.data.attributes.alternativeText}
                priority
            />
            {siteHeader.data.attributes.menu.map(header => {
                return (
                    <ul key={header.id}>
                        <li key={header.id}>
                            <Link href={header.url}>
                                {header.label}
                            </Link>
                        </li>
                    </ul>
                )
            })}
            <p>Header component loaded</p>
        </header>
    )
}

export default SiteHeader;