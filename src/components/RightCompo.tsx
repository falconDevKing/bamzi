import Image from 'next/image'

const RightCompo = () => {
  return (
    <div className="px-8 py-10 lg:basis-1/3">
      <div>
        <Image
          src={require('assets/apple-watch-desc.jpg')}
          alt=""
          className=" h-20 w-80 rounded-l-md rounded-r-sm rounded-t-lg rounded-b-md object-cover"
        />
      </div>
      <div className="py-4 text-sm font-bold text-gray-500">Recent Search</div>
      <div className="">
        <div className="w-80">
          <Image
            src={require('assets/Group 11475.png')}
            alt=""
            className=" mb-6 rounded-md shadow-md"
          />
          <Image
            src={require('assets/Group 11523.png')}
            alt=""
            className=" rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  )
}

export default RightCompo
