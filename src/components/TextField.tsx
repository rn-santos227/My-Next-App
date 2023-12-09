import { ChangeEvent } from 'react'

interface TextFieldProps {
    value: string | number;
    onChange: (value: string) => void,
    placeholder: string
    type?: string
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, placeholder, type = "text" }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }
  return (
    <input className="m-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type={type} value={value} onChange={handleChange} placeholder={placeholder} />
  )
}

export default TextField
