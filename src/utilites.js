const ALPHA_NUM_CHAR_REGEX = /^[a-zA-Z0-9!@#$%&()*\\-`.+,"]*$/;
const ALPHA = /^[a-zA-Z ]*$/;
export const initFormData = { name: '', username: '', email: '', phoneNumber: '', newPassword: '', confirmNewPassword: '' };
export const initFocusData = { name: false, username: false, email: false, phoneNumber: false, newPassword: false, confirmNewPassword: false };

export const containsAlphabetsNumbersAndSpecialChars = (str) => {
    return (/[A-Za-z]/.test(str) && /[0-9]/.test(str) && /[!@#$%^&*(),.?":{}|<>]/.test(str));
}
export const handleCheckNewPassword = (username, newPassword) => {
    let check = containsAlphabetsNumbersAndSpecialChars(newPassword);
    if (!check || username === newPassword) {
        if (username === newPassword && !check) {
            return 'USERNAME and PASSWORD should not be same, PASSWORD must contain combination of alphanumeric values with special characters only';
        } else if (username === newPassword) {
            return 'USERNAME and PASSWORD should not be same';
        } else return 'PASSWORD must contain combination of alphanumeric values with special characters only';
    }
}
export const handleKeyDown = (event) => {
    if (event.target.name === 'name') {
        let n = event.target.value.length, value = event.target.value;
        let lastS = value[n - 1];
        if (!ALPHA.test(event.key) || (lastS === ' ' && event.key === ' ') || (n < 1 && event.key === ' ')) event.preventDefault();
    }else if (!ALPHA_NUM_CHAR_REGEX.test(event.key)) event.preventDefault();
}
export const getInputSingupData = (
    formData, focusData, showPassword, checkUsername, checkNewPassword, checkConfirmNewPassword,
    handleChange, handleChangeFocusAndBlur,handleClickShow) => {
    const checkEmail = formData.email.includes('@' && '.com');
    const checkPhoneNumber = formData.phoneNumber.length > 9 && formData.phoneNumber.length <=10;
    return [
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
            error: !checkUsername && formData.username.length > 0,
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
            error: !checkPhoneNumber && formData.phoneNumber.length>0,
            errorDetail: 'Your PHONE NO. is invalid, it must include 10 numbers',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'newPassword',
            show: showPassword.newPassword,
            value: formData.newPassword,
            labelValue: 'NEW PASSWORD',
            focus: focusData.newPassword,
            error: checkNewPassword && formData.newPassword.length > 0,
            errorDetail: checkNewPassword,
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow,
        },
        {
            name: 'confirmNewPassword',
            show: showPassword.confirmNewPassword,
            value: formData.confirmNewPassword,
            labelValue: 'CONFIRM NEW PASSWORD',
            focus: focusData.confirmNewPassword,
            error: checkConfirmNewPassword && formData.confirmNewPassword.length > 0,
            errorDetail: 'CONFIRM PASSWORD must be same as NEW PASSWORD',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow,
        }
    ]
}

export const getInputLoginData = (formData, focusData, showPassword, checkUsername, usernameAndPasswordMatchingError,
    handleChange, handleChangeFocusAndBlur, handleClickShow) => {
    return [
        {
            name: 'username',
            value: formData.username,
            labelValue: 'USERNAME',
            focus: focusData.username,
            error: !checkUsername && formData.username.length > 0,
            errorDetail: 'USERNAME must contain combination of alphanumeric values with special characters only',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur
        },
        {
            name: 'password',
            show: showPassword,
            value: formData.password,
            labelValue: 'PASSWORD',
            focus: focusData.password,
            error: usernameAndPasswordMatchingError,
            errorDetail: 'USERNAME and PASSWORD should not be same',
            handleKeyDown,
            handleChange,
            handleChangeFocusAndBlur,
            handleClickShow: handleClickShow
        }
    ]
}