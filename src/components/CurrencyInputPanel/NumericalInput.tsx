import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { escapeRegExp } from '../../utils'

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped '.' characters via in a non-capturing group
const integerinputRegex = RegExp(`^\\d*(?:\\\\[])?\\d*$`) // match escaped '.' characters via in a non-capturing group

export const Input = React.memo(function InnerInput({
  value,
  onUserInput,
  placeholder,
  onlyInteger,
  ...rest
}: {
  value: string | number
  onUserInput: (input: string) => void
  onlyInteger?: boolean
  error?: boolean
  fontSize?: string
  align?: 'right' | 'left'
} & Omit<React.HTMLProps<HTMLInputElement>, 'ref' | 'onChange' | 'as'>) {
  const enforcer = (nextUserInput: string) => {
    const regex = onlyInteger ? integerinputRegex : inputRegex
    if (nextUserInput === '' || regex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }

  const { t } = useTranslation()

  return (
    <input
      {...rest}
      value={value}
      onChange={(event) => {
        // replace commas with periods, because we exclusively uses period as the decimal separator
        enforcer(event.target.value.replace(/,/g, '.'))
      }}
      // universal input options
      inputMode='decimal'
      title={t('Token Amount')}
      autoComplete='off'
      autoCorrect='off'
      // text-specific options
      type='text'
      pattern='^[0-9]*[.,]?[0-9]*$'
      placeholder={placeholder || '0.0'}
      minLength={1}
      maxLength={79}
      spellCheck='false'
    />
  )
})

export default Input
