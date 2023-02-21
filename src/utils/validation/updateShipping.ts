import * as Yup from 'yup'

const UpdateUserValidation = Yup.object({
  name: Yup.string().min(3, 'At least 3 Characters'),
  phoneNumber: Yup.string().min(7, 'At least 7 Digits'),
  street: Yup.string().min(3, 'At least 3 Characters'),
  city: Yup.string().min(3, 'At least 3 Characters'),
  state: Yup.string().min(3, 'At least 3 Characters'),
  country: Yup.string().min(3, 'At least 3 Characters'),
  zipCode: Yup.string().min(3, 'At least 3 Characters'),
})

export default UpdateUserValidation
