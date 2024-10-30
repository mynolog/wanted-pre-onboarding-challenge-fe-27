import type { ReactNode, MouseEvent } from 'react'

interface CommonButtonProps {
  children: ReactNode
  bgColor?: string
  textColor?: string
  fontSize?: string
  width?: string
  height?: string
  padding?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const CommonButton = ({
  children,
  bgColor = '#111826',
  textColor = '#fff',
  fontSize = '1.25rem',
  width = '',
  height = '',
  type = 'button',
  padding = '0.75rem',
  onClick,
}: CommonButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontSize,
        width,
        height,
        padding,
      }}
      className="border-none outline-none rounded-xl flex items-center justify-center transition-transform transform scale-100 active:scale-95"
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default CommonButton
