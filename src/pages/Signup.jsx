import React from 'react';
import { FilledInput, TextField, InputLabel, InputAdornment, FormControl, Box, OutlinedInput, Button, Input } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className='bg-[#0a856d] text-white h-[15vh] text-center'>
                <p className='pt-[2%]'>Create new Account</p>
            </div>
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' } }}
                noValidate
                autoComplete="off"
                className='mt-[7vh] w-[70vw] mx-auto relative'
            >
                <div className='mb-[2vh]'>
                    <TextField id="filled-basic" label="NAME" variant="filled" />
                    <TextField id="standard-basic" label="USERNAME" variant="standard" />
                </div>
                <div className='mb-[6vh]'>
                    <TextField id="standard-basic" label="EMAIL" variant="standard" />
                    <TextField id="standard-basic" label="PHONE NO." variant="standard" />
                </div>
                <div className='mb-[6vh]'>
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
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
                    <FormControl sx={{ m: 1, width: '50ch' }} variant="standard">
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