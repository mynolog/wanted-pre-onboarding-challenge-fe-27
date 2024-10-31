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
  disabled?: boolean
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
  disabled = false,
  onClick,
}: CommonButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: disabled ? '#ccc' : bgColor,
        color: textColor,
        fontSize,
        width,
        height,
        padding,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      className="border-none outline-none rounded-xl flex items-center justify-center transition-transform transform scale-100 active:scale-95 mt-3"
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default CommonButton
