import Link from "next/link"

const SousMenuButton = ({ href, rel, children, color }) => {
  return (
    <Link href={href} target="_self" rel={`noopener noreferrer ${rel?(rel==="follow"?"":rel):"nofollow"}`} className={`btn mb-4 me-4 ${color}`}>
      {children}
    </Link>
  )
}

export default SousMenuButton
