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

export default function TeamMember({ name, role, children, image }) {
  const resolvedSrc = withBasePath(image);
  
  return (
    <div className="flex flex-col items-center text-center mb-10 max-w-[400px] w-full">

      {/* Photo */}
      <img
            src={resolvedSrc}
            alt={name}
            className="w-full h-full object-cover rounded-xl border-8 border-red-500 "
      />
        
        
      

      {/* Texte */}
      <div className="w-full">
        <strong className="text-xl font-semibold">{name}</strong>
        <div className="text-sm text-gray-700 mt-1">{role}</div>
        <p className="mt-3 text-gray-800">{children}</p>
      </div>
    </div>
  );
}