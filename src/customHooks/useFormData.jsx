import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleCheckConfirmNewPassword, handleCheckEmail, handleCheckName, handleCheckPassword, handleCheckPhoneNumber, handleCheckUsername } from '../utils/validationLogic';
import { UserContext } from '../App';

export const useFormData = (type, initData) => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initData);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleGetErrors = () => {
        const checkUsername = handleCheckUsername(formData?.username);
        const checkPassword = handleCheckPassword(formData?.username, formData?.password);
        const checkName = handleCheckName(formData?.name);
        const checkEmail = handleCheckEmail(formData?.email);
        const checkPhoneNumber = handleCheckPhoneNumber(formData?.phoneNumber)
        const checkConfirmNewPassword = handleCheckConfirmNewPassword(formData?.password, formData?.confirmNewPassword);
        let isErrorOccured = checkUsername || checkPassword || checkName || checkEmail || checkPhoneNumber || checkConfirmNewPassword;
        return { errors: { checkUsername, checkPassword, checkName, checkEmail, checkPhoneNumber, checkConfirmNewPassword }, isErrorOccured }
    }
    const handleSubmit = (e, isErrorOccured) => {
        e.preventDefault();
        if (isErrorOccured) return;
        if (type === 'login') {
            if (formData?.username === user.username && formData?.password === user.password) {
                alert('Your details has been verified, Redirecting to Dashboard Thanks!');
                return navigate('/dashboard');
            } else {
                return alert('Your details are not matching, Please use the signup details!');
            }
        }
        const filteredName = formData?.name.split(' ').filter(el => el.length > 0);
        let finalName = '';
        filteredName?.forEach(el => finalName += `${el} `);
        finalName = finalName.trim();
        if (type === 'signup') {
            const { confirmNewPassword, ...rest } = formData;  // Excluding 'confirmNewPassword'
            const updatedForm = { ...rest, name: finalName };
            alert('You have signed up, Redirecting to Login Thanks!');
            setUser(updatedForm);
            return navigate('/login');
        } else if (type === 'profile') {
            alert('You have updated details, Redirecting to Dashboard Thanks!');
            setUser(formData);
            return navigate('/dashboard');
        }
    }
    return { formData, errors: handleGetErrors(), handleChange, handleSubmit }
}