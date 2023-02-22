import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import Header from '../components/header'
import Image from 'next/image'
import { FaStore } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import SuccessHandler from 'utils/SuccessHandler'
import ErrorHandler from 'utils/ErrorHandler'
import PrelaunchValidation from 'utils/validation/prelaunchValidation'
import { useFormik } from 'formik'
import Input from 'components/Input'

export default function Prelaunch() {
  const url = 'http://localhost:3000/bamzi/reservation'

  const [buyerCols, setBuyerCols] = useState<string>(
    'bg-lightorange text-white'
  )
  const [sellerCols, setSellerCols] = useState<string>(
    'bg-transparent text-gray-500'
  )

  const initialValues = {
    name: '',
    email: '',
    industry: '',
    designation: 'Buyer',
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: PrelaunchValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      const { name, email, industry, designation } = values

      console.log({ name, email, industry, designation })

      try {
        const reservationBooking = await axios.post('/api/reservation', {
          name: name,
          email: email,
          industry: industry,
          designation: designation,
        })

        if (reservationBooking) {
          SuccessHandler({
            message: reservationBooking?.data?.message ?? 'Reservation Sent',
          })
        }

        resetForm()
      } catch (error: any) {
        ErrorHandler({
          message: error?.response?.data?.message ?? 'Error Updating Password',
        })
        console.log('changePassword error', error)
      }
    },
  })

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    setFieldValue,
  } = formik

  return (
    <div className={'my-0 mx-auto w-full bg-bluelight'}>
      <Header secNav="prelaunch" bg />

      <div
        className={
          'flex w-full flex-col items-center py-6 px-6  md:px-16 lg:flex-row lg:px-24'
        }
      >
        <div className={'text-center'}>
          <h1
            className={
              'text-left text-2xl font-bold text-primary sm:text-4xl lg:text-6xl'
            }
          >
            Get Ready, Online Stores Coming Through
          </h1>
          <p
            className={
              'mt-4 text-left text-sm text-gray-500 sm:text-base lg:text-xl'
            }
          >
            Get awesome rewards and discounts, be the first to book your space
            in this awesome digital world. Join us on the train to greatness.
          </p>

          <form
            className={'mt-8 w-full py-0 lg:w-11/12'}
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              name="name"
              id="name"
              value={values['name']}
              autoComplete="off"
              className={
                'min-h-7 my-2 mx-0 w-full rounded-3xl border border-white py-3 px-4'
              }
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors}
              touched={touched}
            />

            <div className={'flex w-full space-x-4'}>
              <div className={'w-2/3'}>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={values['email']}
                  autoComplete="off"
                  className={
                    ' my-2 w-full rounded-3xl border border-white px-4 py-3'
                  }
                  placeholder="sample@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors}
                  touched={touched}
                />
              </div>
              <div className={'w-1/3'}>
                <Input
                  type="text"
                  id="industry"
                  name="industry"
                  value={values['industry']}
                  autoComplete="off"
                  className={
                    'my-2 w-full rounded-3xl border border-white px-4 py-3'
                  }
                  placeholder="Oil & Gas"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors}
                  touched={touched}
                />
              </div>
            </div>

            <div className={'my-2 mx-0 grid grid-cols-2 gap-1.5'}>
              <div
                className={`${buyerCols} flex cursor-pointer items-center justify-center space-x-4 rounded-3xl border-2 border-lightorange py-2 px-0`}
                onClick={() => {
                  setFieldValue('designation', 'Buyer')
                  setBuyerCols('bg-lightorange text-white')
                  setSellerCols('bg-transparent text-gray-500')
                }}
              >
                <MdShoppingCart size={32} /> &nbsp; Buyer
              </div>
              <div
                className={`${sellerCols} flex cursor-pointer items-center justify-center space-x-4 rounded-3xl border-2 border-lightorange py-2 px-0`}
                onClick={() => {
                  setFieldValue('designation', 'Seller')
                  setSellerCols('bg-lightorange text-white')
                  setBuyerCols('bg-transparent text-gray-500')
                }}
              >
                <FaStore size={32} /> &nbsp; Seller
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className={
                  'my-2 mx-0 w-full rounded-md bg-primary py-4 px-0 text-center font-bold text-white sm:w-5/6 sm:px-16 '
                }
                style={{ backgroundColor: '#000033' }}
              >
                Book your reservation
              </button>
            </div>
          </form>
        </div>

        <div className={'bg-shapes bg-cover'}>
          <Image
            src={require('assets/Mask.png')}
            className={'h-auto max-w-full object-cover'}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
