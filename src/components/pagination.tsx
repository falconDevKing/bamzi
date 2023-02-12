import React from 'react'

interface PaginationProps {
  productsPerPage: number
  totalProducts: number
  currentPage: number
  paginate: (value: number) => void
  minPageNumberLimit: number
  maxPageNumberLimit: number
  pageNumberLimit: number
  prevPage: () => void
  nextPage: () => void
}

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  paginate,
  minPageNumberLimit,
  maxPageNumberLimit,
  prevPage,
  nextPage,
}: PaginationProps) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="mt-10 flex items-center justify-center">
      <button
        className="border-2 border-primary p-2.5"
        onClick={prevPage}
        disabled={currentPage === pageNumbers[0] ? true : false}
      >
        Prev
      </button>
      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              // id={number}
              className="cursor-pointer list-none border-2 border-primary py-2.5 px-4 active:bg-primary active:text-white"
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          )
        } else {
          return null
        }
      })}
      <button
        className="border-2 border-primary p-2.5"
        onClick={nextPage}
        disabled={currentPage === pageNumbers.length}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
