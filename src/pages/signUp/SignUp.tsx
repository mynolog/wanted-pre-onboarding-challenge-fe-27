import type { MouseEvent } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useForm from '../../hooks/useForm'
import CommonInput from '../../components/common/input/CommonInput'
import CommonButton from '../../components/common/button/CommonButton'
import FormTitle from '../../components/common/title/FormTitle'
import { signUpService } from '../../services/auth/authService'
import { loginAction } from '../../store/slices/auth/authSlice'

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

  const dispatch = useDispatch()

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
        const loginUser = {
          email: form.email,
          token: result.token,
        }
        dispatch(
          loginAction({
            user: loginUser,
            isLoggedIn: true,
          }),
        )
        resetForm()
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
    <div className="w-full h-svh flex justify-center items-center">
      <form className="w-6/12 h-4/5 flex flex-col items-center justify-center gap-3 rounded-2xl p-8 shadow-2xl">
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
        {responseError && <span className="text-red-500">{responseError}</span>}
      </form>
    </div>
  )
}

export default SignUp
