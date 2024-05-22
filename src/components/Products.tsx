import React from 'react'
import CategoryCard from './CategoryCard'

export default function Products() {
  return (
    <div className='w-full h-screen'>
        <p className='text-center text-[50px] font-bold mt-10 text-red-10'>Explora nuestras colecciones</p>
        <div className='flex flex-row mt-20 justify-center space-x-20'>
        <CategoryCard
          imageName='/ropa_playa.jpg'
          title='Ropa de playa'
          key={1}
          items={['Bikinis', 'Trajes de baño', 'Pareos']}
        />
        <CategoryCard
          imageName='/moda_casual.jpg'
          title='Moda casual'
          key={2}
          items={['Vestidos', 'Blusas', 'Pantalones cortos']}
        />
        <CategoryCard
          imageName='/accesorios.jpg'
          title='Accesorios'
          key={1}
          items={['Sombreros', 'Gafas de sol', 'Bolsos']}
        />
        </div>
        
    </div>
  )
}
