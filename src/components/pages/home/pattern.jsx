import React from 'react'

export default function Pattern({ length = 5 }) {
  return (
    <div className='container absolute h-full top-0 flex z-[-1] justify-between'>
      {Array.from({ length }).map((_, ind) => (
        <div
          key={'pattern' + ind}
          className=' w-[1px] h-full border-r-[1px] border-dashed border-border'
        />
      ))}
    </div>
  )
}
