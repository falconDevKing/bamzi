import React from "react";
import Image from "next/image";

const AuthCart = () => {
  return (
    <div className="xl:w-1/2 lg:w-2/5 xl:h-[72vh] lg:h-[50vh] h-[40vh] lg:mt-[100px] xl:mt-0 bg-primary rounded-r-2xl relative">
      <Image
        src={require("../../assets/home-image.jpg")}
        alt=""
        className="-mt-4 mx-auto lg:rounded-lg lg:h-[20%] lg:w-auto h-[30vh] sm:h-[60vh] w-full object-cover object-center"
        layout="fill"
      />
    </div>
  );
};

export default AuthCart;
