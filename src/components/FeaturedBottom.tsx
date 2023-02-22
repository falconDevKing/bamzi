import image14 from 'assets/D1-image6.png'
import Image from 'next/image'

const FeaturedBottom = () => {
  return (
    <div className="mt-28 bg-bgcolors sm:px-16 lg:px-24 xl:px-28">
      <div className="flex">
        <div className="">
          <div className="py-10 font-bold text-primary sm:text-2xl lg:text-4xl xl:text-5xl">
            Find your <span className="text-secondary">favourite</span> online
            store on the go anytime anywhere.
          </div>
          <div className="py-6">
            <button className="rounded-xl border bg-primary text-lg font-bold text-white sm:py-3 sm:px-8 lg:py-4 lg:px-14">
              Go Shopping
            </button>
          </div>
        </div>
        <div className="relative top-3">
          <Image src={image14} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedBottom
