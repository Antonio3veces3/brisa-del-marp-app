"use client";
import Image from 'next/image';
import React from 'react'

export default function Welcome() {
  return (
    <div className='bg_welcome_container '>
      <div className='flex flex-col w-[60%] flex-nowrap '>
        <p className='xl:px-40 mt-20 text-[100px] font-bold text-red-10 w-[95%] md:text-[80px] md:px-20 '>Bienvenido</p>
        <p className='xl:px-40 mt-28 text-[25px] w-full text-gray-500  md:text-[25px] md:mt-16 md:px-20' >En Brisa del Mar, donde cada prenda refleja la esencia de la costa. Desde vestidos ligeros hasta trajes de baño elegantes, encuentra todo lo que necesitas para un look fresco y a la moda.</p>
      </div>
      <div className='bg_welcome_image w-[40%] '>
        <Image
          src={"/bg_welcome_3.avif"}
          alt='Bg welcome image'
          fill
          className='object-fill'
        />

      </div>
    </div>
  )
}
