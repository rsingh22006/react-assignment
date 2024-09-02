import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { containsAlphabetsNumbersAndSpecialChars, handleCheckNewPassword } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { NormalInput } from '../components/NormalInput';
import { PasswordInput } from '../components/PasswordInput';

export const Signup = () => {
    const initFormData = { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' };
    const initFocusData = { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false };

    const [formData, setFormData] = useState(initFormData);
    const [focusData, setFocusData] = useState(initFocusData);

    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

    const checkUsername = containsAlphabetsNumbersAndSpecialChars(formData.username);
    const checkPhoneNumber = formData.phoneNumber.length > 9;
    const checkEmail = formData.email.includes('@' && '.com');
    const checkNewPassword = handleCheckNewPassword(formData.username, formData.newPassword);
    const checkConfirmNewPassword = (((formData.newPassword && formData.confirmNewPassword) && (formData.newPassword !== formData.confirmNewPassword)) ? true : false);

    const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,/\"]*$/;
    const ALPHA = /^[a-zA-Z]*$/;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleChangeFocusAndBlur = (event, type) => {
        setFocusData({ ...focusData, [event.target.name]: type === 'focus' ? true : false })
    }

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

    const handleClickShowConfirmNewPassword = () => setShowConfirmNewPassword((show) => !show);

    const handleKeyDown = (event) => {
        if (event.target.name === 'name') {
            if (!ALPHA.test(event.key)) event.preventDefault();
        } else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isErrorOccured = false;

        if (!checkUsername || !formData.email.includes('@' && '.com') || !(formData.phoneNumber.length > 9) || checkNewPassword || checkConfirmNewPassword) isErrorOccured = true;

        if (isErrorOccured) return;

        alert('You have signed up, Redirecting to Login Thanks!');
        setFormData(initFormData);
        return navigate('/login');
    }

    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={handleSubmit}>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <NormalInput
                        name='name'
                        type={'text'}
                        value={formData.name}
                        labelValue='NAME'
                        focus={focusData.name}
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                    />
                    <NormalInput
                        name='username'
                        type={'text'}
                        value={formData.username}
                        labelValue='USERNAME'
                        focus={focusData.username}
                        errorDetail='USERNAME must contain combination of alphanumeric values with special characters only'
                        error={!checkUsername && formData.username.length > 0}
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                    />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <NormalInput
                        name='email'
                        type={'text'}
                        value={formData.email}
                        labelValue='EMAIL'
                        focus={focusData.email}
                        errorDetail='Your EMAIL is invalid'
                        error={!checkEmail && formData.email.length > 0}
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                    />
                    <NormalInput
                        name='phoneNumber'
                        type={'number'}
                        value={formData.phoneNumber}
                        labelValue='PHONE NO.'
                        focus={focusData.phoneNumber}
                        errorDetail='Your PHONE NO. is invalid, it must greater than 9 numbers'
                        error={!checkPhoneNumber && formData.phoneNumber.length > 0}
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                    />
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <PasswordInput
                        show={showNewPassword}
                        name='newPassword'
                        value={formData.newPassword}
                        labelValue='NEW PASSWORD'
                        error={checkNewPassword && formData.newPassword.length > 0}
                        errorDetail={checkNewPassword}
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                        handleClickShow={handleClickShowNewPassword}
                    />
                    <PasswordInput
                        show={showConfirmNewPassword}
                        name='confirmNewPassword'
                        value={formData.confirmNewPassword}
                        labelValue='NEW PASSWORD'
                        error={checkConfirmNewPassword && formData.confirmNewPassword.length > 0}
                        errorDetail='CONFIRM PASSWORD must be same as PASSWORD'
                        handleKeyDown={handleKeyDown}
                        handleChange={handleChange}
                        handleChangeFocusAndBlur={handleChangeFocusAndBlur}
                        handleClickShow={handleClickShowConfirmNewPassword}
                    />
                </div>
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}