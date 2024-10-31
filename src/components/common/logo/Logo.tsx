import logo from '../../../assets/images/logo.png'

interface LogoProps {
  width?: string
  height?: string
  position?: 'absolute' | 'static' | 'relative'
  top?: string
  onClick?: () => void
}

const Logo = ({
  width = '500px',
  height = '500px',
  position = 'absolute',
  top = '50px',
  onClick,
}: LogoProps) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        width,
        height,
        position,
        top,
        backgroundImage: `url(${logo})`,
      }}
      onClick={onClick}
    />
  )
}

export default Logo
