import Input from 'components/Input'
import React from 'react'
import Header from '../components/header'
import UserBody from '../components/user/UserBody'
import UserSidebar from '../components/user/UserSidebar'
import { error, Success } from 'utils/response'
import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { GetServerSideProps } from 'next'
import { useFormik } from 'formik'
import ChangePasswordValidation from 'utils/validation/changePassword'
import axios from 'axios'
import ShippingInfoValidation from 'utils/validation/updateShipping'
import SuccessHandler from 'utils/SuccessHandler'
import ErrorHandler from 'utils/ErrorHandler'

interface ShippingInfoProps {
  userData: any
}
export default function ShippingInfo({ userData }: ShippingInfoProps) {
  const initialValues = {
    name: userData?.shippingAddress?.name ?? '',
    phoneNumber: userData?.shippingAddress?.phoneNumber ?? '',
    street: userData?.shippingAddress?.street ?? '',
    city: userData?.shippingAddress?.city ?? '',
    state: userData?.shippingAddress?.state ?? '',
    country: userData?.shippingAddress?.country ?? '',
    zipCode: userData?.shippingAddress?.zipCode ?? '',
  }

  const email = userData.email

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ShippingInfoValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const changePasswordResponse = await axios.post(
          '/api/auth/shipping-information',
          {
            email,
            shippingAddress: values,
          }
        )
        if (changePasswordResponse) {
          SuccessHandler({
            message:
              changePasswordResponse?.data?.message ??
              'Password Changed Successfully',
          })
        }
        console.log(changePasswordResponse)
        resetForm()
      } catch (error: any) {
        ErrorHandler({
          message: error?.response?.data?.message ?? 'Error Updating Password',
        })
        console.log('changePassword error', error)
      }
    },
  })

  const { handleSubmit, handleBlur, handleChange, values, touched, errors } =
    formik

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="shipping" />

        <div className="flex w-full flex-col justify-between bg-white py-3 px-4 shadow md:flex-row md:rounded-r-xl md:py-6 md:px-8 lg:w-9/12 lg:px-16">
          <div className="mx-2 w-full bg-white py-5">
            <form onSubmit={handleSubmit}>
              <div className="my-4">Shipping Info</div>

              <div className="mt-4 flex flex-col">
                <div
                  className={'flex w-full flex-col md:flex-row md:space-x-4'}
                >
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    value={values['name']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-2/3'
                    }
                    placeholder="John Doe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={values['phoneNumber']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/3'
                    }
                    placeholder="+234 Phone Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                </div>

                <div className="my-4">Address</div>

                <div
                  className={'flex w-full flex-col md:flex-row md:space-x-4'}
                >
                  <Input
                    type="text"
                    name="street"
                    id="street"
                    value={values['street']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6'
                    }
                    placeholder="Street Address/Apartment Unit"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                </div>
                <div className={'mt-2 flex w-full md:space-x-4'}>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    value={values['city']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    value={values['state']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="State/Region"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                </div>
                <div className={'mt-2 flex w-full md:space-x-4 '}>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    value={values['country']}
                    autoComplete="off"
                    className={
                      'w-1/2 rounded-md border border-solid border-gray-400 py-3 px-5'
                    }
                    placeholder="Country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
                  />
                  <Input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    value={values['zipCode']}
                    autoComplete="off"
                    className={
                      'w-full rounded-md border border-solid border-gray-400 py-3 px-6 md:w-1/2'
                    }
                    placeholder="Postal / Zip Code"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors}
                    touched={touched}
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

ShippingInfo.auth = true

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerSession(ctx.req, ctx.res, authOptions)
  console.log('session', session)
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  try {
    const email = session?.user?.email

    const userDataResponse = await axios.post(
      'http://localhost:3000/api/auth/fetchuser',
      {
        email,
      }
    )

    const userData = userDataResponse.data.data
    console.log(userData)
    return {
      props: {
        userData,
      },
    }
  } catch (error) {
    console.log('error', error)
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }
}
