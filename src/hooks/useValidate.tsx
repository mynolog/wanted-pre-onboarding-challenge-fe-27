import { useState } from 'react'

interface ValidError {
  email: string
  password: string
  passwordConfirm: string
}

export const useValidate = () => {
  const [validErrors, setValidErrors] = useState<ValidError>({
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setValidErrors((prevState) => ({
        ...prevState,
        email: '유효한 이메일 형식이 아닙니다.',
      }))
    } else {
      setValidErrors((prevState) => ({
        ...prevState,
        email: '',
      }))
    }
  }

  const validatePassword = (password: string) => {
    if (password.length <= 8) {
      setValidErrors((prevState) => ({
        ...prevState,
        password: '비밀번호는 8자리 이상이어야 합니다.',
      }))
    } else {
      setValidErrors((prevState) => ({
        ...prevState,
        password: '',
      }))
    }
  }

  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string,
  ) => {
    if (password !== passwordConfirm) {
      setValidErrors((prevState) => ({
        ...prevState,
        passwordConfirm: '비밀번호와 비밀번호 확인이 서로 다릅니다.',
      }))
    } else {
      setValidErrors((prevState) => ({
        ...prevState,
        passwordConfirm: '',
      }))
    }
  }
  return {
    validErrors,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  }
}
