import React from 'react'
import checkout from '../styles/checkout.module.css'
import Header from '../components/header'
import Image from 'next/image'
import { BsFillShieldFill, BsCreditCardFill } from 'react-icons/bs'
import { BiRecycle } from 'react-icons/bi'

export default function Checkout() {
  return (
    <div>
      <div className={'my-0 mx-auto w-full bg-fadewhite'}>
        <Header pryNav="user" secNav="user" />

        <div
          className={
            'mt-5 flex flex-col items-center justify-center py-5 px-0 md:w-full md:px-12 lg:flex-row lg:items-start lg:justify-between lg:space-x-8 lg:px-16'
          }
        >
          <div className={'md:3/4 w-full md:m-0 lg:w-2/3'}>
            <div
              className={
                'rounded-md border-0 border-solid bg-white py-4 px-4 font-bold'
              }
            >
              Checkout
            </div>

            <div
              className={
                'mt-2 flex items-center justify-between rounded-md border-0 border-solid bg-white py-0.5 px-4 font-bold'
              }
            >
              <h4>Shipping Information</h4>
              <button
                className={'cursor-pointer border-0 bg-white p-4 text-2xl'}
              >
                +
              </button>
            </div>

            <div
              className={
                'mt-2 rounded-md border-0 bg-white py-4 px-4 text-base'
              }
            >
              <form method="get" action="">
                <h6>Basic Info</h6>

                <div className={'flex w-full flex-col md:flex-row'}>
                  <input
                    type="text"
                    name="name"
                    className={
                      'mr-3 w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="Name"
                  />
                  <input
                    type="number"
                    name="number"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="+234     Phone Number"
                  />
                </div>

                <h6>Address</h6>

                <div className={'flex w-full flex-col md:flex-row'}>
                  <input
                    type="text"
                    name="address"
                    className={
                      'mr-2 w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-2/5'
                    }
                    placeholder="Street Address/Apartment Unit"
                  />
                  <input
                    type="text"
                    name="state"
                    className={
                      'mr-2 w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/3'
                    }
                    placeholder="State/Region"
                  />
                  <input
                    type="text"
                    name="city"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/4'
                    }
                    placeholder="City"
                  />
                </div>
                <div className={'mt-2 flex w-full md:w-4/5'}>
                  <input
                    type="text"
                    name="country"
                    className={
                      'mr-2 w-1/2 rounded-md border border-solid border-gray-400 py-3 px-6'
                    }
                    placeholder="Nigeria"
                  />
                  <input
                    type="text"
                    name="Zip Code"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="Zip Code"
                  />
                </div>
                <div className={'mt-6 flex items-center justify-between'}>
                  <button
                    type="submit"
                    className={
                      'w-1/2 rounded-md bg-primary py-3 px-6 text-sm text-white md:text-base'
                    }
                    style={{ backgroundColor: '#000033' }}
                  >
                    Save and Continue
                  </button>
                  <div className={'flex items-center space-x-2'}>
                    <input type="checkbox" className={checkout.checkbox} />
                    <label>Set as default</label>
                  </div>
                </div>
              </form>
            </div>

            <div className={checkout.payment}>
              <div
                className={
                  'mt-8 rounded-md border-0 border-solid bg-white py-4 px-4 font-bold'
                }
              >
                Payment Method
              </div>

              <div
                className={
                  'mt-1 flex w-full justify-evenly space-x-4 rounded-md border-0 border-solid bg-white py-7 px-4 font-bold'
                }
              >
                <div>
                  <Image
                    src={require('assets/D4a-image9.png')}
                    width={'60'}
                    height={'60'}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('assets/M2-image10.png')}
                    width={'60'}
                    height={'60'}
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    src={require('assets/GooglePay.png')}
                    width={'60'}
                    height={'60'}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div
              className={
                'mt-8 mb-16 rounded-md border-0 border-solid bg-white py-4 px-4 font-bold'
              }
            >
              Shopping Summary (4)
            </div>
          </div>

          <div
            className={
              'mt-6 w-full py-0 px-0 md:w-1/2 lg:mt-0 lg:w-1/3 lg:px-6'
            }
          >
            <div className={'rounded-t-lg bg-white shadow-sm'}>
              <div className={checkout.order}>
                <div
                  className={'font ml-0.5 pb-2.5 pl-5 pt-5 text-lg font-bold'}
                >
                  Order Summary
                </div>

                <div className={'flex justify-between text-gray-500'}>
                  <span className={'pl-5'}>Shipping fee</span>
                  <span className={'py-0 px-5'}>$10.70</span>
                </div>
              </div>

              <div className={'flex justify-between text-gray-500'}>
                <span className={'px-5'}>Sub total</span>
                <span className={'py-0 px-5'}>$19.00</span>
              </div>

              <div
                className={
                  'my-2.5 mx-0 flex items-center justify-between py-0 px-5'
                }
              >
                <input
                  type="text"
                  className={
                    'w-1/2 rounded-md border border-solid border-lightpink py-1.5 px-2 text-sm'
                  }
                  placeholder="Coupon Code"
                />
                <div className={'flex items-center text-colorange'}>
                  <i className="fas fa-gift"></i>
                  <span className={'ml-1.5 text-colorange'}>My Gifts</span>
                </div>
              </div>

              <div
                className={
                  'flex justify-between border-t border-solid border-gray-500 py-2.5 pr-0 pl-5 font-semibold'
                }
              >
                Total <span className={'py-0 px-5'}>$0.00</span>
              </div>

              <div className={'w-auto pt-0'}>
                <button
                  type="submit"
                  className={
                    'w-full justify-center border-0 bg-blueshade py-2 px-6 text-white'
                  }
                  style={{ backgroundColor: '#000033' }}
                >
                  Proceed
                </button>
              </div>
            </div>

            <div
              className={
                'mt-[30px] w-auto rounded-xl border-2 border-solid border-white bg-lightgrey text-center'
              }
            >
              <div className={'pt-[15px] text-green'}>SECURED PAY</div>

              <div className={'py-[15px] px-5 text-xs text-gray-400'}>
                Every Payments are secured with Bamzi and additional security is
                ensured with Money Gauranss.
              </div>

              <div className={'flex justify-center py-2.5 px-0'}>
                <BsFillShieldFill className="h-1/5 w-[10%] p-1.5" />
                <BiRecycle className="h-1/5 w-[10%] p-1.5" />
                <BsCreditCardFill className="h-1/5 w-[10%] p-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Checkout.auth = true
