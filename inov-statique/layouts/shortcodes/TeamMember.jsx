export default function TeamMember({ name, role, children, image }) {
  return (
    <div className="flex flex-col items-center text-center mb-10 max-w-[400px] w-full">

      {/* Photo */}
      {image && (
        <div className="w-[260px] h-[260px] rounded-full overflow-hidden border border-gray-300 shadow-sm bg-white mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Texte */}
      <div className="w-full">
        <strong className="text-xl font-semibold">{name}</strong>
        <div className="text-sm text-gray-700 mt-1">{role}</div>
        <p className="mt-3 text-gray-800">{children}</p>
      </div>
    </div>
  );
}