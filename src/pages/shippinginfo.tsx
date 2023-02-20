import React from 'react'
import Header from '../components/header'
import UserBody from '../components/user/UserBody'
import UserSidebar from '../components/user/UserSidebar'

export default function Shippinginfo() {
  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="shipping" />

        <div className="flex w-full flex-col justify-between bg-white py-3 px-4 shadow md:flex-row md:rounded-r-xl md:py-6 md:px-8 lg:w-9/12 lg:py-12 lg:px-16">
          <div className="mx-2 bg-white py-5 text-sm">
            <form method="get" action="login.php">
              <h6>Shipping Info</h6>

              <div className="flex flex-col">
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
                      'mr-2 w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-3/4'
                    }
                    placeholder="Street Address/Apartment Unit"
                  />
                  <input
                    type="text"
                    name="state"
                    className={
                      'mr-2 w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-2/5'
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
                      'mr-2 w-1/2 rounded-md border border-solid border-gray-400 py-3 px-5'
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
                      'w-full rounded-md bg-primary py-3 px-6 text-sm text-white md:w-1/2 md:text-base'
                    }
                    style={{ backgroundColor: '#000033' }}
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </UserBody>
    </div>
  )
}

Shippinginfo.auth = true
