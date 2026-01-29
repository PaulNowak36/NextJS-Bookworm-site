import Link from "next/link"
import NextImage from "next/image"

const ImageWrapper = ({ src, width, height }) => {
  return (
    <div className="img-cover mb-8 flex items-center justify-center">
      <NextImage
        src={src}
        width={width}
        height={height}
        alt={src}
        className="rounded-lg"
      />
    </div>
  )
}

export default ImageWrapper