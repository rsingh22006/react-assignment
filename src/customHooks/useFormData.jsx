import React from 'react'
import { useNavigate } from 'react-router-dom';

export const useFormData = (type, initData) => {
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState(initData);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e, checkUsername, checkPassword, checkConfirmPassword, checkEmail, checkPhoneNumber) => {
        e.preventDefault();
        let isErrorOccured = false;
        if (checkUsername || checkPassword || checkConfirmPassword || checkEmail || checkPhoneNumber) isErrorOccured = true;
        if (isErrorOccured) return;
        if (type === 'login') {
            setFormData(initData);
            return alert('Your details has been verified, Thanks!');
        } else {
            const filteredName= formData.name.split(' ').filter(el=>el.length>0);
            let finalName='';
            filteredName?.forEach(el=>finalName+=`${el} `)
            finalName=finalName.trim();
            setFormData({ ...formData,name:finalName});
            alert('You have signed up, Redirecting to Login Thanks!');
            return navigate('/login');
        }
    }
    return { formData, handleChange, handleSubmit }
}