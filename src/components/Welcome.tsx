"use client";
import Image from 'next/image';
import React from 'react'

export default function Welcome() {
  return (
    <div className='bg_welcome_container'>
        <div className='bg_welcome_image'>
        <Image
            src={"/bg_welcome_3.avif"}
            alt='Bg welcome image'
            fill 
            className='object-fill'
        />
        <p className='absolute mx-[200px] my-[60px] text-[100px] font-bold text-red-10'>Bienvenido</p>
        <p className='absolute mx-[200px] my-[250px] text-[25px] w-[900px] text-gray-500' >En Brisa del Mar, donde cada prenda refleja la esencia de la costa. Desde vestidos ligeros hasta trajes de baño elegantes, encuentra todo lo que necesitas para un look fresco y a la moda.</p>
        </div>
    </div>
  )
}
