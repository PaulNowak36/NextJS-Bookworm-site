import Link from "next/link"
import NextImage from "next/image"

const NewImageWrapper = ({ src, children, width, height }) => {
  return (
    <div
      className={`relative  w-[${width}px] h-[${height}px] rounded-lg bg-blue-500`}
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