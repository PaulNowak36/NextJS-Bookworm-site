import Link from "next/link"
import NextImage from "next/image"

const ImageWrapper = ({ src, children }) => {
  return (
    <div className="relative w-[300px] h-[200px] mb-8 overflow-hidden">
      <NextImage 
        src={src}
        alt={src}
        fill
        className="object-content rounded-lg"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
        {children}
      </div>

    </div>
  )
}

export default ImageWrapper