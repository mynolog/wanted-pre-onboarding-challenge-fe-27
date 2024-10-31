import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CommonButton from '../../common/button/CommonButton'
import Logo from '../../common/logo/Logo'
import { logoutAction } from '../../../store/slices/auth/authSlice'

const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutAction())
    navigate('/entry')
  }

  const handleLogoClick = () => {
    navigate('/')
  }
  return (
    <nav className="w-full h-10 bg-[#F5F5F5] relative">
      <Logo
        width="180px"
        height="180px"
        position="absolute"
        top="-70px"
        onClick={handleLogoClick}
      />
      <ul className="w-full h-full flex items-center justify-end px-10">
        <li>
          <CommonButton
            padding="7px 10px"
            fontSize="0.7rem"
            onClick={handleLogout}
          >
            로그아웃
          </CommonButton>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
