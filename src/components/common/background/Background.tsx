import { ReactNode } from 'react'
import background from '../../../assets/images/background.jpg'

interface BackgroundProps {
  children: ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      {children}
    </div>
  )
}

export default Background
