import React, { useState, Dispatch, SetStateAction } from 'react'
import { FiX } from 'react-icons/fi'
import Radio from './radio'
import CheckboxCategory from './checkboxCategory'
import CheckboxBrand from './checkboxBrand'

interface FilterProps {
  showModal: boolean
  closeModal: () => void
  setProducts: Dispatch<SetStateAction<any[]>>
  accentColor: string
  btnColor: string
  products: any
}

const Filter = ({
  showModal,
  closeModal,
  setProducts,
  accentColor,
  btnColor,
  products,
}: FilterProps) => {
  // const [selectedRating, setSelectedRating] = useState(0)
  const [selectedRadio, setSelectedRadio] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState<any[]>([])
  const [selectedBrand, setSelectedBrand] = useState<any[]>([])

  const filterByPrice = (data: any) => {
    console.log('filteredPrices')
    switch (selectedRadio) {
      case 'under $10':
        return data.filter((prod: any) => prod.price <= 10)
      case '$10 - $100':
        return data.filter((prod: any) => prod.price >= 10 && prod.price <= 100)
      case '$100 -$500':
        return data.filter(
          (prod: any) => prod.price >= 100 && prod.price <= 500
        )
      case 'more than $500':
        return data.filter((prod: any) => prod.price >= 500)
      case 'All':
        return data
      default:
        return data
    }
  }

  const filterByCategory = (data: any) => {
    console.log('filteredCategory')
    if (selectedCategory.length) {
      return data.filter((prod: any) =>
        selectedCategory.includes(prod.category)
      )
    } else {
      return data
    }
  }

  const filterByBrand = (data: any) => {
    console.log('filteredBrand')
    if (selectedBrand.length) {
      return data.filter((prod: any) => selectedBrand.includes(prod.brand))
    } else {
      return data
    }
  }

  const filterData = (product: any) => {
    const filteredPrices = filterByPrice(product)
    console.log('filteredPrices :', filteredPrices)
    const filteredBrands = filterByBrand(filteredPrices)
    console.log('filteredBrands :', filteredBrands)
    const filteredCategories = filterByCategory(filteredBrands)
    console.log('filteredCategories :', filteredCategories)
    // const filteredRatings = filterByRating(filteredCategories)
    // console.log("filteredRatings :", filteredRatings)

    return filteredCategories
  }

  const onChangeHandler = () => {
    const filteredData = filterData(products)
    setProducts(filteredData)
  }

  // useEffect(() => {
  //   const filteredData = filterData(products)
  //   handleFilter(filteredData)

  // }, [selectedBrand, selectedCategory, selectedRadio, selectedRating, products])

  const handleToggle: (value: any, previousState: any[]) => any[] = (
    val,
    previousState
  ) => {
    const currentIndex = previousState.indexOf(val)
    let newCheckedArray = [...previousState]
    if (currentIndex === -1) {
      if (val === '') {
        newCheckedArray = []
      } else {
        const filtered = newCheckedArray.filter((item) => item !== '')
        newCheckedArray = [...filtered]
      }
      newCheckedArray.push(val)
    } else {
      newCheckedArray.splice(currentIndex, 1)
    }
    return newCheckedArray.sort((a, b) => a - b)
  }

  const onRadioChange: (value: any) => void = (value) => {
    setSelectedRadio(value)
  }

  const onCategoryChange: (value: any) => void = (value) => {
    const newCategoryState = handleToggle(value, selectedCategory)
    setSelectedCategory(newCategoryState)
  }

  const onBrandChange: (value: any) => void = (value) => {
    const newBrandState = handleToggle(value, selectedBrand)
    setSelectedBrand(newBrandState)
  }

  return (
    <div
      className={`absolute inset-0 bg-black bg-opacity-50 sm:relative sm:col-span-1 sm:flex sm:flex-col sm:bg-opacity-0 sm:bg-none ${
        showModal ? 'z-10 flex flex-col' : 'hidden'
      }`}
    >
      <span className="hidden sm:block sm:text-sm">Filters</span>
      <div className="mt-3 mb-6 flex flex-col rounded border-none bg-white px-4 shadow">
        <div className="flex items-center justify-between py-4">
          <button
            className={`${btnColor} rounded px-6 py-2 text-sm text-white`}
            onClick={onChangeHandler}
          >
            Apply Filter
          </button>
          <button
            className="rounded-full p-2 hover:bg-gray-200 sm:hidden"
            onClick={closeModal}
          >
            <FiX />
          </button>
        </div>

        <Radio onRadioChange={onRadioChange} accentColor={accentColor} />
        <CheckboxCategory
          onCategoryChange={onCategoryChange}
          accentColor={accentColor}
        />
        <CheckboxBrand
          onBrandChange={onBrandChange}
          accentColor={accentColor}
        />

        <button
          className={`${btnColor} mb-3 rounded border-none py-2 px-6 text-sm text-white`}
          onClick={() => setProducts(products)}
        >
          CLEAR ALL FILTERS
        </button>
      </div>
    </div>
  )
}

export default Filter
