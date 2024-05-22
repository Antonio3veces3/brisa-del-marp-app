import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image'
import React from 'react'

type ItemProductCardProps = {
    imagePath: string | StaticImport;
    infoProduct: InfoProduct[];
}

type InfoProduct = {
    name: string;
    price: number;
}

export default function ItemProductCard({ imagePath, infoProduct }: ItemProductCardProps) {
    return (
        <div className='relative w-[350px] h-[500px] flex flex-col shadow-lg p-3'>
            {/* Image */}
            <div className='w-full max-h-[300px]'>
                <Image
                    src={imagePath}
                    alt='Image'
                    width={200}
                    height={50}
                    className='object-fill w-full h-[300px]'
                />
            </div>

            {
                infoProduct.map((product, index) => {
                    return (
                        <div className='' key={index}>
                            <p className='mt-2 text-gray-90 font-semibold text-lg'>{product.name}</p>
                            <p className='text-red-10 font-medium'>${product.price.toString()} MXN</p>
                        </div>
                    )
                })
            }


            <div className='w-full absolute inset-x-0 bottom-3 px-3'>
                <button className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full">
                    Comprar
                </button>
            </div>
        </div>
    )
}
