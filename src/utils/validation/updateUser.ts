import * as Yup from 'yup'

const UpdateUserValidation = Yup.object({
  name: Yup.string().min(3, 'At least 3 Characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('If email is an error, kindly contact admin'),
  phoneNumber: Yup.string().min(7, 'At least 7 Digits'),
  gender: Yup.string().oneOf(
    ['Male', 'Female'],
    'Gender should be either Male or Female'
  ),
  dob: Yup.string(),
})

export default UpdateUserValidation
