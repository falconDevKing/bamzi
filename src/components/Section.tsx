import image3 from '../assets/Mask.png'
import Image from 'next/image'

const Section = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="px-16 lg:flex">
        <div className="py-24 xl:px-12">
          <h3 className="text-lg font-bold leading-normal text-primary  md:text-5xl">
            One step to a Digital Shop.
          </h3>
          <p className="mt-6 text-sm text-gray-400 md:text-lg">
            Every Product deserves a digital presence. Create your shop from
            Bamzi and have a wide reach of market audience. Its free, simple and
            flexible to use.
          </p>

          <div className="flex w-full pt-9">
            <button className="mx-4 rounded-lg border bg-primary py-2 px-7 text-white sm:text-white">
              Go Shopping
            </button>
            <button className="mx-4 rounded-lg border bg-secondary py-2 px-7 text-white sm:text-white">
              Get Registered
            </button>
          </div>
        </div>
        <div className="flex-image">
          <Image
            src={image3}
            alt="features"
            className="w-full self-center md:w-3/4 lg:w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Section
