import React from 'react';
import {TextField, InputLabel, InputAdornment, FormControl, Box, OutlinedInput, Button, Input,IconButton } from '@mui/material'
import {Visibility,VisibilityOff} from '@mui/icons-material';
import { Navbar } from '../components/Navbar';

export const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1 } }}
                noValidate
                autoComplete="off"
                className='mt-[7vh] w-[70vw] mx-auto relative'
            >
                <div className='mb-[2vh] flex justify-between flex-col lg:flex-row'>
                    <TextField id="filled-basic" label="NAME" variant="filled" className='w-full lg:w-1/2' />
                    <TextField id="standard-basic" label="USERNAME" variant="standard" className='w-full lg:w-1/2' />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row'>
                    <TextField id="standard-basic" label="EMAIL" variant="standard" className='w-full lg:w-1/2' />
                    <TextField id="standard-basic" label="PHONE NO." variant="standard" className='w-full lg:w-1/2' />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row'>
                    <FormControl sx={{ m: 1}} variant="standard" className='w-full lg:w-1/2'>
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
                    <FormControl sx={{ m: 1}} variant="standard" className='w-full lg:w-1/2'>
                        <InputLabel htmlFor="standard-adornment-password">CONFIRM NEW PASSWORD</InputLabel>
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
                <button className='bg-[#0a856d] px-20 py-3 rounded-xl mt-10 absolute right-5'>SIGN UP</button>
            </Box>
        </div>
    )
}