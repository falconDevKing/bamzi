import React, { useState, useEffect } from "react";
import {
  FiGrid,
  FiPlus,
  FiSearch,
  FiAlertCircle,
  FiEdit3,
  FiTrash2,
  FiFilter,
} from "react-icons/fi";
import { MdOutlineAddBusiness } from "react-icons/md";
import Select from "react-select";

import {
  checkboxBrandData,
  checkboxCategoryData,
  colors,
  ram,
  sizes,
} from "../utils/data";
import Card from "../components/card";
import Pagination from "../components/pagination";
import Sidebar from "../components/sidebar";
import Filter from "../components/filter";
import SellersHeader from "../components/SellersHeader";
import axios from "axios";

export default function SellersBoard() {
  const [products, setProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const productsPerPage = 6;
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [productID, setProductID] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedRam, setSelectedRam] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [texture, setTexture] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let selectedColors = [];
  const handleColor = () => {
    if (selectedColor) {
      selectedColor.map((item) => {
        selectedColors.push(item.value);
      });
    }
  };

  let selectedRams = [];
  const handleRam = () => {
    if (selectedRam) {
      selectedRam.map((item) => {
        selectedRams.push(item.value);
      });
    }
  };

  let selectedSizes = [];
  const handleSize = () => {
    if (selectedSize) {
      selectedSize.map((item) => {
        selectedSizes.push(item.value);
      });
    }
  };

  const inputStyles =
    "px-2 py-1.5 border border-gray-300 rounded  w-full placeholder:text-gray-400 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-0";

  const closeModal = () => {
    setShowModal(false);
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image[0]);
    data.append("upload_preset", "bamzi_store");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dayropo/image/upload",
      data
    );
    setSelectedImages((prevState) => [...prevState, res.data.secure_url]);
  };

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:4000/bamzi/products/").then((response) => {
        console.log(response.data.response);
        const fetchedData = response.data.response;
        setProducts(fetchedData);
      });
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleColor();
    handleSize();
    handleRam();
    axios
      .post("http://localhost:4000/bamzi/products/add", {
        name: title,
        description: description,
        category: selectedCategory.value,
        subCategory: subCategory,
        brand: selectedBrand.value,
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
        console.log(res);
        setTitle("");
        setDescription("");
        setSelectedCategory("");
        setSubCategory("");
        setSelectedBrand("");
        setPrice("");
        setSelectedColor("");
        setSelectedRam("");
        setSelectedSize("");
        setLength("");
        setTexture("");
        setStock("");
        setImage("");
        setAddProduct(false);
        return res;
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    handleColor();
    handleSize();
    handleRam();
    axios
      .put("http://localhost:4000/bamzi/products/update", {
        productID: productID,
        name: title,
        description: description,
        category: selectedCategory.value,
        subCategory: subCategory,
        brand: selectedBrand.value,
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
        console.log(res);
        setProductID("");
        setTitle("");
        setDescription("");
        setSelectedCategory("");
        setSubCategory("");
        setSelectedBrand("");
        setPrice("");
        setSelectedColor("");
        setSelectedRam("");
        setSelectedSize("");
        setLength("");
        setTexture("");
        setStock("");
        setImage("");
        setEditProduct(false);
        return res;
      });
  };

  const deleteProduct = async (productID) => {
    const res = await axios.post(
      "http://localhost:4000/bamzi/products/delete",
      { productID: productID }
    );
    return res;
  };

  return (
    <div className="font-poppins lg:grid lg:grid-cols-6 min-h-screen relative">
      <Sidebar showSidebar={showSidebar} page="sellers-board" />

      <div className="col-span-5 bg-gray-100 px-6 py-3 sm:px-16 sm:py-8">
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />

        {/**show products */}
        {!addProduct && !editProduct && (
          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Filter
              showModal={showModal}
              closeModal={closeModal}
              products={products}
              setProducts={setProducts}
              btnColor="bg-primary"
              accentColor="accent-primary"
            />

            <div className="sm:col-span-1 lg:col-span-2">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-3">
                <form action="" className="w-full sm:w-1/2">
                  <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search here"
                      autoComplete="off"
                      aria-label="Search anything"
                      className="w-full p-2 placeholder:text-gray-400 lg:text-sm text-xs text-black border-none rounded-2xl ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2"
                    />
                    <FiSearch className="lg:w-5 lg:h-5 w-4 h-4 absolute right-2" />
                  </div>
                </form>
                <div className="flex justify-center sm:justify-between items-center space-x-2 w-full mt-3 sm:w-auto sm:mt-0 ">
                  <span
                    className="sm:hidden flex items-center p-2 bg-white rounded-md border-none shadow text-sm"
                    onClick={() => setShowModal(true)}
                  >
                    Filter <FiFilter className="ml-4" />
                  </span>
                  <span
                    className="flex items-center p-2 bg-white rounded-md border-none shadow text-sm cursor-pointer"
                    onClick={() => setAddProduct(true)}
                  >
                    <p className="lg:block hidden">Add Product</p>
                    <FiPlus className="lg:ml-4 ml-0" />
                  </span>
                  <span className="p-2 bg-white rounded-md border-none shadow">
                    <FiGrid />
                  </span>
                </div>
              </div>
              <span className="text-sm">7,618 results found in 5ms</span>

              {/**cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                {currentProducts.map((product) => (
                  <div key={product._id}>
                    <Card product={product} btnColor="bg-primary" />
                    <div className="flex items-center -mt-1.5 border-none shadow text-sm">
                      <span className="flex items-center justify-center border-none rounded-bl-md bg-secondary text-white py-2 w-1/3 cursor-pointer">
                        <FiAlertCircle className="mr-2" /> Disable
                      </span>
                      <span
                        className="flex items-center justify-center bg-gray-200 py-2 w-1/3 cursor-pointer"
                        onClick={() => {
                          setProductID(product._id);
                          setEditProduct(true);
                        }}
                      >
                        <FiEdit3 className="mr-2" /> Edit
                      </span>
                      <span
                        className="flex items-center justify-center border-none rounded-br-md bg-primary text-white py-2 w-1/3 cursor-pointer"
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
            <div className="flex mt-4 py-4 w-full items-center justify-between">
              <span className="flex space-x-2 text-primary items-center">
                <MdOutlineAddBusiness size={32} />
                <p className="md:text-lg text-base font-semibold text-black">
                  Add Product
                </p>
              </span>
              <div className="md:w-4/12 w-1/2 flex justify-end space-x-2">
                <button
                  className="bg-red-500 text-white py-2 md:w-4/12 w-1/2 rounded-lg text-center md:text-base text-sm"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setSelectedCategory("");
                    setSubCategory("");
                    setSelectedBrand("");
                    setPrice("");
                    setSelectedColor("");
                    setSelectedRam("");
                    setSelectedSize("");
                    setLength("");
                    setTexture("");
                    setStock("");
                    setImage("");
                    setAddProduct(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white py-2 md:w-4/12 w-1/2 rounded-lg text-center md:text-base text-sm"
                  onClick={(e) => handleSubmit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="bg-white p-4 rounded font-semibold shadow">
                Product Info
              </div>

              <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 bg-white p-4 rounded shadow">
                <div className="space-y-4 md:w-1/2 w-full">
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
                      rows="4"
                      placeholder="Product Description Max (40)"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={checkboxCategoryData}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={setSelectedCategory}
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
                      options={checkboxBrandData}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={setSelectedBrand}
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
                      className="w-1/2 md:4/12 py-1 bg-gray-200 rounded border border-gray-600 text-sm"
                      onClick={() => uploadImage()}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div className="space-y-4 md:w-1/2 w-full">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={colors}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={ram}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={setSelectedRam}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={sizes}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={setSelectedSize}
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
            <div className="flex mt-4 py-4 w-full items-center justify-between">
              <span className="flex space-x-2 text-primary items-center">
                <MdOutlineAddBusiness size={32} />
                <p className="md:text-lg text-base font-semibold text-black">
                  Edit Product
                </p>
              </span>
              <div className="md:w-4/12 w-1/2 flex justify-end space-x-2">
                <button
                  className="bg-red-500 text-white py-2 md:w-4/12 w-1/2 rounded-lg text-center"
                  onClick={() => {
                    setTitle("");
                    setDescription("");
                    setSelectedCategory("");
                    setSubCategory("");
                    setSelectedBrand("");
                    setPrice("");
                    setSelectedColor("");
                    setSelectedRam("");
                    setSelectedSize("");
                    setLength("");
                    setTexture("");
                    setStock("");
                    setImage("");
                    setEditProduct(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-primary text-white py-2 md:w-4/12 w-1/2 rounded-lg text-center"
                  onClick={(e) => handleEdit(e)}
                >
                  Save
                </button>
              </div>
            </div>

            <div className="w-full space-y-2">
              <div className="bg-white p-4 rounded font-semibold shadow">
                Product Info
              </div>

              <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:space-y-0 bg-white p-4 rounded shadow">
                <div className="space-y-4 md:w-1/2 w-full">
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
                      rows="4"
                      placeholder="Product Description Max (40)"
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="space-y-1">
                    <span>Category</span>
                    <Select
                      options={checkboxCategoryData}
                      placeholder="Please choose"
                      defaultValue={selectedCategory}
                      onChange={setSelectedCategory}
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
                      options={checkboxBrandData}
                      placeholder="Please choose"
                      defaultValue={selectedBrand}
                      onChange={setSelectedBrand}
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
                      className="w-1/2 md:4/12 py-1 bg-gray-200 rounded border border-gray-600 text-sm"
                      onClick={() => uploadImage()}
                    >
                      Upload
                    </button>
                  </div>
                </div>

                <div className="space-y-4 md:w-1/2 w-full">
                  <div className="space-y-1">
                    <span>Color</span>
                    <Select
                      options={colors}
                      placeholder="Please choose"
                      defaultValue={selectedColor}
                      onChange={setSelectedColor}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>RAM</span>
                    <Select
                      options={ram}
                      placeholder="Please choose"
                      defaultValue={selectedRam}
                      onChange={setSelectedRam}
                      isMulti
                    />
                  </div>

                  <div className="space-y-1">
                    <span>Size</span>
                    <Select
                      options={sizes}
                      placeholder="Please choose"
                      defaultValue={selectedSize}
                      onChange={setSelectedSize}
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
  );
}
