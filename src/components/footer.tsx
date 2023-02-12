import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

type FooterProps = {
  bgColor: string
  bgC?: string
  btnColor: string
}

export default function Footer({
  bgColor,
  bgC = 'bg-transparent',
  btnColor,
}: FooterProps) {
  return (
    <footer className={`pt-10 text-left text-white ${bgC}`}>
      {/**contact us */}
      <div
        className={`${bgColor} relative grid w-full items-center py-6 px-8 md:mx-auto md:-mb-12 md:w-3/4 md:grid-cols-2 md:rounded-xl lg:w-1/2`}
      >
        <div>
          <h5 className="text-lg font-semibold text-white">Contact Us!</h5>
          <p className="mt-2 text-sm font-light text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <form action="">
          <div className="relative mt-4 flex items-center md:mt-0">
            <input
              type="text"
              name="email"
              className="w-full rounded-3xl border-none py-3 px-4 text-black placeholder:text-gray-500"
              placeholder="Email here"
              autoComplete="off"
              aria-label="Email here"
            />
            <button
              className={`${btnColor} absolute right-1 rounded-3xl py-2 px-6`}
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/**main footer */}
      <div className="w-full bg-darkGray px-20">
        <section className="px-6 pt-8 pb-8 md:container md:mx-auto md:pt-24">
          <div className="grid grid-cols-2 gap-y-6 text-sm md:grid-cols-4">
            <div>
              <Link href="/">
                <a>
                  <Image
                    src={require('../assets/BAMZI.png')}
                    width={'60px'}
                    height={'60px'}
                    alt="bamzi"
                  />
                </a>
              </Link>
              <div className="mt-8 flex space-x-2 lg:space-x-4">
                <Link
                  href="#!"
                  className="rounded-full p-1 text-gray-400 ring-2 ring-gray-400 hover:text-white hover:ring-white"
                >
                  <FaFacebookF size={12} />
                </Link>
                <Link
                  href="#!"
                  className="rounded-full p-1 text-gray-400 ring-2 ring-gray-400 hover:text-white hover:ring-white "
                >
                  <FaTwitter size={12} />
                </Link>
                <Link
                  href="#!"
                  className="rounded-full p-1 text-gray-400 ring-2 ring-gray-400 hover:text-white hover:ring-white"
                >
                  <FaLinkedinIn size={12} />
                </Link>
                <Link
                  href="#!"
                  className="rounded-full p-1 text-gray-400 ring-2 ring-gray-400 hover:text-white hover:ring-white"
                >
                  <FaPinterest size={12} />
                </Link>
              </div>

              <div className="mt-4 pr-8 sm:pr-16 lg:pr-24">
                <Image src={require('../assets/group.png')} alt="" />
              </div>
            </div>

            <div className="text-sm">
              <h6 className="mb-6 font-semibold">Links</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <Link href="/">Home</Link>
                <Link href="#!">Pricing</Link>
                <Link href="#!">Download</Link>
                <Link href="#!">About</Link>
                <Link href="#!">Service</Link>
              </div>
            </div>

            <div>
              <h6 className="mb-6 font-semibold">Support</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <Link href="#!">FAQ</Link>
                <Link href="#!">How To</Link>
                <Link href="#!">Features</Link>
                <Link href="#!">Contact</Link>
                <Link href="#!">Reporting</Link>
              </div>
            </div>

            <div>
              <h6 className="mb-6 font-semibold">Contact Us</h6>
              <div className="flex flex-col space-y-2 font-light text-gray-400">
                <span>+880 1234 5678</span>
                <span>example@email.com</span>
                <span>Rangpur City</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
