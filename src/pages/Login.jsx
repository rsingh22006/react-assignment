import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { containsAlphabetsNumbersAndSpecialChars } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { NormalInput } from '../components/NormalInput';
import { PasswordInput } from '../components/PasswordInput';

export const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [focusData, setFocusData] = useState({ username: false, password: false });

  const [showPassword, setShowPassword] = useState(false);

  const usernameAndPasswordMatchingError = (((formData.password && formData.username) && (formData.username === formData.password)) ? true : false);

  const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleChangeFocusAndBlur=(event,type)=>{
    setFocusData({ ...focusData,[event.target.name]:type==='focus'?true:false})
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const checkUsername = containsAlphabetsNumbersAndSpecialChars(formData.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkUsername) {
      setFormData({ username: '', password: '' });
      return alert('Your details has been verified, Thanks!');
    }
  }

  const handleKeyDown = (event) => {
    if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
  }

  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form autoComplete='off' className='w-[70vw] mx-auto mt-[18vh]' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-y-10 mb-5'>
          <NormalInput
              name='username'
              value={formData.username}
              labelValue='USERNAME'
              focus={focusData.username}
              errorDetail='USERNAME must contain combination of alphanumeric values with special characters only'
              error={!checkUsername && formData.username.length > 0}
              handleKeyDown={handleKeyDown}
              handleChange={handleChange}
              handleChangeFocusAndBlur={handleChangeFocusAndBlur}
           />
          <PasswordInput
               show={showPassword}
               name='password'
               value={formData.password}
               labelValue='PASSWORD'
               error={usernameAndPasswordMatchingError}
               errorDetail='USERNAME and PASSWORD should not be same'
               handleKeyDown={handleKeyDown}
               handleChange={handleChange}
               handleChangeFocusAndBlur={handleChangeFocusAndBlur}
               handleClickShow={handleClickShowPassword}
          />
        </div>
        <AuthButton text='LOGIN' isDisabled={usernameAndPasswordMatchingError || !checkUsername} w={'w-40'} />
        <p className='mt-[2vh]'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}