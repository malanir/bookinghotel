"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () =>{
    const router = useRouter();

    return (
        <div
        onClick={() :void => router.push("/")}
        >

            <Image
            className="hidden md:block"
            src="/images/Logo.svg"
            height="50"
            alt="Logo"
            />
            <span className="travella">Travella</span>
        </div>
    );
};

export default Logo;

