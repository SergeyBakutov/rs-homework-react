import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react'

import { Input, Radio } from './components'

import './Signup.css'

export interface IInputValues {
  name: string
  nickname: string
  email: string
  gender: 'man' | 'woman'
  password: string
  confirmPassword: string
}

interface ISignupProps {
  onSubmit: (data: IInputValues) => void
}

const initInputValues: IInputValues = {
  name: '',
  nickname: '',
  email: '',
  gender: 'man',
  password: '',
  confirmPassword: '',
}

export const Signup: React.FC<ISignupProps> = ({ onSubmit }) => {
  const [inputValues, setInputValues] = useState(initInputValues)

  const onChangeFieldHandler = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setInputValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  },[])

  const onSubmitHandler = useCallback((event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    onSubmit(inputValues)
    setInputValues(initInputValues)
  },[inputValues, onSubmit])


  return (
    <form className="Signup__form" onSubmit={onSubmitHandler}>
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Name"
        value={inputValues.name}
        withAsterix
        onChange={onChangeFieldHandler}
      />
      <Input
        type="text"
        name="nickname"
        label="Nickname"
        placeholder="Nickname"
        value={inputValues.nickname}
        withAsterix
        icon={<span>@</span>}
        onChange={onChangeFieldHandler}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Email"
        value={inputValues.email}
        withAsterix
        onChange={onChangeFieldHandler}
      />
      <div className="Signup__radio-group">
        <p>Gender:</p>
        <Radio
          label="Man" 
          name="gender"
          value="man"
          checked={inputValues.gender === 'man'}
          onChange={onChangeFieldHandler}
        />
        <Radio
          label="Woman"
          name="gender"
          value="woman"
          checked={inputValues.gender === 'woman'}
          onChange={onChangeFieldHandler}
        />
      </div>
      <Input
        type="password"
        name="password"
        label="Password"
        placeholder="Password"
        value={inputValues.password}
        withAsterix
        onChange={onChangeFieldHandler}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm password"
        placeholder="Confirm password"
        value={inputValues.confirmPassword}
        withAsterix
        onChange={onChangeFieldHandler}
      />
      <button className="Singup__button" type="submit">
        Sign up
      </button>
    </form>
  )
}