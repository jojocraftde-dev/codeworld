'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const randomTime = Math.floor(Math.random() * 2000) + 1000
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, randomTime)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loader fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-navy-900 to-blue-900">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-transparent border-t-red-400 rounded-full animate-spin" />
          </div>
        </div>
      </div>
    </div>
  )
}

