"use client";

import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa"

type BtnSocialNetworkProps = {
    socialName: string;
    url: string;
}

function getBox(socialName: string){
    switch (socialName) {
        case 'Facebook':
            return <FaFacebook color='white' size={50}/>
        case 'Instagram':
            return <FaInstagram color='white' size={50}/>
        default:
            console.log(`Icon not available for: ${socialName}`)
            break;
    }
}
export default function BtnSocialNetwork({ socialName, url }: BtnSocialNetworkProps) {
    const goToUrl = () => {
        window.open(url, "_blank", "noreferrer");
    }
    return (
        <div className='w-20 h-20 flex flex-col items-center hover:cursor-pointer' onClick={goToUrl}>
            {getBox(socialName)}
            <p className='text-gray-10 font-semibold text-sm mt-1'>{socialName}</p>
        </div>
    )
}
