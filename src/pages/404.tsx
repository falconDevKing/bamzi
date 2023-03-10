import React from "react";
import Link from "next/link";
import { IoIosWarning } from "react-icons/io";
import Header from "../components/header";
import Image from "next/image";

export default function Errorpage() {
  return (
    <div>
      <div className={"w-full my-0 mx-auto h-screen bg-bluelight"}>
        <Header bg />
        <div
          className={
            "flex lg:flex-row flex-col my-10 mx-auto lg:py-12 lg:px-20 sm:py-2 py-0 sm:px-6 px-0 justify-between items-center sm:mt-0 mt-16"
          }
        >
          <div
            className={
              "lg:w-1/2 w-full lg:pl-16 pl-0 bg-contain bg-left bg-no-repeat lg:bg-errorbg bg-none"
            }
          >
            <div>
              <h1
                className={
                  "lg:text-right text-center text-3xl text-gray-500 mx-auto"
                }
              >
                Page Not Found
              </h1>
            </div>

            <div className={"flex justify-center items-start text-[#f6da8b]"}>
              <Image
                src={require("../assets/Cart404.png")}
                className={"sm:w-[400px] w-[320px]"}
                alt=""
              />
            </div>
          </div>

          <div
            className={
              "lg:bg-errorbg bg-none bg-no-repeat bg-right bg-contain lg:w-1/2 w-full lg:pr-16 pr-0 lg:mt-0 mt-4 items-center mb-16"
            }
          >
            <div className={"flex flex-col text-gray-500 py-0 px-6"}>
              <span className={"sm:text-base text-sm inline-block"}>
                <IoIosWarning
                  size={24}
                  color={"#f1a79c"}
                  style={{ display: "inline-block" }}
                />{" "}
                OOPs!!! Looks like the page you are looking for is not available
                or is missing, kindly contact us for any further problem.
              </span>

              <Link href="/" className="p-0">
                <button
                  className={
                    "bg-primary text-white py-4 px-0 w-full sm:text-base text-sm text-center sm:font-bold font-normal mt-4 rounded-lg"
                  }
                >
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
