"use client";
import Link from 'next/link';
import React, { Dispatch, useState } from 'react'

type NavbarItemProps = {
  href: string;
  title: string;
  isActive: boolean;
  setIsActive: any;
}

function NavbarItem({href, title, isActive, setIsActive} : NavbarItemProps) {
  const onPress = () => {
    setIsActive(true);
  }
  return (
    <>
      <Link href={href} 
        className={`nav_title ${
          (isActive) ? 'text-red-10 underline' : 'text-black'
        }`}
        onClick={onPress}
      >
        {title}
      </Link>

    </>
  )
}

export default NavbarItem