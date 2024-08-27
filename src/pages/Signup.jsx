import React, { useState } from 'react';
import { TextField, nputAdornment, FormControl, Box, OutlinedInput, Button, Input, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';

export const Signup = () => {
    const ALPHA_REGEX = /^[a-zA-Z ]*$/;
    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const usernameAndPasswordMatchingError = (((newPassword && username) && (username === newPassword)) ? true : false);
    const confirmPasswordError = (((newPassword && confirmNewPassword && newPassword !== confirmNewPassword ? true : false)))
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const confirmNewPassError = (((newPassword && confirmNewPassword) && (newPassword !== confirmNewPassword)) ? true : false);

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

    const handleClickShowConfirmNewPassword = () => setShowConfirmNewPassword((show) => !show);

    function containsAlphabetsNumbersAndSpecialChars(str) {
        return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('name',name)
        console.log('username',username)
        console.log('email',email)
        console.log('phoneNumber',phoneNumber)
        console.log('newPassword',newPassword)
        console.log('confirmNewPassword',confirmNewPassword)

        if (!(name && username && email && phoneNumber && newPassword && confirmNewPassword)) return alert('Fill all the details')

        const checkUsername = containsAlphabetsNumbersAndSpecialChars(username);
        const checkEmail = email.includes('@' && 'com') ? true : false;
        const checkPhoneNumber = phoneNumber.length>11 ? true : false;
        if (!checkUsername) return setUserNameError(prev => !prev);
        if (!checkEmail) return setEmailError(prev => !prev);
        if (!checkPhoneNumber) return setPhoneNumberError(prev => !prev);

        if (username && newPassword) return alert('Your details has been verified, Thanks!');
        else return alert('Fill all the details');
    }

    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1 } }}
                noValidate
                autoComplete="off"
                className='mt-[7vh] w-[70vw] mx-auto relative'
                onSubmit={handleSubmit}
            >
                <div className='mb-[2vh] flex justify-between flex-col lg:flex-row'>
                    <TextField id="filled-basic" label="NAME" onKeyDown={(event) => {
                        console.log('ALPHA_REGEX.test(event.key)',ALPHA_REGEX.test(event.key))
                        if (!ALPHA_REGEX.test(event.key)) event.preventDefault();
                        setName(event.target.value);
                    }} variant="filled" className='w-full lg:w-1/2' />
                    <TextField id="2" label="USERNAME" error={userNameError} helperText={userNameError ? 'USERNAME must contain combination of alphanumeric values with special characters only' : ''} onKeyDown={(event) => {
                        if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
                        setUsername(event.target.value);
                    }} variant="standard" className='w-full lg:w-1/2' />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row'>
                    <TextField id="email" type='email' label="EMAIL" error={emailError} helperText={emailError ? 'Your Email is not invalid' : ''} onChange={e => setEmail(e.target.value)} variant="standard" className='w-full lg:w-1/2' />
                    <TextField id="phone" type='number' label="PHONE NO." defaultValue="91" onChange={e => setPhoneNumber(e.target.value)} variant="standard" className='w-full lg:w-1/2' />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row'>
                    <TextField id="newPassword" error={usernameAndPasswordMatchingError} helperText={usernameAndPasswordMatchingError ? 'USERNAME and PASSWORD should not be same' : ''} variant="standard" className='w-full lg:w-1/2'
                        type={showNewPassword ? 'text' : 'password'}
                        label="NEW PASSWORD" onKeyDown={(event) => {
                            if (!ALPHA_REGEX.test(event.key)) event.preventDefault()
                            setNewPassword(event.target.value);
                        }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowNewPassword}
                                        onMouseDown={(e) => e.preventDefault()}
                                    >
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <TextField id="confirmNewPassword" error={confirmPasswordError} helperText={confirmNewPassError ? 'CONFIRM PASSWORD must be same as PASSWORD' : ''} variant="standard" className='w-full lg:w-1/2'
                        type={showNewPassword ? 'text' : 'password'}
                        label="CONFIRM NEW PASSWORD" onKeyDown={(event) => {
                            if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault()
                            setConfirmNewPassword(event.target.value);
                        }}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowConfirmNewPassword((prev) => !prev)}
                                        onMouseDown={handleClickShowConfirmNewPassword}
                                    >
                                        {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </div>
                <button className='bg-[#0a856d] px-20 py-3 rounded-xl mt-10 absolute right-5'>SIGN UP</button>
            </Box>
        </div>
    )
}