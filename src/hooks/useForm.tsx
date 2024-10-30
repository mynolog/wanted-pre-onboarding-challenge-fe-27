import type { ChangeEvent } from 'react'
import { useState } from 'react'

const useForm = <T extends Record<string, string | number | boolean>>(
  initialValues: T,
  setResponseError: (error: string) => void,
) => {
  const [form, setForm] = useState<T>(initialValues)

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setResponseError('')
  }

  const resetForm = () => {
    setForm(initialValues)
  }
  return { form, setForm, handleFormChange, resetForm }
}

export default useForm
