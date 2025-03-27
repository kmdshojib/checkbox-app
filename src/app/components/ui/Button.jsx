const Button = ({ children, onClick, className = "", fullWidth = true, color = "bg-[#FFCE22]" }) => {
  const baseColor = color.startsWith("bg-[") ? color : `${color}`
  return (
    <button
      className={`
        ${fullWidth ? "w-full" : ""} 
        ${baseColor} 
        py-2 
        rounded 
        text-center 
        font-medium 
        cursor-pointer 
        transition-all 
        duration-200 
        hover:brightness-95 
        hover:shadow-md 
        active:scale-[0.98] 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

