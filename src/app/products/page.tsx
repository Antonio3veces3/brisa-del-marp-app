import ItemProductCard from '@/components/ItemProductCard'
import Image from 'next/image'
import React from 'react'
import { prendasMasVendidas, productsMasVendidos } from '../../../constants';

function Products() {
  return (
    <div className='w-full h-auto'>
      {/* promocion */}
      <div className='w-full h-[300px] flex flex-row px-20 gap-10'>
        <Image
          src={"/promocion.png"}
          alt='Promocion image'
          width={600}
          height={500}
          className='object-contain '
        />

        <div className=' w-full h-full flex flex-row px-10'>
            <Image
              src={"/price_off.jpg"}
              alt='Price off image'
              width={350}
              height={350}
              className='object-contain'
            />

            <div className='flex flex-col w-full px-8 items-center'>
              <p className='font-extrabold text-6xl mt-20'>Por inauguracion!</p>
              <p className='font-medium text-xl mt-10'>Descuento del 20% en tu primera compra.</p>
            </div>
        </div>
      </div>
      
      {/* Lo mas vendio */} 
      <div className='w-full h-auto flex flex-col px-20 py-10'>
        <p className='text-6xl font-bold mt-3'>Lo más vendido.</p>
        <p className='text-2xl font-medium text-gray-50 mt-4'>Colección 2024</p>
        <div className='flex flex-row flex-nowrap gap-12 justify-center mt-10'>
          {
            productsMasVendidos.map((product, index) => {
              return (
                <ItemProductCard
                  imagePath={product.image}
                  infoProduct={product.infoProduct}
                  key={index}
                />
              );
            })
          }
        </div>
      </div>

      {/* Prendas recientes */}
      <div className='w-full h-screen flex flex-col px-20 py-10'>
        <p className='text-6xl font-bold'>Lo más nuevo.</p>
        <p className='text-2xl font-medium text-gray-50 mt-4'>Colección 2024</p>
        <div className='flex flex-row flex-nowrap gap-12 justify-center mt-10'>
          {
            prendasMasVendidas.map((product, index) => {
              return (
                <ItemProductCard
                  imagePath={product.image}
                  infoProduct={product.infoProduct}
                  key={index}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products