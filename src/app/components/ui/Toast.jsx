"use client"

import { useEffect, useState } from "react"

const Toast = ({ message, visible, onClose, type = "success" }) => {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (visible) {
      setIsExiting(false)
      const timer = setTimeout(() => {
        handleClose()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [visible])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => {
      onClose()
      setIsExiting(false)
    }, 300) // Match this with animation duration
  }

  if (!visible && !isExiting) return null

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500"
  const animationClass = isExiting ? "animate-fadeOut" : "animate-fadeIn"

  return (
    <div
      className={`
        fixed top-4 right-4 
        ${bgColor} text-white px-4 py-2 rounded-md shadow-lg 
        flex items-center justify-between min-w-[250px] z-50 
        font-montserrat ${animationClass}
      `}
    >
      <span>{message}</span>
      <button onClick={handleClose} className="ml-4 text-white hover:text-gray-200 transition-colors">
        ×
      </button>
    </div>
  )
}

export default Toast