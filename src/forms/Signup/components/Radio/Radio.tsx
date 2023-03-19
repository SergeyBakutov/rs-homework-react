import cls from './Radio.module.scss'

interface IRadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string
}

export const Radio: React.FC<IRadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  const id = (Date.now() + Math.random() * Math.PI).toString()

  return (
    <div className={cls.wrapper}>
      <input
        id={id} 
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}