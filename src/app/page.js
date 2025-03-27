"use client"

import { useState } from "react"
import Button from "./components/ui/Button"
import Toast from "./components/ui/Toast"
import CheckboxList from "./components/ui/checkboxItem"

export default function Page() {
  // State management
  const [frameCheckboxes, setFrameCheckboxes] = useState([
    { id: 1, label: "All pages", checked: false },
    { id: 2, label: "Page 1", checked: false },
    { id: 3, label: "Page 2", checked: false },
    { id: 4, label: "Page 3", checked: false },
    { id: 5, label: "Page 4", checked: false },
  ])

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "success",
  })

  // Handler functions
  const handleCheckboxChange = (updatedItems) => {
    setFrameCheckboxes(updatedItems)
  }

  const showToast = (message, type = "success") => {
    setToast({
      visible: true,
      message,
      type,
    })
  }

  const closeToast = () => {
    setToast((prev) => ({ ...prev, visible: false }))
  }

  const handleDoneClick = () => {
    const selectedPages = frameCheckboxes.filter((item) => item.checked)

    if (selectedPages.length === 0) {
      showToast("Please select at least one page", "error")
    } else {
      showToast(`Selected ${selectedPages.length} page(s) successfully!`)
      console.log("Selected pages:", selectedPages)
    }
  }

  // Render components
  const renderCheckboxSection = () => (
    <CheckboxList 
      items={frameCheckboxes} 
      onChange={handleCheckboxChange} 
      showBottomBorders={true} 
    />
  )

  const renderActionButton = () => (
    <Button 
      className="text-black font-normal" 
      onClick={handleDoneClick}
    >
      Done
    </Button>
  )

  // Main render
  return (
    <div className="min-h-screen bg-gray-200 p-8 flex flex-wrap gap-8">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-full max-w-[370px]">
          <div className="bg-white rounded-[6px] shadow-md p-4 flex flex-col gap-4 min-h-[326px] justify-between">
            {renderCheckboxSection()}
            <div className="border-b-[0.7px] border-[#CDCDCD]"/>
            {renderActionButton()}
          </div>
        </div>
      </div>

      <Toast 
        message={toast.message} 
        visible={toast.visible} 
        onClose={closeToast} 
        type={toast.type} 
      />
    </div>
  )
}