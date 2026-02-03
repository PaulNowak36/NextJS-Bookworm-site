import Link from "next/link"

const MenuButton = ({ href, color, rel, children }) => {
  return (
    <Link href={href} target="_self" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={`btn mb-4 me-4 ${color}`}>
      {children}
    </Link>
  )
}

export default MenuButton