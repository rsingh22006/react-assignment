import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { getInputLoginData, handleCheckNewPassword, handleCheckUsername } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';

export const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [focusData, setFocusData] = useState({ username: false, password: false });
  const [showPassword, setShowPassword] = useState(false);
  const checkUsername = handleCheckUsername(formData.username);
  const checkPassword = handleCheckNewPassword(formData.username, formData.password);

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
    let isErrorOccured = false;
    if (!checkUsername || checkPassword) isErrorOccured = true;
    if (isErrorOccured) return;
    alert('You have signed up, Redirecting to Login Thanks!');
    setFormData({ username: '', password: '' });
    return alert('Your details has been verified, Thanks!');
  }

  const inputData = getInputLoginData(formData, focusData, showPassword, checkUsername, checkPassword,
    handleChange, handleChangeFocusAndBlur, handleClickShowPassword);
  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form autoComplete='off' className='w-1/2 lg:w-[40vw] mx-auto mt-[7vh] lg:mt-[18vh] flex flex-col gap-10' onSubmit={handleSubmit}>
        {inputData.map((el, idx) =>
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
        <AuthButton text='LOGIN' w={'w-40'} />
        <p className='mt-[-3vh] text-center'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}