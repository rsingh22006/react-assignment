import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { containsAlphabetsNumbersAndSpecialChars, handleKeyDown } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';

export const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [focusData, setFocusData] = useState({ username: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const checkUsername = containsAlphabetsNumbersAndSpecialChars(formData.username);
  const usernameAndPasswordMatchingError = ((
    (formData.password && formData.username) && (formData.username === formData.password)
  ) ? true : false);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleChangeFocusAndBlur = (event, type) => {
    setFocusData({ ...focusData, [event.target.name]: type === 'focus' ? true : false })
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkUsername) {
      setFormData({ username: '', password: '' });
      return alert('Your details has been verified, Thanks!');
    }
  }

  const inputData = [
    {
      name: 'username',
      value: formData.username,
      labelValue: 'USERNAME',
      focus: focusData.username,
      error: !checkUsername && formData.username.length > 0,
      errorDetail: 'USERNAME must contain combination of alphanumeric values with special characters only',
      handleKeyDown,
      handleChange,
      handleChangeFocusAndBlur
    },
    {
      name: 'password',
      show:showPassword,
      value: formData.password,
      labelValue: 'PASSWORD',
      focus: focusData.password,
      error: usernameAndPasswordMatchingError,
      errorDetail: 'USERNAME and PASSWORD should not be same',
      handleKeyDown,
      handleChange,
      handleChangeFocusAndBlur,
      handleClickShow:handleClickShowPassword
    }
  ]

  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form autoComplete='off' className='w-1/2 lg:w-[40vw] mx-auto mt-[7vh] lg:mt-[18vh]' onSubmit={handleSubmit}>
        {inputData.map((el,idx) =>
          <InputField
            key={idx}
            name={el.name}
            show={el?.show}
            value={el.value}
            labelValue={el.labelValue}
            focus={el.focus}
            error={el.error}
            errorDetail={el.errorDetail}
            handleKeyDown={el.handleKeyDown}
            handleChange={el.handleChange}
            handleChangeFocusAndBlur={el.handleChangeFocusAndBlur}
            handleClickShow={el?.handleClickShow}
          />
        )}
        <AuthButton text='LOGIN' isDisabled={usernameAndPasswordMatchingError || !checkUsername} w={'w-40'} />
        <p className='mt-[2vh]'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}