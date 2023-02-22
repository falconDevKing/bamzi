interface InputProps {
  type?: string
  required?: boolean
  name: string
  placeholder?: string
  autoComplete: string
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  value: string | number | undefined
  label?: string | React.ReactElement
  error?: {
    [field: string]: any
  }
  touched?: {
    [key: string]: any
  }
  minHeight?: string
  className: string
  autoFocus?: boolean
  id?: string
  disabled?: boolean
  readOnly?: boolean
}
const Input = (props: InputProps) => {
  let error = false
  let touched = false

  if (props.error && props.error[props.name]) {
    error = true
  }

  if (props.touched && props.touched[props.name]) {
    touched = true
  }

  return (
    <>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        className={props.className}
        required={props.required}
        name={props.name}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        disabled={props.disabled}
      />
      {props.error && props.error[props.name] && touched && (
        <p className={'text-xs text-red-500'}>{props.error[props.name]}</p>
      )}
    </>
  )
}

export default Input
