interface FormTitle {
  title: string
  fontSize?: string
  fontWeight?: 'normal' | 'semibold' | 'bold'
  textColor?: string
}

const FormTitle = ({
  title,
  fontSize = '1.25rem',
  fontWeight = 'bold',
  textColor = '#000',
}: FormTitle) => {
  return <span style={{ fontSize, fontWeight, color: textColor }}>{title}</span>
}

export default FormTitle
