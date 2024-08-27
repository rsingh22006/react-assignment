import React, { useState } from 'react';
import { TextField, InputLabel, InputAdornment, FormControl, Box, OutlinedInput, Button, Input } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar';

export const Login = () => {
  const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;

  function containsAlphabetsNumbersAndSpecialChars(str) {
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const usernameAndPasswordMatchingError = (((password && username) && (username === password)) ? true : false);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!containsAlphabetsNumbersAndSpecialChars(username))return setUserNameError(prev => !prev);
    if(username && password)return alert('Your details has been verified, Thanks!');
    else return alert('Fill all the details')
  }

  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'} />
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1 } }}
        noValidate
        autoComplete="off"
        className='mt-[7vh] w-[70vw] mx-auto'
        onSubmit={handleSubmit}
      >
        <div>
          <TextField id="standard-basic" error={userNameError} helperText={userNameError ? 'USERNAME must contain combination of alphanumeric values with special characters only' : ''} variant="standard" className='w-full lg:w-1/2'
            label="USERNAME" color="success" onKeyDown={(event) => {
              if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault()
              setUsername(event.target.value);
            }}
          />
        </div>
        <div>
          <TextField id="standard-basic2" error={usernameAndPasswordMatchingError} helperText={usernameAndPasswordMatchingError ? 'USERNAME and PASSWORD should not be same' : ''} variant="standard" className='w-full lg:w-1/2'
            type={showPassword ? 'text' : 'password'}
            label="PASSWORD" color="success" onKeyDown={(event) => {
              if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault()
              setPassword(event.target.value);
            }}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>,
              // classes: {adornedEnd: classes.adornedEnd}
            }}
          />
        </div>
        <button disabled={usernameAndPasswordMatchingError} className='bg-[#0a856d] px-14 py-3 rounded-xl mt-10'>LOGIN</button>
        <p className='mt-[2vh]'>Don't have account? <Link className='text-[blue]' to='/signup'>SignUp</Link></p>
      </Box>
    </div>
  )
}