import React, {useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';
import { containsAlphabetsNumbersAndSpecialChars } from '../utilites';

export const Login = () => {
  const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;

  const [username, setUsername] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [userNameError, setUserNameError] = useState(false);
  const usernameAndPasswordMatchingError = (((password && username) && (username === password)) ? true : false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!containsAlphabetsNumbersAndSpecialChars(username)) return setUserNameError(true);
    else setUserNameError(false);

    if (username && password){
      setUsername('');
      setPassword('');
      setUserNameError(false);
      return alert('Your details has been verified, Thanks!');
    }
  }

  const handleKeyDown = (event) => {
    if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
  }

  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center gap-y-10'>
          <div className='flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
            <label htmlFor="usernameLable" className={`w-fit text-xs ${userNameError?'text-error-color':'text-[#0a856d]'} pl-4 ${usernameFocus || username.length > 0 ? 'block' : 'hidden'}`}>USERNAME</label>
            <input
              type='text'
              required
              name='username'
              value={username}
              placeholder={usernameFocus ? '' : 'USERNAME'}
              onKeyDown={handleKeyDown}
              className={`w-full border-b-[1px] ${usernameFocus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
              onChange={e => setUsername(e.target.value)}
              onFocus={() => setUsernameFocus(true)}
              onBlur={() => setUsernameFocus(false)}
            />
            <p className='text-red text-left text-error-color text-sm'>{userNameError ? 'USERNAME must contain combination of alphanumeric values with special characters only' : ''}</p>
          </div>
          <div className='flex flex-col w-full lg:w-1/2 justify-center align-center'>
            <label htmlFor="passwordLable" className={`w-fit text-xs text-[#0a856d] pl-4 ${passwordFocus || password.length > 0 ? 'block' : 'hidden'}`}>PASSWORD</label>
            <div className='flex items-center' onFocus={()=>setPasswordFocus(true)} onBlur={()=>setPasswordFocus(false)}>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                name='password'
                value={password}
                placeholder={passwordFocus ? '' : 'PASSWORD'}
                onKeyDown={handleKeyDown}
                className={`w-full border-b-[1px] ${passwordFocus ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                onChange={e => setPassword(e.target.value)}
              />
              <button type='button' onClick={handleClickShowPassword} className='ml-[-7%]'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </button>
            </div>
            <p className='text-red text-left text-error-color text-sm'>{usernameAndPasswordMatchingError ? 'USERNAME and PASSWORD should not be same' : ''}</p>
          </div>
        </div>
        <button type='submit' disabled={usernameAndPasswordMatchingError} className='bg-[#0a856d] text-white px-14 py-2 rounded-lg mt-14'>LOGIN</button>
        <p className='mt-[2vh]'>Don't have account? <Link className='underline' to='/signup'>SignUp</Link></p>
      </form>
    </div>
  )
}