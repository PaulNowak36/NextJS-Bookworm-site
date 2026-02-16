

const Chiffres = ({ width, height, color, children }) => {
  return (
   <div
      className={`${width} ${height} rounded-full 
          inline-flex items-center justify-center text-center
          ${color} text-white text-xl font-bold border-4 border-grey-300`}>
      {children}
   </div>
  )
}

export default Chiffres
