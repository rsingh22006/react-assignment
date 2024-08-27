import React from 'react';
import {TextField, InputLabel, InputAdornment, FormControl, Box, OutlinedInput, Button, Input } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {Visibility,VisibilityOff} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { Navbar } from '../components/Navbar';

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar headtext={'Login'} headtextSize={'4xl'} paraText={'Sign in to continue'}/>
      {/* <div className='bg-[#0a856d] text-white h-[15vh] text-center'>
        <p className='pt-[2%] text-4xl'>Login</p>
        <p className='text-gray-300'>Sign in to continue</p>
      </div> */}
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1} }}
        noValidate
        autoComplete="off"
        className='mt-[7vh] w-[70vw] mx-auto'
      >
        <div>
          <TextField id="standard-basic" label="USERNAME" variant="standard" className='w-full lg:w-1/2' />
        </div>
        <div>
          <FormControl sx={{ m: 1}} className='w-full lg:w-1/2' variant="standard">
            <InputLabel htmlFor="standard-adornment-password">NEW PASSWORD</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <button className='bg-[#0a856d] px-14 py-3 rounded-xl mt-10'>LOGIN</button>
        <p className='mt-[2vh]'>Don't have account? <Link className='text-[blue]' to='/signup'>SignUp</Link></p>
      </Box>
    </div>
  )
}