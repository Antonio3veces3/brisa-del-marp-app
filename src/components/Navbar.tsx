'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import NavbarItem from './NavbarItem';

export default function Navbar() {
  const [isHomeActive, setHomeActive] = useState(false);
  const [isProductsActive, setProductsActive] = useState(false);
  const [isAboutActive, setAboutActive] = useState(false);

  useEffect(() => {
    if (isHomeActive) {
      setProductsActive(false);
      setAboutActive(false);
    }

    if (isProductsActive) {
      setHomeActive(false);
      setAboutActive(false);
    }

    if (isAboutActive) {
      setHomeActive(false);
      setProductsActive(false);
    }
  }, [isHomeActive, isProductsActive, isAboutActive])
  
  return (
    <header className='w-full max-h-25' >
      <nav className='nav'>
        <Link href={"/"} className=''>
          <Image
            src={"/logo_img.jpg"}
            alt='Logo'
            width={70}
            height={70}
            className='rounded-full object-contain'
          />
        </Link>

        {/* <Link href='/'  className='nav_title'>
          Home
        </Link> */}
        <NavbarItem
          href='/'
          title='Inicio'
          isActive = {isHomeActive}
          setIsActive={setHomeActive}
        />

        <NavbarItem
          href='/products'
          title='Productos'
          isActive = {isProductsActive}
          setIsActive={setProductsActive}
        />

        <NavbarItem
          href='/about'
          title='Acerca de'
          isActive = {isAboutActive}
          setIsActive={setAboutActive}
        />
      </nav>
    </header>
  )
}
