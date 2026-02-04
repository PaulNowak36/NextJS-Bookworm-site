import Link from "next/link"
import NextImage from "next/image"

const ImageWrapper = ({ src, children, width, height }) => {
  return (
    <div className={`relative ${width} ${height} mb-8 `}>

      <NextImage 
        src={src}
        alt={src}
        fill
        className="object-fill object-top rounded-lg border-4 border-blue-500"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
        {children}
      </div>

    </div>
    
    
  )
}

export default ImageWrapper