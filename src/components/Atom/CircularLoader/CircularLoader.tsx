import Image from 'next/image'

interface CircularLoaderProps {
  size?: number
}

export function CircularLoader({ size = 32 }: CircularLoaderProps) {
  return (
    <Image src="/circular-loader.svg" height={size} width={size} alt="loader" />
  )
}

export default CircularLoader
