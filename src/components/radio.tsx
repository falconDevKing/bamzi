import React from 'react'

type RadioProps = {
  onRadioChange: (value: any) => void
  accentColor: string
}

const Radio = ({ onRadioChange, accentColor }: RadioProps) => {
  return (
    <div className="border-b-2 border-gray-200 py-4">
      <h3>Multi Range</h3>
      <div className="mt-2 flex flex-col">
        <div className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange('under $10')}
          />
          <label htmlFor="price-range">under $10</label>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange('$10 - $100')}
          />
          <label htmlFor="price-range">$10 - $100</label>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange('$100 -$500')}
          />
          <label htmlFor="price-range">$100 - $500</label>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange('more than $500')}
          />
          <label htmlFor="price-range">more than $500</label>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <input
            type="radio"
            name="price-range"
            className={`${accentColor}`}
            onClick={() => onRadioChange('All')}
          />
          <label htmlFor="price-range">All</label>
        </div>
      </div>
    </div>
  )
}

export default Radio
