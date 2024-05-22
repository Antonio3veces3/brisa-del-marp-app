import Image from "next/image";
import React from "react";

type CategoryCardProps = {
  imageName: string;
  title: string;
  items: [string, string, string]
}

export default function CategoryCard({imageName, title, items}: CategoryCardProps) {
  return (
    <div className="w-[450px] h-[600px] flex flex-col rounded-lg shadow-2xl p-3">
      <div className="relative flex justify-center w-full h-[350px]">
        <Image src={imageName} alt="Image" width={350} height={200} className="rounded-md " />
      </div>
      <p className="text-center text-[30px] font-bold mt-2 text-brown-20" >{title}</p>
      <ul className="flex flex-col px-8 space-y-4 mt-2">
        <li className="category_card_item">{items[0]}</li>
        <li className="category_card_item">{items[1]}</li>
        <li className="category_card_item">{items[2]}</li>
      </ul>
    </div>
  );
}
