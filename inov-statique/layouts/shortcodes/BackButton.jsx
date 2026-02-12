import Link from "next/link"

const BackButton = ({ href = "/", label = "Retour" }) => {
  return (
    <div className="w-full flex items-start">
      <Link
        href={href}
        className="
          inline-flex items-center gap-2
          text-black-700 underline
          hover:text-blue-600 dark:hover:text-blue-400
          transition-colors duration-200
          px-3 py-2
        "
      >
        {/* Petite flèche gauche en SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>

        <span>{label}</span>
      </Link>
    </div>
  )
}

export default BackButton