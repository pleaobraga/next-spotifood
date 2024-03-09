import Image from 'next/image'

interface CircularLoaderProps {
  size?: number
}

export function CircularLoader({ size = 32 }: CircularLoaderProps) {
  return (
    <div className="flex h-full w-full justify-center">
      <Image
        src="/circular-loader.svg"
        height={size}
        width={size}
        alt="loader"
      />
    </div>
  )
}

export default CircularLoader
