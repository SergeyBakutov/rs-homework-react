import classNames from 'classnames'
import { useCallback, useRef } from 'react'

import cls from './Input.module.scss'

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  description?: string
  error?: string
  variant?: 'default' | 'filled' | 'unstyled'
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  withAsterix?: boolean
  icon?: React.ReactNode
}

export const Input: React.FC<IInputProps> = ({
  label,
  description,
  error,
  withAsterix,
  variant = 'default',
  size = 'md',
  radius = 'md',
  icon,
  type,
  name,
  value,
  disabled,
  placeholder,
  onChange,
}) => {
  const id = (Date.now() + Math.random() * Math.PI).toString()
  const ref = useRef<HTMLInputElement>(null)

  const onClickWrapperHandler = useCallback(() => {
    ref.current && ref.current.focus()
  },[])
  

  return (
    <div className={classNames(cls.wrapper, [cls[`wrapper-${size}`]])} onClick={onClickWrapperHandler}>
      {label && (
        <div>
          <label htmlFor={id}>{label}</label>
          {withAsterix && <span className={cls.asterix}>&nbsp;*</span>}
        </div>
      )}
      {description && <p className={cls.description}>{description}</p>}
      <div className={
        classNames(
          cls['input-wrapper'],
          { [cls['input-wrapper_error']]: !!error, [cls['input-wrapper_disabled']]: disabled },
          [ cls[`input-wrapper_${variant}`], cls[`input-wrapper_radius-${radius}`] ],
          { cls }
        )
      }>
        {icon && <div className={cls.icon}>{icon}</div>}
        <input
          className={classNames(cls.input, { [cls['input_error']]: !!error})}
          ref={ref}
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
      {error && <p className={cls.error}>{error}</p>}
    </div>
  )
}