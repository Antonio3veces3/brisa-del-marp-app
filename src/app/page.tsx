'use client';

import Products from "@/components/Products";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Welcome/>
      <Products/>
    </main>
  );
}
