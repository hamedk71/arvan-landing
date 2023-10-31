import React from 'react'
import { ToastContainer } from 'react-toastify'

// for example we have a layout

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}
