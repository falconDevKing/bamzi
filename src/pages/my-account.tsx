import React, { MouseEventHandler } from 'react'
import Header from '../components/header'
import UserBody from '../components/user/UserBody'
import UserSidebar from '../components/user/UserSidebar'
import { useSession, signIn, signOut } from 'next-auth/react'
import SuccessHandler from 'utils/SuccessHandler'
import ErrorHandler from 'utils/ErrorHandler'
import Input from 'components/Input'
import { useFormik } from 'formik'
import ChangePasswordValidation from 'utils/validation/changePassword'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FcInfo } from 'react-icons/fc'
import { getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { GetServerSideProps } from 'next'
import { error, Success } from 'utils/response'
import UpdateUserValidation from 'utils/validation/updateUser'
import Swal from 'sweetalert2'

interface UserAccountProps {
  userData: any
}

export default function UserAccount({ userData }: UserAccountProps) {
  const router = useRouter()

  const { email, name, dob, phoneNumber, gender } = userData

  const dinitialValues = {
    name: userData.name ?? '',
    email: userData.email ?? '',
    dob: userData.dob ?? '',
    phoneNumber: userData.phoneNumber ?? '',
    gender: userData.gender ?? '',
  }

  const pinitialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  }

  const dformik = useFormik({
    initialValues: dinitialValues,
    validationSchema: UpdateUserValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { email, name, dob, phoneNumber, gender } = values
        const updateUserResponse = await axios.put('/api/auth/updateUser', {
          email,
          name,
          dob,
          phoneNumber,
          gender,
        })

        if (updateUserResponse) {
          SuccessHandler({
            message:
              updateUserResponse?.data?.message ?? 'User updated Successfully',
          })
        }
        console.log(updateUserResponse)
        resetForm()
        router.reload()
      } catch (error: any) {
        ErrorHandler({
          message: error?.response?.data?.message ?? 'Error Updating User',
        })
        console.log('Update User error', error)
      }
    },
  })

  const pformik = useFormik({
    initialValues: pinitialValues,
    validationSchema: ChangePasswordValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { oldPassword, newPassword } = values
        console.log({
          email,
          oldPassword,
          newPassword,
        })
        const changePasswordResponse = await axios.post(
          '/api/auth/change-password',
          {
            email,
            oldPassword,
            newPassword,
          }
        )
        if (changePasswordResponse) {
          SuccessHandler({
            message:
              changePasswordResponse?.data?.message ??
              'Password Changed Successfully',
          })
          signOut()
        }
        console.log(changePasswordResponse)
      } catch (error: any) {
        ErrorHandler({
          message: error?.response?.data?.message ?? 'Error Updating Password',
        })
        console.log('changePassword error', error)
      } finally {
        resetForm()
      }
    },
  })

  const {
    handleSubmit: dhandleSubmit,
    handleBlur: dhandleBlur,
    handleChange: dhandleChange,
    values: dvalues,
    touched: dtouched,
    errors: derrors,
  } = dformik

  const {
    handleSubmit: phandleSubmit,
    handleBlur: phandleBlur,
    handleChange: phandleChange,
    values: pvalues,
    touched: ptouched,
    errors: perrors,
  } = pformik

  const deleteAccount = async () => {
    try {
      const deletedResponse = await axios.post('/api/auth/remove-account', {
        email,
      })
      if (deletedResponse) {
        SuccessHandler({
          message:
            deletedResponse?.data?.message ?? 'Account Deleted Successfully',
        })
        signOut()
      }
      console.log('deletedResponse', deletedResponse)
    } catch (error: any) {
      ErrorHandler({
        message:
          error?.response?.data?.message ?? 'Error Deleting Account, Try again',
      })
      console.log('delete account error', error)
    }
  }

  const deactivateAccount = () => {
    Swal.fire({
      title: 'Deactivate!',
      text: 'Are you sure you want to delete this account?',
      icon: 'question',
      iconColor: 'red',
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonColor: 'red',
      showCloseButton: true,
      confirmButtonText: 'Delete',
      backdrop: true,
      footer: 'Deleted accounts cannot be recovered',
    }).then(async (result) => {
      if (result.isConfirmed) {
        SuccessHandler({ message: 'Deleting Account' })
        await deleteAccount()
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <Header pryNav="user" secNav="user" />

      <UserBody>
        <UserSidebar page="my-account" />

        <div className="flex w-full flex-col justify-between bg-white py-3 px-4 shadow md:flex-row md:rounded-r-xl md:py-6 md:px-8 lg:w-9/12 lg:py-12 lg:px-16">
          <div className="mx-2 w-2/5 bg-white py-5 text-sm">
            <form onSubmit={dhandleSubmit}>
              <h6>Account Info</h6>

              <div className="flex flex-col space-y-4">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={dvalues['name']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="John Doe"
                  onChange={dhandleChange}
                  onBlur={dhandleBlur}
                  error={derrors}
                  touched={dtouched}
                />
                <Input
                  type="text"
                  name="email"
                  id="email"
                  value={dvalues['email']}
                  disabled={true}
                  autoComplete="off"
                  className={
                    'w-full cursor-not-allowed rounded-md border  border-solid border-gray-400 py-3 px-6 text-gray-500'
                  }
                  placeholder={email}
                />

                <Input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={dvalues['phoneNumber']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder={'+234 909 333 1735'}
                  onChange={dhandleChange}
                  onBlur={dhandleBlur}
                  error={derrors}
                  touched={dtouched}
                />
                <Input
                  type="text"
                  name="gender"
                  id="gender"
                  value={dvalues['gender']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder={'Female'}
                  onChange={dhandleChange}
                  onBlur={dhandleBlur}
                  error={derrors}
                  touched={dtouched}
                />
                <Input
                  type="text"
                  name="dob"
                  id="dob"
                  value={dvalues['dob']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder={'Date of Birth (DD/MM/YYYY)'}
                  onChange={dhandleChange}
                  onBlur={dhandleBlur}
                  error={derrors}
                  touched={dtouched}
                />
              </div>
              <div className={'flex items-center'}>
                <button
                  type="submit"
                  className={'mt-8 py-2 px-20  text-sm text-white'}
                  style={{ backgroundColor: '#000033' }}
                >
                  Save Info
                </button>
              </div>
            </form>
          </div>

          <div className="mx-2 w-2/5 bg-white py-5 text-sm">
            <form onSubmit={phandleSubmit}>
              <h6>Change Password</h6>

              <div className="flex flex-col space-y-4">
                <Input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={pvalues['oldPassword']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Old Password"
                  onChange={phandleChange}
                  onBlur={phandleBlur}
                  error={perrors}
                  touched={ptouched}
                />
                <Input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={pvalues['newPassword']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="New Password"
                  onChange={phandleChange}
                  onBlur={phandleBlur}
                  error={perrors}
                  touched={ptouched}
                />
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={pvalues['confirmPassword']}
                  autoComplete="off"
                  className={
                    'w-full rounded-md border  border-solid border-gray-400 py-3 px-6'
                  }
                  placeholder="Confirm Password"
                  onChange={phandleChange}
                  onBlur={phandleBlur}
                  error={perrors}
                  touched={ptouched}
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

            <div className="mx-0 py-5 text-sm text-red-500">
              <div
                onClick={deactivateAccount}
                className="cursor-pointer text-right"
              >
                Deactivate Account
              </div>
            </div>

            <div className="flex items-center space-x-2 rounded-lg border border-blue-300 px-2 py-1 text-xs">
              <FcInfo size={40} />
              <span>
                Social Media sign ups can leave old password empty if creating a
                password for the first time.
              </span>
            </div>
          </div>
        </div>
      </UserBody>
    </div>
  )
}

UserAccount.auth = true

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
