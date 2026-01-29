import Link from "next/link"

const MenuButton = ({ href, type, rel, children }) => {
  return (
    <Link href={href} target="_self" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={` btn mb-4 me-4 ${type === "outline"? "bg-sky-200" : "bg-sky-300"}`}>
      {children}
    </Link>
  )
}

export default MenuButton
