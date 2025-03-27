"use client"

import { useEffect,useState } from "react"
import RightIcon from "./RightIcon"

const CheckboxItem = ({
  id,
  label,
  checked,
  onChange,
  color = "bg-blue-500 border-blue-500",
  showBottomBorder = false,
  isFirst = false,
}) => {
  return (
    <div
      className={`
        flex items-center justify-between py-2.5 cursor-pointer 
        ${showBottomBorder ? "border-b-[0.7px] border-[#CDCDCD]" : ""} 
        ${isFirst ? "border-b-[0.7px] border-[#CDCDCD] pb-3" : ""}
        hover:bg-gray-100 transition-colors duration-200 px-1 rounded-sm
      `}
    >
      <span onClick={() => onChange(id)} className="flex-grow text-gray-700 text-sm font-normal font-montserrat">{label}</span>
      <div
        className={`
          w-[23px] h-[23px] rounded border 
          ${checked ? color : "bg-white border-gray-300"} 
          flex items-center justify-center cursor-pointer
          transition-all duration-200 hover:shadow-sm
          ${!checked && "hover:border-blue-400 hover:bg-blue-50"}
        `}
        onClick={() => onChange(id)}
      >
        {checked && <RightIcon />}
      </div>
    </div>
  )
}

const CheckboxList = ({ items, onChange, allPagesOption = true, showBottomBorders = false }) => {
  const [checkboxes, setCheckboxes] = useState(items)

  useEffect(() => {
    setCheckboxes(items)
  }, [items])

  const handleToggle = (id) => {
    if (allPagesOption && id === 1) {
      const allChecked = !checkboxes.find((item) => item.id === 1).checked
      const updatedItems = checkboxes.map((item) => ({
        ...item,
        checked: allChecked,
      }))
      setCheckboxes(updatedItems)
      onChange(updatedItems)
    } else {
      const updatedItems = checkboxes.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      if (allPagesOption) {
        const allPages = updatedItems.find((item) => item.id === 1)
        const otherPages = updatedItems.filter((item) => item.id !== 1)

        if (otherPages.some((item) => !item.checked) && allPages.checked) {
          updatedItems[0].checked = false
        }

        if (otherPages.every((item) => item.checked) && !allPages.checked) {
          updatedItems[0].checked = true
        }
      }

      setCheckboxes(updatedItems)
      onChange(updatedItems)
    }
  }

  return (
    <div className="flex flex-col w-full space-y-1">
      {checkboxes.map((checkbox, index) => (
        <CheckboxItem
          key={checkbox.id}
          id={checkbox.id}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={handleToggle}
          color={checkbox.color}
          showBottomBorder={index === 0}
          isFirst={index === 0}
        />
      ))}
    </div>
  )
}

export default CheckboxList