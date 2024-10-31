import { useNavigate } from 'react-router-dom'
import CommonButton from '../../components/common/button/CommonButton.tsx'
import Background from '../../components/common/background/Background'
import Logo from '../../components/common/logo/Logo'

enum Url {
  Login = '/login',
  Create = '/create',
}

const EntryPage = () => {
  const navigate = useNavigate()

  const createRedirectTo = (url: Url) => () => {
    navigate(url)
  }

  return (
    <Background>
      <div className="w-full h-svh flex flex-col gap-3 justify-end items-center p-20">
        <Logo />
        <CommonButton width="200px" onClick={createRedirectTo(Url.Login)}>
          로그인
        </CommonButton>
        <CommonButton width="200px" onClick={createRedirectTo(Url.Create)}>
          회원가입
        </CommonButton>
      </div>
    </Background>
  )
}

export default EntryPage
