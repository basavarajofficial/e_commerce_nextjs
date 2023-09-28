"use client";
import React from 'react'

function Container({ children , className}) {
  return (
    <div className={`${className}  w-full mx-auto px-6 xl:px-8 py-8 `}>
        {children}
    </div>
  )
}

export default Container