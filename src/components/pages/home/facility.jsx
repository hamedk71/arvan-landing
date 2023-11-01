import React from 'react'
import Pattern from './pattern'
import Tab from './tab'
import Subtitle from '@/components/utils/subTitle'
import useDeviceType from '@/hooks/useDeviceType'

export default function Facility() {
  const device = useDeviceType()
  return (
    <section className=' py-24 md:py-32 relative flex flex-col items-center'>
      <Pattern length={device === 'mobile' ? 2 : 5} />
      <div className='w-full container font-bold'>
        <Subtitle>راهکارها</Subtitle>
        <h2 className='text-gray-900 text-[28px] leading-9 lg:text-[40px] mt-6'>
          امکانات مختلف برای نیازهای متفاوت
        </h2>
      </div>
      <Tab />
    </section>
  )
}
