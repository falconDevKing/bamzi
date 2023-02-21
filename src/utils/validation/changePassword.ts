import * as Yup from 'yup'

const ShippingInfoValidation = Yup.object({
  oldPassword: Yup.string(),
  newPassword: Yup.string()
    .required('Password is required')
    .min(
      8,
      'At least 8 Characters, One Uppercase, Lowercase, Number and Special Character'
    )
    .matches(
      /^(.*[a-z].*)$/,
      'At least 8 Characters, One Uppercase, Lowercase, Number and Special Character'
    )
    .matches(
      /^(.*[A-Z].*)$/,
      'At least 8 Characters, One Uppercase, Lowercase, Number and Special Character'
    )
    .matches(
      /^(.*[\W_].*)$/,
      'At least 8 Characters, One Uppercase, Lowercase, Number and Special Character'
    )
    .matches(
      /^(.*\d.*)$/,
      'At least 8 Characters, One Uppercase, Lowercase, Number and Special Character'
    ),
  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        'Confirm password does not match password'
      ),
    }),
})

export default ShippingInfoValidation
