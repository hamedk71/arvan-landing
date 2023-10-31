import React from 'react'
import { Button } from '@/components/utils/button'
import Info from '@/components/utils/info'
import { Arrow } from '@/components/icons'

export default function Hero() {
  return (
    <section className='pb-24 pt-60 md:py-[72px] bg-primaryDark text-white relative'>
      <div className=' absolute w-full h-full left-0 top-0   bg-hero-banner-mobile md:bg-hero-banner bg-cover bg-no-repeat '></div>

      <div className='container relative'>
        <h1 className=' text-[32px] font-semibold leading-[38px] lg:text-[40px] lg:font-bold lg:leading-[48px] '>
          توسعه به‌سادگی یک کلیک
        </h1>
        <Info className='mt-6'>
          با استفاده از ماشین حساب ابر آوران می‌توانید قبل از اقدام به خرید هر
          از محصولات ابری، برآورد دقیقی از هزینه‌های زیرساختی کسب‌وکار خود داشته
          باشید.
        </Info>
        <Button
          mobileFull
          className='mt-14 lg:mt-12 md:py-[11px] !py-[15px]'
          variant={'secondary'}
        >
          شروع رایگان
          <Arrow />
        </Button>
        <Button
          className='mt-4 flex md:!hidden !py-[15px]'
          mobileFull
          variant='outline'
        >
          تماس با ما
        </Button>
      </div>
    </section>
  )
}
