'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import { CameraIcon } from '@radix-ui/react-icons'

interface ImageProps {
  imgSrc?: string
  alt: string
}

const ImageHandler = ({ imgSrc, alt }: ImageProps) => {
  const [hasImgError, setHasImgError] = useState(false)

  const handleImageError = () => {
    setHasImgError(true)
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {hasImgError || !imgSrc ? (
        <div className="flex h-full w-full items-center justify-center bg-black">
          <CameraIcon className="h-1/2 w-1/2" color="white" />
        </div>
      ) : (
        <Image
          className="h-full w-full"
          src={imgSrc}
          onError={handleImageError}
          alt={alt}
          fill
        />
      )}
    </div>
  )
}

export default ImageHandler
