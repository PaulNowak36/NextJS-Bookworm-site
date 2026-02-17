import withBasePath from "@lib/utils/basePath";

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