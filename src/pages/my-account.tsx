import React, { MouseEventHandler } from 'react'
import Header from '../components/header'
import UserBody from '../components/user/UserBody'
import UserSidebar from '../components/user/UserSidebar'
import { useSession, signIn, signOut } from 'next-auth/react'
import SuccessHandler from 'utils/SuccessHandler'

export default function Buyeraccount() {
  const logoutHandler = () => {
    console.log('signout clicked')
    signOut()
    SuccessHandler({ message: 'Logged Out' })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="my-account" />

        <div className="flex w-full flex-col justify-between bg-white py-3 px-4 shadow md:flex-row md:rounded-r-xl md:py-6 md:px-8 lg:w-9/12 lg:py-12 lg:px-16">
          <div className="mx-2 w-2/5 bg-white py-5 text-sm">
            <form method="get" action="">
              <h6>Account Info</h6>

              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="email"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 bg-gray-200 py-3 px-6 text-black'
                  }
                  placeholder="omololadaniel@gmail.com"
                />
                <input
                  type="number"
                  name="number"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Phone Number"
                />
                <input
                  type="number"
                  name="number"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Date of Birth"
                />
                <input
                  type="text"
                  name="text"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Gender"
                />
              </div>
              <div className={'flex items-center'}>
                <button
                  // type="submit"
                  onClick={logoutHandler}
                  className={'mt-8 py-2 px-20  text-sm text-white'}
                  style={{ backgroundColor: '#000033' }}
                >
                  Save Info
                </button>
              </div>
            </form>
          </div>

          <div className="mx-2 w-2/5 bg-white py-5 text-sm">
            <form method="get" action="login.php">
              <h6>Change Password</h6>

              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Old Password"
                />
                <input
                  type="text"
                  name="name"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="New Password"
                />
                <input
                  type="text"
                  name="name"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Confirm Password"
                />
              </div>
              <div className="flex items-center">
                <button
                  type="submit"
                  className={'mt-8 py-2 px-12 text-sm text-white'}
                  style={{ backgroundColor: '#000033' }}
                >
                  Change Password
                </button>
              </div>
            </form>

            <div className="mx-0 py-5 text-sm text-blue-700">
              <h6>Deactivate Account</h6>
            </div>
          </div>
        </div>
      </UserBody>
    </div>
  )
}

Buyeraccount.auth = true
