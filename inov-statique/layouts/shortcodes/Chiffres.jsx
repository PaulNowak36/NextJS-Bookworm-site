

const Chiffres = ({ color, children }) => {
  return (
   <div
      className={`w-40 h-40 rounded-full 
          inline-flex items-center justify-center 
          ${color} text-white text-xl font-bold`}>
      {children}
   </div>
  )
}

export default Chiffres
