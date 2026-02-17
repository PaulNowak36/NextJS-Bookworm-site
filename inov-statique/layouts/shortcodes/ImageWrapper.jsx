import Link from "next/link"
import NextImage from "next/image"

function withBasePath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Ne touche pas aux URLs externes (http, https, data, blob)
  if (!path || /^(https?:|data:|blob:)/.test(path)) return path;

  // Si le chemin est absolu (commence par /) et basePath existe, on préfixe
  if (path.startsWith("/") && basePath) {
    // Évite le double préfixe si déjà présent
    if (path.startsWith(basePath + "/") || path === basePath) return path;
    return `${basePath}${path}`;
  }

  return path;
}


const ImageWrapper = ({ src, children, width, height }) => {
  const resolvedSrc = withBasePath(src);

  return (
    <div className={`relative ${width} ${height} mb-8 `}>

      <NextImage 
        src={resolvedSrc}
        alt={resolvedSrc}
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