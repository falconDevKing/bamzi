import React, { useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Image from "next/image";
import { FaStore } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";

export default function Prelaunch() {
  const url = "http://localhost:4000/bamzi/reservation";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [designation, setDesignation] = useState("");
  const [buyerCols, setBuyerCols] = useState("bg-transparent text-gray-500");
  const [sellerCols, setSellerCols] = useState("bg-lightorange text-white");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: name,
      email: email,
      industry: industry,
      designation: designation,
    });
    // axios
    //   .post(url, {
    //     name: name,
    //     email: email,
    //     industry: industry,
    //     designation: designation,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
    setName("");
    setEmail("");
    setIndustry("");
    setDesignation("");
  };

  return (
    <div className={"w-full my-0 mx-auto bg-bluelight"}>
      <Header secNav="prelaunch" bg />

      <div
        className={
          "flex flex-col lg:flex-row py-6 md:px-16 lg:px-24  px-6 w-full items-center"
        }
      >
        <div className={"text-center"}>
          <h1
            className={
              "sm:text-4xl text-2xl lg:text-6xl text-primary font-bold text-left"
            }
          >
            Get Ready, Online Stores Coming Through
          </h1>
          <p
            className={
              "text-left text-gray-500 mt-4 sm:text-base text-sm lg:text-xl"
            }
          >
            Get awesome rewards and discounts, be the first to book your space
            in this awesome digital world. Join us on the train to greatness.
          </p>

          <form
            className={"py-0 mt-8 lg:w-11/12 w-full"}
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              className={
                "py-3 px-4 min-h-7 my-2 mx-0 rounded-3xl outline-none border-none w-full"
              }
              type="text"
              id="name"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />

            <div className={"flex flex-row justify-between w-full space-x-4"}>
              <input
                type="text"
                id="email"
                value={email}
                className={" w-1/2 sm:w-2/3 px-4 py-3 my-2 rounded-3xl"}
                placeholder="Email here"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                id="industry"
                value={industry}
                className={"w-1/2 sm:w-1/3 px-4 py-3 my-2 rounded-3xl"}
                placeholder="Industry"
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>

            <div className={"grid grid-cols-2 gap-1.5 my-2 mx-0"}>
              <div
                className={`${buyerCols} flex cursor-pointer border-2 border-lightorange rounded-3xl bg-transparent items-center justify-center py-2 px-0 space-x-4`}
                onClick={() => {
                  setDesignation("Buyer");
                  setBuyerCols("bg-lightorange text-white");
                  setSellerCols("bg-transparent text-gray-500");
                }}
              >
                <MdShoppingCart size={32} /> &nbsp; Buyer
              </div>
              <div
                className={`${sellerCols} flex cursor-pointer rounded-3xl items-center justify-center py-2 px-0 border-2 border-lightorange space-x-4`}
                onClick={() => {
                  setDesignation("Seller");
                  setSellerCols("bg-lightorange text-white");
                  setBuyerCols("bg-transparent text-gray-500");
                  console.log(designation);
                  console.log(sellerCols);
                }}
              >
                <FaStore size={32} /> &nbsp; Seller
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className={
                  "bg-primary text-white py-4 px-0 sm:px-16 my-2 mx-0 rounded-md text-center font-bold w-full sm:w-5/6 "
                }
                style={{ backgroundColor: "#000033" }}
                onClick={(e) => handleSubmit(e)}
              >
                Book your reservation
              </button>
            </div>
          </form>
        </div>

        <div className={"bg-shapes bg-cover"}>
          <Image
            src={require("../assets/Mask.png")}
            className={"object-cover max-w-full h-auto"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
