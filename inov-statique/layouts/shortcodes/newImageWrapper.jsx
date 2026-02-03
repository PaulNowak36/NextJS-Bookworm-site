import Link from "next/link"
import NextImage from "next/image"

const NewImageWrapper = ({ src, children, width, height }) => {
  return (
    <div
      className="relative rounded-lg bg-blue-500 border-blue-500 border-4 leading-none"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <NextImage
        src={src}
        alt=""
        fill
        className="object-fill rounded-lg border-blue-500 border-4"
      />

      <div className="absolute inset-0 flex items-end justify-center pb-4">
        {children}
      </div>
    </div>
  )
}

export default NewImageWrapper