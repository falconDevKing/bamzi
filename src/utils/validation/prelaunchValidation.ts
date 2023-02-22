import * as Yup from 'yup'

const PrelaunchValidation = Yup.object({
  name: Yup.string()
    .min(3, 'At least 3 Characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  industry: Yup.string()
    .min(3, 'At least 3 Characters')
    .required('Industy is required'),
  designation: Yup.string().required('Designation is required'),
})

export default PrelaunchValidation
