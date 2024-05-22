import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FaMapPin, FaRegClock, FaPhoneAlt, FaExternalLinkAlt} from 'react-icons/fa'

function About() {
  return (
    <div className='w-full h-screen flex flex-row '>
      <div className='w-[50%] p-36 '>
        <div className='w-full h-[100%] bg-gray-10 rounded-lg flex flex-col items-center justify-center shadow-lg '>
          <p className='subtitle_about'>
            <FaMapPin size={20 }/> 
            Dirección:
          </p>
          <p className='description_about mt-3'>Centro Villa de Álvarez, Colima. C.P. 28100</p>
          <Link href='https://www.google.com.mx/maps/place/Av+J.+Merced+Cabrera,+Centro,+28970+Cdad.+de+Villa+de+%C3%81lvarez,+Col./@19.2637583,-103.7379316,17z/data=!4m15!1m8!3m7!1s0x8425453503838003:0x315a5cdd822d5d54!2sCentro,+Cdad.+de+Villa+de+%C3%81lvarez,+Col.!3b1!8m2!3d19.2637485!4d-103.7361573!16s%2Fg%2F1vcl41_t!3m5!1s0x842545312d6eb4df:0x6bfa907abed7a022!8m2!3d19.265299!4d-103.7369945!16s%2Fg%2F11c58fjg__?entry=ttu'
          target='_blank'
          className='link mt-2 flex flex-row items-center gap-1' >
            Ver en el mapa.
            <FaExternalLinkAlt size={12}/>
          </Link>
          <p className='subtitle_about mt-16'>
            <FaRegClock size={20}/>
            Horarios:
            </p>
          <p className='description_about mt-3'>Lunes a Sábado: 10:00 am - 08:00 pm</p>
          <p className='description_about mt-2'>Domingo: 11:00 am - 06:00 pm</p>

          <p className='subtitle_about mt-16'>
            <FaPhoneAlt size={20}/>
            Contáctanos:
            </p>
          <p className='description_about mt-3'>Cel: +52 312-100-0123</p>
          <p className='description_about mt-3'>Email: brisa_del_mar@gmail.com</p>
        </div>
      </div>
      <div className=' w-[50%] flex items-center p-10 '>
        <div className='w-full flex flex-col items-center'>
          <p className='text-3xl font-bold text-red-10'>Encuentranos aquí:</p>
          <Image
            src={"/map.png"}
            alt='Map location'
            width={800}
            height={800}
            className='object-contain shadow-2xl mt-8'
          />
        </div>
      </div>
    </div>
  )
}

export default About