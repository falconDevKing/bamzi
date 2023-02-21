import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from 'react'
import {
  FiGrid,
  FiPlus,
  FiSearch,
  FiAlertCircle,
  FiEdit3,
  FiTrash2,
  FiFilter,
} from 'react-icons/fi'
import { MdOutlineAddBusiness } from 'react-icons/md'
import Select from 'react-select'

import {
  checkboxBrandData,
  checkboxCategoryData,
  colors,
  ram,
  sizes,
} from 'utils/data'
import Card from 'components/card'
import Pagination from 'components/pagination'
import Sidebar from 'components/sidebar'
import Filter from 'components/filter'
import SellersHeader from 'components/SellersHeader'
import axios from 'axios'

export default function SellersBoard() {
  const [products, setProducts] = useState<any[]>([])
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageNumberLimit = 5
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0)
  const productsPerPage = 6
  const [addProduct, setAddProduct] = useState<boolean>(false)
  const [editProduct, setEditProduct] = useState<boolean>(false)
  const [productID, setProductID] = useState<string>('')

  const [selectedCategory, setSelectedCategory] = useState<readonly string[]>(
    []
  )
  const [selectedBrand, setSelectedBrand] = useState<readonly string[]>([])
  const [selectedColor, setSelectedColor] = useState<readonly string[]>([])
  const [selectedRam, setSelectedRam] = useState<readonly string[]>([])
  const [selectedSize, setSelectedSize] = useState<readonly string[]>([])
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [subCategory, setSubCategory] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [length, setLength] = useState<string>('')
  const [texture, setTexture] = useState<string>('')
  const [stock, setStock] = useState<string>('')
  const [image, setImage] = useState<any>('')
  const [selectedImages, setSelectedImages] = useState<string[]>([])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const prevPage = () => {
    setCurrentPage(currentPage - 1)

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
    }
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
    }
  }

  let selectedColors: string[] = []
  const handleColor = () => {
    if (selectedColor) {
      selectedColor.map((item) => {
        selectedColors.push(item)
      })
    }
  }

  let selectedRams: string[] = []
  const handleRam = () => {
    if (selectedRam) {
      selectedRam.map((item) => {
        selectedRams.push(item)
      })
    }
  }

  let selectedSizes: string[] = []
  const handleSize = () => {
    if (selectedSize) {
      selectedSize.map((item) => {
        selectedSizes.push(item)
      })
    }
  }

  const inputStyles =
    'px-2 py-1.5 border border-gray-300 rounded  w-full placeholder:text-gray-400 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0'

  const closeModal = () => {
    setShowModal(false)
  }

  const uploadImage = async () => {
    const data = new FormData()
    data.append('file', image[0])
    data.append('upload_preset', 'bamzi_store')

    const res = await axios.post(
      'https://api.cloudinary.com/v1_1/dayropo/image/upload',
      data
    )
    setSelectedImages((prevState) => [...prevState, res.data.secure_url])
  }

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:3000/bamzi/products/').then((response) => {
        console.log(response.data.response)
        const fetchedData = response.data.response
        setProducts(fetchedData)
      })
    }

    fetchData()
  }, [])

  const handleSubmit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    handleColor()
    handleSize()
    handleRam()
    axios
      .post('http://localhost:3000/bamzi/products/add', {
        name: title,
        description: description,
        category: selectedCategory,
        subCategory: subCategory,
        brand: selectedBrand,
        price: price,
        images: selectedImages,
        colors: selectedColors,
        ram: selectedRams,
        sizes: selectedSizes,
        length: length,
        texture: texture,
        stock: stock,
      })
      .then((res) => {
        console.log(res)
        setTitle('')
        setDescription('')
        setSelectedCategory([''])
        setSubCategory('')
        setSelectedBrand([''])
        setPrice('')
        setSelectedColor([''])
        setSelectedRam([''])
        setSelectedSize([''])
        setLength('')
        setTexture('')
        setStock('')
        setImage('')
        setAddProduct(false)
        return res
      })
  }

  const handleEdit = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
    handleColor()
    handleSize()
    handleRam()
    axios
      .put('http://localhost:3000/bamzi/products/update', {
        productID: productID,
        name: title,
        description: description,
        category: selectedCategory,
        subCategory: subCategory,
        brand: selectedBrand,
        price: price,
        images: selectedImages,
        colors: selectedColors,
        ram: selectedRams,
        sizes: selectedSizes,
        length: length,
        texture: texture,
        stock: stock,
      })
      .then((res) => {
        console.log(res)
        setProductID('')
        setTitle('')
        setDescription('')
        setSelectedCategory([''])
        setSubCategory('')
        setSelectedBrand([''])
        setPrice('')
        setSelectedColor([''])
        setSelectedRam([''])
        setSelectedSize([''])
        setLength('')
        setTexture('')
        setStock('')
        setImage('')
        setEditProduct(false)
        return res
      })
  }

  const deleteProduct = async (productID: string) => {
    const res = await axios.post(
      'http://localhost:3000/bamzi/products/delete',
      { productID: productID }
    )
    return res
  }

  const SelectCompIsh = (array: { label: string; value: string }[]) => {
    return array.map((option) => option.value)
  }

  return (
    <div className="relative min-h-screen font-poppins lg:grid lg:grid-cols-6">
      <Sidebar showSidebar={showSidebar} page="sellers-board" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        {/**show products */}
        {!addProduct && !editProduct && (
          <div className="mt-8 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Filter
              showModal={showModal}
              closeModal={closeModal}
              products={products}
              setProducts={setProducts}
              btnColor="bg-primary"
              accentColor="accent-primary"
            />

            <div className="sm:col-span-1 lg:col-span-2">
              <div className="mb-3 flex flex-col items-center justify-between sm:flex-row">
                <form action="" className="w-full sm:w-1/2">
                  <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here"
                      autoComplete="off"
                      aria-label="Search anything"
                      className="w-full rounded-2xl border-none p-2 text-xs text-black ring-2 ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-500 lg:text-sm"
                    />
                    <FiSearch className="absolute right-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                </form>
                <div className="mt-3 flex w-full items-center justify-center space-x-2 sm:mt-0 sm:w-auto sm:justify-between ">
                  <span
                    className="flex items-center rounded-md border-none bg-white p-2 text-sm shadow sm:hidden"
                    onClick={() => setShowModal(true)}
                  >
                    Filter <FiFilter className="ml-4" />
                  </span>
                  <span
                    className="flex cursor-pointer items-center rounded-md border-none bg-white p-2 text-sm shadow"
                    onClick={() => setAddProduct(true)}
                  >
                    <p className="hidden lg:block">Add Product</p>
                    <FiPlus className="ml-0 lg:ml-4" />
                  </span>
                  <span className="rounded-md border-none bg-white p-2 shadow">
                    <FiGrid />
                  </span>
                </div>
              </div>
              <span className="text-sm">7,618 results found in 5ms</span>

              {/**cards */}
              <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-2">
                {currentProducts.map((product) => (
                  <div key={product._id}>
                    <Card product={product} btnColor="bg-primary" />
                    <div className="-mt-1.5 flex items-center border-none text-sm shadow">
                      <span className="flex w-1/3 cursor-pointer items-center justify-center rounded-bl-md border-none bg-secondary py-2 text-white">
                        <FiAlertCircle className="mr-2" /> Disable
                      </span>
                      <span
                        className="flex w-1/3 cursor-pointer items-center justify-center bg-gray-200 py-2"
                        onClick={() => {
                          setProductID(product._id)
                          setEditProduct(true)
                        }}
                      >
                        <FiEdit3 className="mr-2" /> Edit
                      </span>
                      <span
                        className="flex w-1/3 cursor-pointer items-center justify-center rounded-br-md border-none bg-primary py-2 text-white"
                        onClick={() => deleteProduct(product._id)}
                      >
                        <FiTrash2 className="mr-2" /> Delete
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              {/**cards */}

              <Pagination
                productsPerPage={productsPerPage}
                totalProducts={products.length}
                paginate={paginate}
                minPageNumberLimit={minPageNumberLimit}
                pageNumberLimit={pageNumberLimit}
                maxPageNumberLimit={maxPageNumberLimit}
                currentPage={currentPage}
                prevPage={prevPage}
                nextPage={nextPage}
              />
            </div>
          </div>
        )}
        {/**show products */}

        {/**add product */}
        {addProduct && !editProduct && (
          <div>
            <div className="mt-4 flex w-full items-center justify-between py-4">
              <span className="flex items-center space-x-2 text-primary">
                <MdOutlineAddBusiness size={32} />
                <p className="text-base font-semibold text-black md:text-lg">
                  Add Product
                </p>
              </span>
              <div className="flex w-1/2 justify-end space-x-2 md:w-4/12">
                <button
                  className="w-1/2 rounded-lg bg-red-500 py-2 text-center text-sm text-white md:w-4/12 md:text-base"
                  onClick={() => {
                    setTitle('')
                    setDescription('')
                    setSelectedCategory([''])
                    setSubCategory('')
                    setSelectedBrand([''])
                    setPrice('')
                    setSelectedColor([''])
                    setSelectedRam([''])
                    setSelectedSize([''])
                    setLength('')
                    setTexture('')
                    setStock('')
                    setImage('')
                    setAddProduct(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className="w-1/2 rounded-lg bg-primary py-2 text-center text-sm text-white md:w-4/12 md:text-base"
                  onClick={(e) => handleSubmit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="rounded bg-white p-4 font-semibold shadow">
                Product Info
              </div>

              <div className="flex flex-col space-y-4 rounded bg-white p-4 shadow md:flex-row md:space-x-4 md:space-y-0">
                <div className="w-full space-y-4 md:w-1/2">
                  <div className="space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      className={inputStyles}
                      placeholder="Product Title"
                      autoComplete=""
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={description}
                      className={inputStyles}
                      rows={4}
                      placeholder="Product Description Max (40)"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={SelectCompIsh(checkboxCategoryData)}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={(e) => setSelectedCategory([e as string])}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subCategory">Sub-Category</label>
                    <input
                      type="text"
                      id="subCategory"
                      value={subCategory}
                      className={inputStyles}
                      placeholder="Sub-Category"
                      autoComplete=""
                      onChange={(e) => setSubCategory(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Brand</span>
                    <Select
                      options={SelectCompIsh(checkboxBrandData)}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={(e) => setSelectedBrand([e as string])}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      className={inputStyles}
                      placeholder="Price"
                      autoComplete=""
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="images">Images</label>
                    <input
                      type="file"
                      id="images"
                      className={inputStyles}
                      onChange={(e) => setImage(e.target.files)}
                    />
                    <button
                      className="md:4/12 w-1/2 rounded border border-gray-600 bg-gray-200 py-1 text-sm"
                      onClick={() => uploadImage()}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div className="w-full space-y-4 md:w-1/2">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={SelectCompIsh(colors)}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={(e) => setSelectedColor(e)}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={SelectCompIsh(ram)}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={(e) => setSelectedRam(e)}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={SelectCompIsh(sizes)}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={(e) => setSelectedSize(e)}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="length">Length</label>
                    <input
                      type="text"
                      id="length"
                      value={length}
                      className={inputStyles}
                      placeholder="Length"
                      autoComplete=""
                      onChange={(e) => setLength(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="texture">Texture</label>
                    <input
                      type="text"
                      id="texture"
                      value={texture}
                      className={inputStyles}
                      placeholder="Texture"
                      autoComplete=""
                      onChange={(e) => setTexture(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      value={stock}
                      className={inputStyles}
                      placeholder="Stock"
                      autoComplete=""
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/**add product */}

        {/**edit product */}
        {!addProduct && editProduct && (
          <div>
            <div className="mt-4 flex w-full items-center justify-between py-4">
              <span className="flex items-center space-x-2 text-primary">
                <MdOutlineAddBusiness size={32} />
                <p className="text-base font-semibold text-black md:text-lg">
                  Edit Product
                </p>
              </span>
              <div className="flex w-1/2 justify-end space-x-2 md:w-4/12">
                <button
                  className="w-1/2 rounded-lg bg-red-500 py-2 text-center text-white md:w-4/12"
                  onClick={() => {
                    setTitle('')
                    setDescription('')
                    setSelectedCategory([''])
                    setSubCategory('')
                    setSelectedBrand([''])
                    setPrice('')
                    setSelectedColor([''])
                    setSelectedRam([''])
                    setSelectedSize([''])
                    setLength('')
                    setTexture('')
                    setStock('')
                    setImage('')
                    setEditProduct(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className="w-1/2 rounded-lg bg-primary py-2 text-center text-white md:w-4/12"
                  onClick={(e) => handleEdit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="rounded bg-white p-4 font-semibold shadow">
                Product Info
              </div>

              <div className="flex flex-col space-y-4 rounded bg-white p-4 shadow md:flex-row md:space-x-4 md:space-y-0">
                <div className="w-full space-y-4 md:w-1/2">
                  <div className="space-y-1">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      id="title"
                      value={title}
                      className={inputStyles}
                      placeholder="Product Title"
                      autoComplete=""
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="description">Description</label>
                    <textarea
                      id="description"
                      value={description}
                      className={inputStyles}
                      rows={4}
                      placeholder="Product Description Max (40)"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={SelectCompIsh(checkboxCategoryData)}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={(e) => setSelectedCategory([e as string])}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subCategory">Sub-Category</label>
                    <input
                      type="text"
                      id="subCategory"
                      value={subCategory}
                      className={inputStyles}
                      placeholder="Sub-Category"
                      autoComplete=""
                      onChange={(e) => setSubCategory(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Brand</span>
                    <Select
                      options={SelectCompIsh(checkboxBrandData)}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={(e) => setSelectedBrand([e as string])}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      className={inputStyles}
                      placeholder="Price"
                      autoComplete=""
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="images">Images</label>
                    <input
                      type="file"
                      id="images"
                      className={inputStyles}
                      onChange={(e) => setImage(e.target.files)}
                    />
                    <button
                      className="md:4/12 w-1/2 rounded border border-gray-600 bg-gray-200 py-1 text-sm"
                      onClick={() => uploadImage()}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div className="w-full space-y-4 md:w-1/2">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={SelectCompIsh(colors)}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={SelectCompIsh(ram)}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={(e) => setSelectedRam(e)}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={SelectCompIsh(sizes)}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={(e) => setSelectedSize(e)}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="length">Length</label>
                    <input
                      type="text"
                      id="length"
                      value={length}
                      className={inputStyles}
                      placeholder="Length"
                      autoComplete=""
                      onChange={(e) => setLength(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="texture">Texture</label>
                    <input
                      type="text"
                      id="texture"
                      value={texture}
                      className={inputStyles}
                      placeholder="Texture"
                      autoComplete=""
                      onChange={(e) => setTexture(e.target.value)}
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      value={stock}
                      className={inputStyles}
                      placeholder="Stock"
                      autoComplete=""
                      onChange={(e) => setStock(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/**edit product */}
      </div>
    </div>
  )
}

SellersBoard.auth = true
