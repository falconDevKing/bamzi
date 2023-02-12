import Image from "next/image";
import { BsFillShieldFill, BsCreditCardFill } from "react-icons/bs";
import { BiRecycle } from "react-icons/bi";

const RightComponents = () => {
  return (
    <div className="lg:basis-1/3 px-8">
      <div className="drop-shadow-lg rounded-lg">
        <div className="bg-white border rounded px-6 py-6">
          <p className="font-bold py-2 text-lg">Order Summary</p>
          <div className="font-medium text-sm text-gray-900 flex justify-between py-1">
            Shipping fee <span className="">$10.70</span>
          </div>
          <div className="font-medium text-sm text-gray-900 flex justify-between py-1">
            Sub total <span className="">$19.00</span>
          </div>
        </div>

        <div className="bg-white border rounded">
          <p className="font-bold p-6 flex justify-between">
            Total <span className="text-lg">$0.00</span>
          </p>
        </div>

        <div className="bg-primary border rounded">
          <p className="text-gray-300 font-bold p-2 text-center">Buy(4)</p>
        </div>
      </div>
      <div className="drop-shadow-lg rounded-lg md:my-12">
        <div className="bg-gray-200 font-medium text-sm pt-4">
          <p className="text-green-600 grid justify-items-center">
            SECURED PAY
          </p>
          <p className="text-gray-600 text-sm grid justify-items-center px-6 pt-2 text-center">
            Every Payments are secured with Bamzi and additional security is
            ensured with Money Gauranss
          </p>
          <div className="flex justify-center py-6">
            <BsFillShieldFill className="w-[10%] h-1/5 p-1.5" />
            <BiRecycle className="w-[10%] h-1/5 p-1.5" />
            <BsCreditCardFill className="w-[10%] h-1/5 p-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponents;
