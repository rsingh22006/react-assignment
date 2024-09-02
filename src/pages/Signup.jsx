import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { containsAlphabetsNumbersAndSpecialChars, handleCheckNewPassword } from '../utilites';
import { AuthButton } from '../components/AuthButton';

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
    const checkNewPassword = handleCheckNewPassword(formData.username,formData.newPassword);
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

        if (!checkUsername || !formData.email.includes('@' && '.com') || !(formData.phoneNumber.length > 9) || !checkNewPassword || checkConfirmNewPassword) isErrorOccured = true;

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
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
                        <label htmlFor="nameLable" className={`absolute top-[-25%] w-fit text-xs text-[#0a856d] pl-4 ${focusData.name || formData.name.length > 0 ? 'block' : 'hidden'}`}>NAME</label>
                        <input
                            type='text'
                            required
                            name='name'
                            value={formData.name}
                            placeholder={focusData.name ? '' : 'NAME'}
                            className={`w-full border-b-[1px] ${focusData.name ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                            onKeyDown={handleKeyDown}
                            onChange={handleChange}
                            onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                            onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                        />
                        <p className={`${true ? 'visible' : 'invisible'} h-10`} />
                    </div>
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
                        <label htmlFor="usernameLable" className={`absolute top-[-25%] w-fit text-xs ${!checkUsername && formData.username.length > 0 ? 'text-error-color' : 'text-[#0a856d]'} pl-4 ${focusData.username || formData.username.length > 0 ? 'block' : 'hidden'}`}>USERNAME</label>
                        <input
                            type='text'
                            required
                            name='username'
                            value={formData.username}
                            placeholder={focusData.username ? '' : 'USERNAME'}
                            onKeyDown={handleKeyDown}
                            className={`w-full border-b-[1px] ${focusData.username ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                            onChange={handleChange}
                            onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                            onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                        />
                        <p className={`text-red text-left text-error-color text-sm pl-4 ${!checkUsername && formData.username.length > 0 ? 'visible' : 'invisible'} h-10`}>USERNAME must contain combination of alphanumeric values with special characters only</p>
                    </div>
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
                        <label htmlFor="emailLable" className={`absolute top-[-25%] w-fit text-xs ${!checkEmail && formData.email.length > 0 ? 'text-error-color' : 'text-[#0a856d]'} pl-4 ${focusData.email || formData.email.length > 0 ? 'block' : 'hidden'}`}>EMAIL</label>
                        <input
                            type='text'
                            required
                            name='email'
                            value={formData.email}
                            placeholder={focusData.email ? '' : 'EMAIL'}
                            onKeyDown={handleKeyDown}
                            className={`w-full border-b-[1px] ${focusData.email ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                            onChange={handleChange}
                            onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                            onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                        />
                        <p className={`text-red text-left text-error-color text-sm pl-4 ${!checkEmail && formData.email.length > 0 ? 'visible' : 'invisible'} h-10`}>Your EMAIL is invalid</p>
                    </div>
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center gap-y-2'>
                        <label htmlFor="phoneNumberLable" className={`absolute top-[-25%] w-fit text-xs ${!checkPhoneNumber && formData.phoneNumber.length > 0 ? 'text-error-color' : 'text-[#0a856d]'} pl-4 ${focusData.phoneNumber || formData.phoneNumber.length > 0 ? 'block' : 'hidden'}`}>PHONE NO.</label>
                        <div className={'relative flex items-center'}>
                            <span className={`absolute top-0 left-[-15px] ${focusData.phoneNumber || formData.phoneNumber.length > 0 ? 'block' : 'hidden'}`}>+91</span>
                            <input
                                type='number'
                                required
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                placeholder={focusData.phoneNumber ? '' : 'PHONE NO.'}
                                onKeyDown={handleKeyDown}
                                className={`w-full border-b-[1px] ${focusData.phoneNumber ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                                onChange={handleChange}
                                onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                                onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                            />
                        </div>
                        <p className={`text-red text-left text-error-color text-sm pl-4 ${!checkPhoneNumber && formData.phoneNumber.length > 0 ? 'visible' : 'invisible'} h-10`}>Your PHONE NO. is invalid, it must greater than 9 numbers</p>
                    </div>
                </div>
                <div className='mb-[6vh] flex justify-between flex-col lg:flex-row gap-10'>
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center'>
                        <label htmlFor="newPasswordLable" className={`absolute top-[-25%] w-fit text-xs ${checkNewPassword && formData.newPassword.length>0 ? 'text-error-color' : 'text-[#0a856d]'} pl-4 ${focusData.newPassword || formData.newPassword.length > 0 ? 'block' : 'hidden'}`}>PASSWORD</label>
                        <div className='flex items-center'>
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                required
                                name='newPassword'
                                value={formData.newPassword}
                                placeholder={focusData.newPassword ? '' : 'PASSWORD'}
                                onKeyDown={handleKeyDown}
                                className={`w-full border-b-[1px] ${focusData.newPassword ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                                onChange={handleChange}
                                onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                                onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                            />
                            <button type='button' onClick={handleClickShowNewPassword} className='ml-[-7%] text-gray-400'>
                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                        <p className={`text-red text-left text-error-color text-sm pl-4 ${checkNewPassword && formData.newPassword.length>0 ? 'visible' : 'invisible'} h-10`}>{checkNewPassword}</p>
                    </div>
                    <div className='relative flex flex-col w-full lg:w-1/2 justify-center align-center'>
                        <label htmlFor="confirmPasswordLable" className={`absolute top-[-25%] w-fit text-xs ${checkConfirmNewPassword ? 'text-error-color' : 'text-[#0a856d]'} pl-4 ${focusData.confirmNewPassword || formData.confirmNewPassword.length > 0 ? 'block' : 'hidden'}`}>CONFIRM NEW PASSWORD</label>
                        <div className='flex items-center'>
                            <input
                                type={showConfirmNewPassword ? 'text' : 'password'}
                                required
                                name='confirmNewPassword'
                                value={formData.confirmNewPassword}
                                placeholder={focusData.confirmNewPassword ? '' : 'CONFIRM NEW PASSWORD'}
                                onKeyDown={handleKeyDown}
                                className={`w-full border-b-[1px] ${focusData.confirmNewPassword ? 'border-[#0a856d]' : 'border-gray-500'} pl-4 focus:outline-none`}
                                onChange={handleChange}
                                onFocus={(e) => handleChangeFocusAndBlur(e, 'focus')}
                                onBlur={(e) => handleChangeFocusAndBlur(e, 'blur')}
                            />
                            <button type='button' onClick={handleClickShowConfirmNewPassword} className='ml-[-7%] text-gray-400'>
                                {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                        <p className={`text-red text-left text-error-color text-sm pl-4 ${checkConfirmNewPassword ? 'visible' : 'invisible'} h-10`}>CONFIRM PASSWORD must be same as PASSWORD</p>
                    </div>
                </div>
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}