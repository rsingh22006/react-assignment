import React, { useRef, useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
    const ALPHA_REGEX = /^[a-zA-Z ]*$/;
    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;
    const navigate = useNavigate();

    // const formRef=useRef({});
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const confirmPasswordError = (((newPassword && confirmNewPassword && newPassword !== confirmNewPassword ? true : false)))
    const [userNameError, setUserNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState(false);
    const [helpingTextNewPassword, setHelpingTextNewPassword] = useState('');

    const confirmNewPassError = (((newPassword && confirmNewPassword) && (newPassword !== confirmNewPassword)) ? true : false);

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

    const handleClickShowConfirmNewPassword = () => setShowConfirmNewPassword((show) => !show);

    function containsAlphabetsNumbersAndSpecialChars(str) {
        return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(name && username && email && phoneNumber && newPassword && confirmNewPassword)) return alert('Fill all the details')

        let isErrorOccured = false;

        const checkUsername = containsAlphabetsNumbersAndSpecialChars(username);
        const checkEmail = email.includes('@' && 'com') ? true : false;
        const checkPhoneNumber = phoneNumber.length > 11 ? true : false;
        const checkNewPassword = containsAlphabetsNumbersAndSpecialChars(newPassword);
        if (!checkUsername) {
            setUserNameError(prev => !prev);
            isErrorOccured = true;
        }
        if (!checkEmail) {
            setEmailError(prev => !prev);
            isErrorOccured = true;
        }
        if (!checkPhoneNumber) {
            setPhoneNumberError(prev => !prev);
            setHelpingTextNewPassword('')
            isErrorOccured = true;
        }
        if (!checkNewPassword || username === newPassword) {
            setNewPasswordError(prev => !prev);
            isErrorOccured = true;
            // console.log('username', username, 'type', typeof username);
            // console.log('newPassword', newPassword, 'type', typeof newPassword);
            // console.log('!checkNewPassword',!checkNewPassword)
            // console.log('username===newPassword ', username === newPassword)
            // console.log('checkNewPassword', checkNewPassword)
            // console.log('username===newPassword && !checkNewPassword', username === newPassword && !checkNewPassword)
            if (username === newPassword && !checkNewPassword) {
                console.log('hi in first')
                console.log('username===newPassword', username === newPassword)
                console.log('checkNewPassword', checkNewPassword)
                setHelpingTextNewPassword(`USERNAME and PASSWORD should not be same, USERNAME must contain combination of alphanumeric values with special characters only`)
            } else if (username === newPassword) {
                setHelpingTextNewPassword(`USERNAME and PASSWORD should not be same`);
            } else setHelpingTextNewPassword(`USERNAME must contain combination of alphanumeric values with special characters only`);
        }

        if (isErrorOccured) return;

        alert('You have signed up, Redirecting to Login Thanks!');
        return navigate('/login');
    }

    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={handleSubmit}>
                <div className='mb-[8vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <TextField
                        label="NAME"
                        onKeyDown={(event) => {
                            if (!ALPHA_REGEX.test(event.key)) event.preventDefault();
                            const previousValue = event.target.value;
                            if (event.key !== 'Backspace' && event.key !== 'Tab') setName(previousValue + event.key);
                        }}
                         variant="standard" 
                         className='w-full lg:w-1/2'
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        inputProps={{ sx: { paddingLeft: '15px' } }}
                    />
                    <TextField
                        label="USERNAME"
                        error={userNameError}
                        helperText={userNameError ? 'USERNAME must contain combination of alphanumeric values with special characters only' : ''}
                        onKeyDown={(event) => {
                            if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
                            const previousValue = event.target.value;
                            if (event.key !== 'Backspace' && event.key !== 'Tab') setUsername(previousValue + event.key);
                        }} variant="standard" className='w-full lg:w-1/2'
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        inputProps={{ sx: { paddingLeft: '15px' } }}
                    />
                </div>
                <div className='mb-[8vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <TextField
                        typ='email'
                        label="EMAIL"
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        inputProps={{ sx: { paddingLeft: '15px' } }}
                        error={emailError} helperText={emailError ? 'Your EMAIL is invalid' : ''}
                        onChange={e => setEmail(e.target.value)} variant="standard" className='w-full lg:w-1/2' />
                    <TextField type='number' label="PHONE NO."
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        inputProps={{ sx: { paddingLeft: '15px' } }}
                        error={phoneNumberError}
                        helperText={phoneNumberError ? 'Your  PHONE NO. is invalid, it must greater than 9 numbers' : ''}
                        defaultValue="91"
                        onChange={e => setPhoneNumber(e.target.value)} variant="standard" className='w-full lg:w-1/2' />
                </div>
                <div className='mb-[8vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <TextField
                        error={helpingTextNewPassword ? true : false}
                        helperText={helpingTextNewPassword}
                        variant="standard"
                        className='w-full lg:w-1/2'
                        type={showNewPassword ? 'text' : 'password'}
                        label="NEW PASSWORD"
                        onKeyDown={(event) => {
                            if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault()
                            const previousValue = event.target.value;
                            if (event.key !== 'Backspace' && event.key !== 'Tab') setNewPassword(previousValue + event.key);
                        }}
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        InputProps={{
                            sx: { paddingLeft: '15px' },
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowNewPassword}>
                                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                    <TextField
                        error={confirmPasswordError}
                        helperText={confirmNewPassError ? 'CONFIRM PASSWORD must be same as PASSWORD' : ''}
                        variant="standard"
                        className='w-full lg:w-1/2'
                        type={showConfirmNewPassword ? 'text' : 'password'}
                        label="CONFIRM NEW PASSWORD"
                        onKeyDown={(event) => {
                            if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault()
                            const previousValue = event.target.value;
                            if (event.key !== 'Backspace' && event.key !== 'Tab') setConfirmNewPassword(previousValue + event.key);
                        }}
                        InputLabelProps={{ sx: { paddingLeft: '15px', '&.MuiInputLabel-shrink': { fontSize: '14px' } } }}
                        InputProps={{
                            sx: { paddingLeft: '15px' },
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowConfirmNewPassword}>
                                        {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                        }}
                    />
                </div>
                <button className='bg-[#0a856d] text-white px-20 py-2 rounded-xl mt-10 float-right'>SIGN UP</button>
            </form>
        </div>
    )
}