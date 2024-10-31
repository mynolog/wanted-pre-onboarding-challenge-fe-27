import type { MouseEvent } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import CommonInput from '../../components/common/input/CommonInput'
import CommonButton from '../../components/common/button/CommonButton'
import FormTitle from '../../components/common/title/FormTitle'
import { signUpService } from '../../services/auth/authService'
import Background from '../../components/common/background/Background'
import Logo from '../../components/common/logo/Logo'

const SignUp = () => {
  const [responseError, setResponseError] = useState('')
  const { form, handleFormChange, resetForm } = useForm(
    {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    setResponseError,
  )
  const navigate = useNavigate()

  const handleSignUpSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { email, password } = form
    const signUpForm = {
      email,
      password,
    }
    try {
      const result = await signUpService(signUpForm)
      if (result) {
        resetForm()
        navigate('/login')
      }
    } catch (e) {
      if (e instanceof Error) {
        setResponseError(e.message)
        console.error(e.message)
      }
      resetForm()
    }
  }

  return (
    <Background>
      <div className="w-full h-svh flex justify-center items-center">
        <form className="w-6/12 h-4/5 flex flex-col items-center justify-center gap-3 rounded-2xl p-8 shadow-2xl bg-white z-50">
          <Logo top="0" width="235px" height="235px" />
          <FormTitle title="회원가입" />
          <CommonInput
            name="email"
            label="이메일"
            value={form.email}
            onChange={handleFormChange}
          />
          <CommonInput
            name="password"
            label="비밀번호"
            type="password"
            value={form.password}
            onChange={handleFormChange}
          />
          <CommonInput
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            value={form.passwordConfirm}
            onChange={handleFormChange}
          />
          <CommonButton type="submit" width="65%" onClick={handleSignUpSubmit}>
            가입하기
          </CommonButton>
          {responseError && (
            <span className="text-red-500">{responseError}</span>
          )}
        </form>
      </div>
    </Background>
  )
}

export default SignUp
