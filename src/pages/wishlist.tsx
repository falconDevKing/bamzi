import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/header'
import LeftCompo from '../components/LeftCompo'
import RightCompo from '../components/RightCompo'

const WishList = () => {
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/bamzi/wishlist/')
      setProducts(res.data.response)
    }

    fetchData()
  }, [])

  return (
    <div>
      <Header pryNav="user" secNav="user" />
      <div className="bodyGray lg:flex">
        <LeftCompo products={products} />
        <RightCompo />
      </div>
    </div>
  )
}

WishList.auth = true

export default WishList
