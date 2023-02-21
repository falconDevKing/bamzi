import image10 from 'assets/D6-image2.jpg'
import image11 from 'assets/Card-1 Apple Watch.png'
import image12 from 'assets/Group 11523.png'
import image13 from 'assets/D1-image3.png'
import Image from 'next/image'

const FeaturedProducts = () => {
  return (
    <div className="px-28">
      <div className="mx-4 py-8 font-bold text-gray-700 sm:text-xl lg:text-2xl">
        Featured Products
      </div>
      <div className="flex py-3">
        <button className="rounded-lg px-4 py-4 text-lg text-gray-500">
          Trending item
        </button>
        <button className="mx-4 rounded-lg bg-primary text-lg text-white md:px-4 lg:px-10">
          New Arrivals
        </button>
        <button className="rounded-lg px-6 py-4 text-lg text-gray-500">
          Best Sale
        </button>
      </div>
      <div className="flex py-3">
        <div className="">
          <div className="rounded-lg border">
            <Image
              src={image10}
              alt=""
              className="h-fit w-full object-cover object-center"
            />
          </div>
          <div className="flex pt-3">
            <div className="rounded-lg">
              <Image src={image12} alt="" className="h-full w-full" />
            </div>
            <div className="rounded-lg">
              <Image src={image11} alt="" className="h-full w-full" />
            </div>
          </div>
        </div>

        <div className="mx-6 rounded-lg">
          <Image
            src={image13}
            alt=""
            className="h-fit w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
