import Link from "next/link"
import NextImage from "next/image"

const ImageWrapper = ({ src, children }) => {
  return (
    <div className="relative w-[300px] h-[200px] mb-8">
      <NextImage
        src={src}
        alt={src}
        fill
        className="object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>

    </div>
  )
}

export default ImageWrapper