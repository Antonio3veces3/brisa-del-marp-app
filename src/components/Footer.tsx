"use client";

import Image from 'next/image';
import React from 'react'
import BtnSocialNetwork from './BtnSocialNetwork';

export default function Footer() {
  return (
    <div className='footer bg-gray-800'>
        <div className='h-full flex flex-row flex-nowrap gap-24 justify-center items-center'>
            {/* Logo */}
            <div className='flex items-center justify-center'>
                <Image
                    src={"/logo_img.jpg"}
                    alt='Logo'
                    width={250}
                    height={250}
                    className='rounded-full'
                />
            </div>
            {/* Schedule */}
            <div className='flex flex-col'>
                <p className='text-lg font-bold text-gray-200'>Horarios:</p>
                <p className='text-gray-10 mt-6'>Lunes a Sábado: 10:00 am - 08:00 pm</p>
                <p className='text-gray-10 mt-1'>Domingo: 11:00 am - 06:00 pm</p>
            </div>
            {/* Social media */}
            <div className='flex flex-col'>
                <p className='text-lg font-bold text-gray-200'>Siguenos en nuestras redes sociales:</p>
                <div className='flex flex-row gap-5 mt-3'>
                    <BtnSocialNetwork socialName='Facebook' url='https://www.facebook.com/profile.php?id=61559009056199&mibextid=ZbWKwL'/>
                    <BtnSocialNetwork socialName='Instagram' url='https://www.instagram.com/brisadelmar_store?igsh=MTF1MWIxcng3bTNqbw=='/>
                </div>
            </div>

            {/* Reserved rigths */}
            <p className='text-gray-10 w-60'>© Copyright. 2024 Brisa del Mar. ® All rights reserved.</p>
        </div>
    </div>
  )
}
