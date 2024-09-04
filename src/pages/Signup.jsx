import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { getInputSingupData, handleCheckConfirmNewPassword, handleCheckEmail, handleCheckNewPassword, handleCheckUsername, initFocusData, initFormData } from '../utilites';
import { AuthButton } from '../components/AuthButton';
import { InputField } from '../components/InputField';

export const Signup = (props) => {
    console.log('props',props);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initFormData);
    const [focusData, setFocusData] = useState(initFocusData);
    const [showPassword, setShowPassword] = useState({ newPassword: false, confirmNewPassword: false });
    const checkUsername = handleCheckUsername(formData.username)
    const checkNewPassword = handleCheckNewPassword(formData.username, formData.newPassword);
    const checkConfirmNewPassword = handleCheckConfirmNewPassword(formData.newPassword, formData.confirmNewPassword)
    const checkEmail = handleCheckEmail(formData.email)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleChangeFocusAndBlur = (event, type) => {
        setFocusData({ ...focusData, [event.target.name]: type === 'focus' ? true : false })
    }
    const handleClickShow = (name) => {
        const updatedObj = { ...showPassword, [name]: !showPassword[name] };
        setShowPassword(updatedObj)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let isErrorOccured = false;
        if (!checkUsername || checkEmail || !(formData.phoneNumber.length > 9) || checkNewPassword || checkConfirmNewPassword) isErrorOccured = true;
        if (isErrorOccured) return;
        alert('You have signed up, Redirecting to Login Thanks!');
        setFormData(initFormData);
        return navigate('/login');
    }

    const inputData = getInputSingupData(
        formData, focusData, showPassword, checkUsername, checkEmail, checkNewPassword, checkConfirmNewPassword,
        handleChange, handleChangeFocusAndBlur, handleClickShow
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
            <input type="text" />
        </div>
    )
}