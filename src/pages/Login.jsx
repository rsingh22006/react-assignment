import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { containsAlphabetsNumbersAndSpecialChars } from '../utilites';
import { AuthButton } from '../components/AuthButton';

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
          <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
            <label htmlFor="usernameLable" className={`absolute top-[-25%] w-fit text-xs pl-4 ${!checkUsername && formData.username.length > 0 ? 'text-error-color' : 'text-[#0a856d]'} ${focusData.username || formData.username.length > 0 ? 'block' : 'hidden'}`}>USERNAME</label>
            <input
              type='text'
              required
              name='username'
              value={formData.username}
              placeholder={focusData.username ? '' : 'USERNAME'}
              onKeyDown={handleKeyDown}
              className={`w-full border-b-[1px] ${focusData.username ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
              onChange={handleChange}
              onFocus={(e)=>handleChangeFocusAndBlur(e,'focus')}
              onBlur={(e)=>handleChangeFocusAndBlur(e,'blur')}
            />
            <p className={`text-red text-left text-error-color text-sm pl-4 ${!checkUsername && formData.username.length > 0 ? 'visible' : 'invisible'} h-10`}>USERNAME must contain combination of alphanumeric values with special characters only</p>

          </div>
          <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center'>
            <label htmlFor="passwordLable" className={`absolute top-[-25%] w-fit text-xs pl-4 ${usernameAndPasswordMatchingError ? 'text-error-color' : 'text-[#0a856d]'} ${focusData.password || formData.password.length > 0 ? 'block' : 'hidden'}`}>PASSWORD</label>
            <div className='flex items-center'>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                name='password'
                value={formData.password}
                placeholder={focusData.password ? '' : 'PASSWORD'}
                onKeyDown={handleKeyDown}
                className={`w-full border-b-[1px] ${focusData.password ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                onChange={handleChange}
                onFocus={(e)=>handleChangeFocusAndBlur(e,'focus')}
                onBlur={(e)=>handleChangeFocusAndBlur(e,'blur')}
              />
              <button type='button' onClick={handleClickShowPassword} className='ml-[-7%] text-gray-400'>{showPassword ? <VisibilityOff /> : <Visibility />}</button>
            </div>
            <p className={`text-red text-left text-error-color text-sm pl-4 ${usernameAndPasswordMatchingError ? 'visible' : 'invisible'} h-10`}>USERNAME and PASSWORD should not be same</p>
          </div>
        </div>
        <AuthButton text='LOGIN' isDisabled={usernameAndPasswordMatchingError} w={'w-40'} />
        <p className='mt-[2vh]'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}