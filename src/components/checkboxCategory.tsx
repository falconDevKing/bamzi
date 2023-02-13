import React from 'react'
import { checkboxCategoryData } from '../utils/data'

type CheckboxCategoryProps = {
  onCategoryChange: (value: any) => void
  accentColor: string
}
const CheckboxCategory = ({
  onCategoryChange,
  accentColor,
}: CheckboxCategoryProps) => {
  return (
    <div className="border-b-2 border-gray-200 py-4">
      <h3>Category</h3>
      <div className="mt-2 flex flex-col">
        {checkboxCategoryData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id={item.name}
              className={`${accentColor}`}
              onClick={() => onCategoryChange(item.value)}
            />
            <label htmlFor={item.name}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxCategory
