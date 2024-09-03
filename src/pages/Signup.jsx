import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { containsAlphabetsNumbersAndSpecialChars, getInputSingupData, handleCheckNewPassword, initFocusData, initFormData } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';

export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initFormData);
    const [focusData, setFocusData] = useState(initFocusData);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const checkUsername = containsAlphabetsNumbersAndSpecialChars(formData.username);
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

    const inputData = getInputSingupData(
        formData, focusData, showNewPassword, showConfirmNewPassword, checkUsername, checkNewPassword, checkConfirmNewPassword,
        handleChange, handleChangeFocusAndBlur, handleClickShowNewPassword, handleClickShowConfirmNewPassword
    );
    
    return (
        <div>
            <Navbar headtext={'Create new Account'} />
            <form autoComplete='off' className='mt-[7vh] w-[70vw] mx-auto' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {inputData.map((el, idx) =>
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