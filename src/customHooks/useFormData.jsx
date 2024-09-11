import React from 'react'
import { useNavigate } from 'react-router-dom';
import { handleCheckConfirmNewPassword, handleCheckEmail, handleCheckName, handleCheckPassword, handleCheckPhoneNumber, handleCheckUsername } from '../utils/validationLogic';

export const useFormData = (type, initData) => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState(initData);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleGetErrors = () => {
        const checkUsername = handleCheckUsername(formData.username);
        const checkPassword = handleCheckPassword(formData.username, formData.password);
        let isErrorOccured = checkUsername || checkPassword;
        if (type === 'login') {
            return { errors: { checkUsername, checkPassword }, isErrorOccured }
        }
        else {
            const checkName = handleCheckName(formData.name);
            const checkEmail = handleCheckEmail(formData.email);
            const checkPhoneNumber = handleCheckPhoneNumber(formData.phoneNumber)
            const checkConfirmNewPassword = handleCheckConfirmNewPassword(formData.password, formData.confirmNewPassword);
            isErrorOccured = checkName || checkEmail || checkPhoneNumber || checkConfirmNewPassword;
            return { errors: { checkName, checkUsername, checkEmail, checkPhoneNumber, checkPassword, checkConfirmNewPassword }, isErrorOccured }
        }
    }
    const handleSubmit = (e, isErrorOccured) => {
        e.preventDefault();
        if (isErrorOccured) return;
        if (type === 'login') {
            setFormData(initData);
            return alert('Your details has been verified, Thanks!');
        } else {
            const filteredName = formData.name.split(' ').filter(el => el.length > 0);
            let finalName = '';
            filteredName?.forEach(el => finalName += `${el} `)
            finalName = finalName.trim();
            setFormData({ ...formData, name: finalName });
            alert('You have signed up, Redirecting to Login Thanks!');
            return navigate('/login');
        }
    }
    return { formData, errors: handleGetErrors(), handleChange, handleSubmit }
}