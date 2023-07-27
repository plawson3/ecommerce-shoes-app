import React, { ReactNode } from 'react'

export default function Wrapper({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${className || ''}`}>{children}</div>
  )
}
