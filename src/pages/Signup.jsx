import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { containsAlphabetsNumbersAndSpecialChars, handleCheckNewPassword, handleKeyDown, initFocusData, initFormData } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';

export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initFormData);
    const [focusData, setFocusData] = useState(initFocusData);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const checkUsername = containsAlphabetsNumbersAndSpecialChars(formData.username);
    const checkPhoneNumber = formData.phoneNumber.length > 9;
    const checkEmail = formData.email.includes('@' && '.com');
    const checkNewPassword = handleCheckNewPassword(formData.username, formData.newPassword);
    const checkConfirmNewPassword = ((
        (formData.newPassword && formData.confirmNewPassword) &&
        (formData.newPassword !== formData.confirmNewPassword)
    ) ? true : false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleChangeFocusAndBlur = (event, type) => {
        setFocusData({ ...focusData, [event.target.name]: type === 'focus' ? true : false })
    }

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowConfirmNewPassword = () => setShowConfirmNewPassword((show) => !show);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isErrorOccured = false;

        if (!checkUsername || !formData.email.includes('@' && '.com') || !(formData.phoneNumber.length > 9) || checkNewPassword || checkConfirmNewPassword) isErrorOccured = true;

        if (isErrorOccured) return;

        alert('You have signed up, Redirecting to Login Thanks!');
        setFormData(initFormData);
        return navigate('/login');
    }

    const inputData = [
        {
            name: 'name',
            value: formData.name,
            labelValue: 'NAME',
            focus: focusData.name,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            focus: focusData.username,
            error: !checkUsername && formData.username.length >0,
            errorDetail: 'USERNAME must contain combination of alphanumeric values with special characters only',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'email',
            type: 'email',
            value: formData.email,
            labelValue: 'EMAIL',
            focus: focusData.email,
            error: !checkEmail && formData.email.length > 0,
            errorDetail: 'Your EMAIL is invalid',
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'phoneNumber',
            type: 'number',
            value: formData.phoneNumber,
            labelValue: 'PHONE NO.',
            focus: focusData.phoneNumber,
            error: !checkPhoneNumber && formData.phoneNumber.length > 0,
            errorDetail: 'Your PHONE NO. is invalid, it must greater than 9 numbers',
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'newPassword',
            show: showNewPassword,
            value: formData.newPassword,
            labelValue: 'NEW PASSWORD',
            focus: focusData.newPassword,
            error: checkNewPassword && formData.newPassword.length >0,
            errorDetail: checkNewPassword,
            handleClickShow: handleClickShowNewPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'confirmNewPassword',
            show: showConfirmNewPassword,
            value: formData.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            focus: focusData.confirmNewPassword,
            error: checkConfirmNewPassword && formData.confirmNewPassword.length > 0,
            errorDetail: 'CONFIRM PASSWORD must be same as NEW PASSWORD',
            handleClickShow: handleClickShowConfirmNewPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        }
    ]

    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {inputData.map((el,idx) =>
                        <InputField
                            key={idx}
                            name={el.name}
                            show={el.show}
                            type={el.type}
                            value={el.value}
                            labelValue={el.labelValue}
                            focus={el.focus}
                            error={el.error}
                            errorDetail={el.errorDetail}
                            handleKeyDown={el.handleKeyDown}
                            handleChange={el.handleChange}
                            handleChangeFocusAndBlur={el.handleChangeFocusAndBlur}
                            handleClickShow={el?.handleClickShow}
                        />
                    )}
                </div>
                <AuthButton text='SIGN UP' floatRight={'float-right'} />
            </form>
        </div>
    )
}