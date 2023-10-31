import React from 'react'

export default function Info({ className, children }) {
  return (
    <p
      className={` text-white text-sm leading-6 font-normal lg:text-base lg:leading-[26px] lg:font-medium  max-w-2xl ${className}`}
    >
      {children}
    </p>
  )
}
