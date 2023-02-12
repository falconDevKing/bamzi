import React from 'react'
import { checkboxBrandData } from '../utils/data'

type CheckboxBrandProps = {
  onBrandChange: (value: any) => void
  accentColor: string
}

const CheckboxBrand = ({ onBrandChange, accentColor }: CheckboxBrandProps) => {
  return (
    <div className="border-b-2 border-gray-200 py-4">
      <h3>Brand</h3>
      <div className="mt-2 flex flex-col">
        {checkboxBrandData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              id={item.name}
              className={`${accentColor}`}
              onClick={() => onBrandChange(item.value)}
            />
            <label htmlFor={item.name}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxBrand
