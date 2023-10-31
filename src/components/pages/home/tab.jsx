import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/utils/button'
import { homeTabContent, homeTabHeader } from '@/constant/homeTab'
import { Arrow } from '@/components/icons'
import useDeviceType from '@/hooks/useDeviceType'

export default function Tab() {
  const [active, setActive] = useState(0)
  const [width, setWidth] = useState(0)
  const device = useDeviceType()

  useEffect(() => {
    let interval
    if (window && window.innerWidth > 767) {
      interval = setInterval(() => {
        setActive((prev) => (prev + 1) % homeTabHeader.length)
      }, 2000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [active, width])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const handleTabClick = (tab) => {
    setActive(tab)
  }

  return (
    <div className='w-full mt-[46px] md:mt-16'>
      <div className='flex relative'>
        <div className='container w-full hidden md:flex'>
          {homeTabHeader.map((item, ind) => (
            <button
              onClick={() => {
                handleTabClick(ind)
              }}
              className={`tab ${ind === active ? 'active' : ''}`}
              key={item.title}
            >
              <span className='tab__text'>{item.title}</span>
            </button>
          ))}
        </div>
        <div className='container w-full flex md:hidden flex-wrap gap-3'>
          {homeTabHeader.map((item, ind) => (
            <Button
              className=' shrink-0'
              onClick={() => {
                handleTabClick(ind)
              }}
              variant={active === ind ? 'gradient' : 'gradient-outline'}
              shape='curve'
              size='small'
              key={item.title}
            >
              <span className='tab__text'>{item.title}</span>
            </Button>
          ))}
        </div>
        <div className=' absolute w-full h-[1px] border-t-[1px] bottom-0 border-dashed border-gray-100 -translate-y-[0.5px] hidden md:block'></div>
      </div>
      <div className=' pt-10 md:pt-12 container flex justify-between flex-col md:flex-col-reverse lg:flex-row md:items-center'>
        <div className=' md:self-start lg:mt-4  max-w-full lg:max-w-[500px] xl:max-w-[584px] '>
          <p className='text-gray-600 lg:text-gray-800 font-medium text-sm lg:text-base xl:text-lg leading-[30px] tracking-[0.07] md:tracking-[0.36px]'>
            {homeTabContent.info}
          </p>
          <div className='mt-4 md:mt-16 flex flex-col gap-3 text-gray-800 text-sm leading-7  md:text-base md:leading-7 tracking-[0.2px] md:text-gray-900 md:font-bold'>
            {homeTabContent.items.map((items) => (
              <div key={items} className='flex items-center gap-3 '>
                <Image
                  alt='success tick'
                  width={device === 'desktop' ? 20 : 16}
                  height={device === 'desktop' ? 20 : 16}
                  src='./images/tick.svg'
                />
                {items}
              </div>
            ))}
          </div>
          {/* {device !== 'mobile' && ( */}
          <Button className='mt-12 !hidden  md:flex' variant={'link'}>
            راهکار فروشگاه‌های آنلاین
            <Arrow width='24px' height='24px' />
          </Button>
          {/* )} */}
        </div>
        <div className=' mt-[34px] md:mt-0'>
          {homeTabHeader.map(({ img }, ind) => (
            <div
              key={img}
              className={`${ind !== active ? 'hidden' : ''} animate-fade-in`}
            >
              <Image
                priority
                src={img}
                width={536}
                height={536}
                alt='tab image'
              />
            </div>
          ))}
        </div>
        <Button
          className='mt-4 flex md:!hidden font-bold'
          mobileFull
          variant='outline-primary'
        >
          خرید آنلاین
        </Button>
      </div>
    </div>
  )
}
