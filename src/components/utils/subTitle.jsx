import React from 'react'

export default function Subtitle({ children, className }) {
  return (
    <p
      className={` text-green-700 text-base font-bold lg:text-lg lg:leading-normal ${className}`}
    >
      {children}
    </p>
  )
}
